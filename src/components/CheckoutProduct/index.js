import React from 'react'
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.scss'
function CheckoutProduct({ basketId, productId, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          basketId: basketId,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt=""/>
        <div className='checkoutProduct__info'>
          <p className="checkoutProduct__info__title">{title}</p>
          <p className="checkoutProduct__info__price"><small>$</small><strong>{ price }</strong></p>
        <div className='checkoutProduct__info__rating'>
          {Array(rating).fill().map((_, i) => {
            return <p key={i}>🌟</p>
          })}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
        
      </div>
    </div>
  )
}

export default CheckoutProduct