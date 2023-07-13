import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import About from './pages/About';
import SingleMeal from './pages/SingleMeal';
import Error from './pages/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <div className="container-md">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path='/meal/:mealId'element={<SingleMeal/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App
