
import React from "react";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { Home } from "./Pages";
import { ABOUT_ROUTE, HOME_ROUTE } from "./Constant/routes";
import Header from "./Header";
import About from "./Pages/About";
import Footer from "./Footer";

function App() {
  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={HOME_ROUTE} element={<Navigate replace to='/' />} />
      <Route path={ABOUT_ROUTE} element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
