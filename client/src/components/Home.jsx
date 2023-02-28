import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, BsPlusLg, hero } from "../assets";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  const {
    animated,
    setShow,
    appearText,
    appearImg,
    addAnimation,
    tagAnimation,
    yearAnimation,
    contactAnimation,
    shopAnimation,
    arrowLeftAnimation,
    arrowRightAnimation,
    lineAnimation,
  } = useStateContext();
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <div className="data">
        <animated.div
          style={contactAnimation}
          className="py-2.5 px-7.5 absolute -left-5 top-[180px] transform rotate-[-90deg]"
        >
          <span className="font-serif ml-10">Contact</span>
        </animated.div>

        <animated.div
          style={tagAnimation}
          className="fixed top-[166px] left-[152px] py-2.5 px-7.5"
        >
          <span className="font-serif">
            You're not lucky, <br />
            You worth it
          </span>
        </animated.div>

        <animated.div
          style={yearAnimation}
          className="fixed top-[556px] left-[152px] py-2.5 px-7.5"
        >
          2023
        </animated.div>

        <animated.div
          style={arrowLeftAnimation}
          className="fixed top-[686px] left-[42px] py-2.5 px-7.5"
        >
          <FaArrowLeft className="text-xl" />
        </animated.div>

        <animated.div
          style={arrowRightAnimation}
          className="fixed top-[686px] left-[132px] py-2.5 px-7.5"
        >
          <FaArrowRight className="text-xl" />
        </animated.div>

        <animated.div
          style={addAnimation}
          className="fixed top-[556px] left-[382px] text-xl"
        >
          <BsPlusLg />
        </animated.div>
      </div>
      <div className="img fixed z-0 md:top-[24.6%] left-[38%] top-[46.6%]">
        <animated.img
          style={appearImg}
          src={hero}
          alt=""
          className="img w-[46%]"
        />
      </div>
      <div className="title fixed top-[276px] left-[862px]">
        <animated.span style={appearText} className="font-charm text-[62px]">
          regel
          <br />
          black
        </animated.span>
      </div>
      <animated.div
        style={lineAnimation}
        className="fixed left-[360px] top-[200px] bg-black w-[180px] h-[1px]"
      ></animated.div>
      <animated.div
        style={shopAnimation}
        className="py-2.5 px-7.5 fixed left-[1020px] top-[180px] transform rotate-[90deg]"
      >
        <span className="font-serif">E-shop</span>
      </animated.div>
    </>
  );
};

export default Home;
