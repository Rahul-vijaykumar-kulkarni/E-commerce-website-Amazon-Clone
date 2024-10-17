import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Navbar from './compoent/Navbar.jsx'
import Searchresult from './compoent/Searchresult.jsx';
import Productpage from './compoent/Productpage.jsx';
import Checkout from './compoent/Checkout.jsx';
import { Provider } from 'react-redux'
import  Store from './redux/Store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/search" element={<Searchresult />} />
        <Route path="/Productpage/:id" element={<Productpage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route exact path="/" element={<App />} /> {/* Fallback route */}
    </Routes>
    </Router>
    </Provider>
  </StrictMode>,
  
);
