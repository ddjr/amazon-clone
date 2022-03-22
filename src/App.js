import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51KfsFTCDgXZWOnhzUzfXUnyAodSboYzA8MLNhVerfRJejMgtant0K0Vp2jEEis1KRDXLW17x3isRApRvqrfxKSsR00Kf3sbBiZ');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //wil only run once when the app loads..
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/checkout" element={ 
            <>
              <Header />
              <Checkout /> 
            </> 
          }/>  
          <Route path="/" element={ 
            <>
              <Header />
              <Home /> 
            </> 
          }/>
          <Route path="/payment" element={ 
            <>
              <Header />
              <Elements stripe = {promise}>
                <Payment />
              </Elements>
            </> 
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
