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
import Description from "../Description/Description"

import Logo from "../Logo/Logo";
import ImagePopup from "../ImagePopup/ImagePopup";

import imageDogs from "../../images/5555 1.png"; 
import imageCats from "../../images/kitty 2.png"; 
import imageVolunteers from "../../images/volunteers_kittys 1.png"; 
import imageHelp from "../../images/dogs222 1.png";




function App() {  
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  // const [isDropdownVisible, setDropdownVisible] = useState([false, false, false]);

  // const toggleDropdown = (index) => {
  //   const updatedDropdowns = [...isDropdownVisible];
  //   updatedDropdowns[index] = !updatedDropdowns[index];
  //   setDropdownVisible(updatedDropdowns);
  // };






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
                // isDropdownVisible={isDropdownVisible}
                // toggleDropdown={toggleDropdown}
              />
              {/* <Description 
                isDropdownVisible={isDropdownVisible}
                toggleDropdown={toggleDropdown}
              /> */}
              <Dogs />
              <Footer />
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
              {/* <Logo 
                image={imageVolunteers}
              /> */}
              <Volunteers />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/help"
          element={
            <>
              <Header />
              {/* <Logo 
                image={imageHelp}
              /> */}
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
