import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { FaUser, BiSearch, BiMenuAltRight } from "./assets";

import { Home, About } from "./components";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const {
    accountAnimation,
    animated,
    logoAnimation,
    searchAnimation,
    menuBtnAnimation,
    trail,
    socialMedia,
  } = useStateContext();
  return (
    <Router>
      <div className="container">
        <div className="strips">
          <div className="absolute w-[1px] h-screen bg-black/[0.2] left-1/4"></div>
          <div className="absolute w-[1px] h-screen bg-black/[0.2] left-2/4"></div>
          <div className="absolute w-[1px] h-screen bg-black/[0.2] left-3/4"></div>
        </div>

        <div className="top-bar">
          <ul className="list-none m-0 p-0 flex">
            <li className="list-none leading-[46px] pt-4 px-8 my-0 mx-4">
              <animated.div
                style={accountAnimation}
                className="fixed left-8 flex flex-row items-center"
              >
                <FaUser />
                <span className="ml-2 font-serif">Account</span>
              </animated.div>
            </li>

            <li>
              <animated.div
                style={logoAnimation}
                className="fixed left-[180px] pt-4"
              >
                <span className="font-charm font-bold text-2xl">
                  regel black
                </span>
              </animated.div>
            </li>

            <li>
              <animated.div
                style={searchAnimation}
                className="fixed right-[160px] pt-4"
              >
                <BiSearch className="text-2xl" />
              </animated.div>
            </li>

            <li>
              <animated.div
                style={menuBtnAnimation}
                className="fixed right-5 pt-2 w-10 h-10"
              >
                <BiMenuAltRight className="text-4xl"/>
              </animated.div>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/create-post" element={<CreatePost />} /> */}
      </Routes>

      <div className="media">
        <ul className="leading-none fixed right-5 top-[70%] p-2.5 px-2.5">
          {/* <li className="text-[18px] my-6 mx-0">
            <FaFacebookF />
          </li>
          <li className="text-[18px] my-6 mx-0">
            <BsInstagram />
          </li>
          <li className="text-[18px] my-6 mx-0">
            <BsTwitter />
          </li> */}
          {trail.map((animation, index) => (
            <animated.li
              key={index}
              style={animation}
              className="text-[18px] my-6 mx-0"
            >
              <a href={socialMedia[index].url}>
                {React.createElement(socialMedia[index].icon)}
              </a>
            </animated.li>
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default App;
