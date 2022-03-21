import React from 'react'
import { v4 as uuid } from 'uuid';
import { useStateValue } from '../../StateProvider';
import './Product.scss'


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        basketId: uuid(), 
        productId: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }
  return (
    <div className='product' >
      <div className='product__info'>
        <p className="product__info__title">{title}</p>
        <p className="product__info__price"><small>$</small><strong>{ price }</strong></p>
        <div className='product__info__rating'>
          {Array(rating).fill().map((_, i) => {
            return <p key={i}>🌟🔥</p>
          })}
        </div>

      </div>
      <img className='product__image' src={image} alt=""/>
      <button onClick={addToBasket} > Add To Basket</button>
    </div>
  )
}

export default Product