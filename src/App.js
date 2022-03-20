import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
function App() {
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
