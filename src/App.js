import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Connexion from './components/connexion/Connexion';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Connexion" element={<Connexion/>}/>

      {/* le path ="*" est là pour specifier si l'élément ne renvoie à aucune page 1*/}
      {/*  */}
      <Route path="*" element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;