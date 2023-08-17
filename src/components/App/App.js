import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Dogs from "../Dogs/Dogs";
import Cats from "../Cats/Cats";
import Volunteers from "../Volunteers/Volunteers";
import Help from "../Help/Help";
import Logo from "../Logo/Logo";
import imageDogs from "../../images/5555 1.png"; 
import imageCats from "../../images/kitty 2.png"; 



function App() {  
  return (
    <div className="app">
      <Routes>
        <Route exact path="/"
          element={
            <>
              <Header />
              <Main />
              <About />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/dogs"
          element={
            <>
              <Header />
              <Logo image={imageDogs}/>
              <Dogs />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/cats"
          element={
            <>
              <Header />
              <Logo image={imageCats}/>
              <Cats />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/volunteers"
          element={
            <>
              <Header />
              <Volunteers />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/help"
          element={
            <>
              <Header />
              <Help />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>   

  );
}

export default App;
