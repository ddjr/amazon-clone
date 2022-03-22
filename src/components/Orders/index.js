import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider';
import Order from '../Order'
import './Orders.scss'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect( async () => {
    if(user) {
      // const ordersRef = collection(db, `users/${user?.uid}/orders`);
      // const snap =  await getDocs(ordersRef);
      // snap.docs.map((doc) => {
      //   console.log("Data: ", doc.data() )
      // })
      const q = query(collection(db, `users/${user?.uid}/orders`), orderBy("created","desc"))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setOrders(querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        })))
        
      })
    } else {
      setOrders([])
    }
    
  },[user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__order'>
          {orders?.map( order => (
            <Order order={order} />
          ))}
        </div>
    </div>
  )
}

export default Orders