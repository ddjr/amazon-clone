import React from 'react'
import './Checkout.scss'
import CheckoutAd from '../../media/checkoutAd.jpeg'
import Subtotal from '../Subtotal'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src={CheckoutAd} alt="" />
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {basket.map((item, index) => {
                    console.log("basket item: ", item, index)
                    return (
                        <CheckoutProduct 
                            productId={item.productId}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            basketId={item.basketId}
                            key={item.basketId}
                        />
                    )
                })}
            </div>
        </div>
        <div className='checkout__right'>
            <div className=''>
                <Subtotal />
            </div>
        </div>
    </div>
  )
}

export default Checkout