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
import ImagePopup from "../ImagePopup/ImagePopup";


import imageDogs from "../../images/page_dogs.png"; 
import imageCats from "../../images/page_cats_3.png"; 
import imageVolunteers from "../../images/сat_reflection.png"; 
import imageHelp from "../../images/cat_3.png";




function App() {

  const [selectedCard, setSelectedCard] = useState({isOpen: false, element: {}});

  function handleCardClick(card) {
    setSelectedCard({...selectedCard, isOpen: true, element: card});
  }

  function closeAllPopups() {
    setSelectedCard({...selectedCard, isOpen: false});
  }

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
              <Logo 
                image={imageDogs}
              />
              <Dogs />
              <Footer />
              {/* <ImagePopup active={modalActive} setActive={setModalActive}/> */}
            </>
          }
        ></Route>
        <Route exact path="/cats"
          element={
            <>
              <Header />
              <Logo 
                image={imageCats}
              />
              <Cats />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/volunteers"
          element={
            <>
              <Header />
              <Logo 
                image={imageVolunteers}
              />
              <Volunteers />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/help"
          element={
            <>
              <Header />
              <Logo 
                image={imageHelp}
              />
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
