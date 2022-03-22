import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer'
import axios from '../../axios';
import { db } from '../../firebase';
import { collection, doc, setDoc } from "firebase/firestore"; 
import './Payment.scss'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        // generate the special stripe secret witch allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log("The SECRET is >>>> ", clientSecret)
    console.log("user", user?.uid)
    const handleSubmit = async (event) => {
        // do stripe stuff
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            const ordersRef = doc(db, 'users', user?.uid, 'orders', paymentIntent.id);
            setDoc(ordersRef, {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            });
            navigate('/orders', { replace: true });
        })
    }
    const handleChange = event => {
        //listen for changes in the CardElement
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                )
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3> Delivery Address</h3>
                    </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                   <h3>Review Items and Delivery</h3>     
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct 
                            productId={item.productId}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            basketId={item.basketId}
                            key={item.basketId}
                        /> 
                    ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* stripe magic */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} className="payment__cardElement"/>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <h3>Order Total: {value}</h3>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={ processing || disabled || succeeded }>
                                <span>{processing ? <p>Proceessing...</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment