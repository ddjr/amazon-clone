import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
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
          <Route path="/" element={ 
          <>
            <Header />
            <Home /> 
          </> 
          }/>
          <Route path="/checkout" element={ 
          <>
            <Header />
            <Checkout /> 
          </>
          }/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
