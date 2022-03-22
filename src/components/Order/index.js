import React from 'react'
import moment from 'moment'
import './Order.scss'
import CheckoutProduct from '../CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
function Order({order}) {
    console.log("orders: ", order.data)
  return (
    <div className='order'>
        <h2>Order</h2>
        <p className='order__created'>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma") }</p>
        <p className='order__id'>{order.id}</p>
        {console.log(order.data)}
        {order.data.basket.map((item) => (
            <CheckoutProduct 
                productId={item.productId}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                basketId={item.basketId}
                key={item.basketId}
                hideButton = {true}
            />
        ))}
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <h3 className='order__total'>Order Total: {value}</h3>
                </>
            )}
            decimalScale={2}
            value={order.data.amount /100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
    </div>
  )
}

export default Order