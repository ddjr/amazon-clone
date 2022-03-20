import React from 'react'
import Product from '../Product'
import { v4 as uuid } from 'uuid';
// styles 
import './Home.scss'
// images 
import HeroBanner from '../../media/heroBanner.jpg'
import LeanStartupImg from '../../media/theLeanStartup.jpeg'
import Mixer from '../../media/Mixer.jpg'
import Monitor from '../../media/monitor.jpeg'
import IPad from '../../media/ipad.jpeg'
import Echo from '../../media/echo.jpeg'
import Vacuum from '../../media/vacuum.jpg'

const product1 = {
  id: uuid(),
  title: "the Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful",
  price: 11.99,
  rating: 4,
  image: LeanStartupImg,
}
const product2 = {
  id: uuid(),
  title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
  price: 239.00,
  rating: 3,
  image: Mixer,
}
const product3 = {
  id: uuid(),
  title: "49' CRG9 Dual QHD Curved QLED Gaming Monitor",
  price: 999.99,
  rating: 4,
  image: Monitor,
}
const product4 = {
  id: uuid(),
  title: "iPad Mini: There’s always more to explore.",
  price: 649.0,
  rating: 5,
  image: IPad,
}
const product5 = {
  id: uuid(),
  title: "Amazon Echo Dot 3rd Gen Anthracite Black - Smart Speaker Alexa",
  price: 49.99,
  rating: 3,
  image: Echo,
}
const product6 = {
  id: uuid(),
  title: "BoostIQ RoboVac 30C, Robot Vacuum Cleaner, Wi-Fi, Super-Thin, 1500Pa Suction, Boundary Strips Included, Quiet, Self-Charging Robotic Vacuum, Cleans Hard Floors to Medium-Pile Carpets",
  price: 169.99,
  rating: 4,
  image: Vacuum,
}

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src={ HeroBanner } alt="" />
            <div className='home__row'>
            <Product 
                title = { product1.title } 
                price = { product1.price }
                rating = { product1.rating }
                image = { product1.image }
                id = { product1.id }
              />
              <Product 
                title = { product2.title } 
                price = { product2.price }
                rating = { product2.rating }
                image = { product2.image }
                id = { product2.id }
              />
            </div>
            <div className='home__row'>
            <Product 
                title = { product3.title } 
                price = { product3.price }
                rating = { product3.rating }
                image = { product3.image }
                id = { product3.id }
              />
              <Product 
                title = { product4.title } 
                price = { product4.price }
                rating = { product4.rating }
                image = { product4.image }
                id = { product4.id }
              />
              <Product 
                title = { product5.title } 
                price = { product5.price }
                rating = { product5.rating }
                image = { product5.image }
                id = { product5.id }
              />
            </div>
            <div className='home__row'>
            <Product 
                title = { product6.title } 
                price = { product6.price }
                rating = { product6.rating }
                image = { product6.image }
                id = { product6.id }
              />
            </div>
        </div>
    </div>
  )
}

export default Home