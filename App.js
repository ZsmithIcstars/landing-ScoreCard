import React from 'react'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // use Routes and Route

//Pages 
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Navbar from './components/Navbar/Navbar'


function App() {
  return ( 
  <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/signup' element={<SignUp />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
  </Router>
  );

}

export default App;
