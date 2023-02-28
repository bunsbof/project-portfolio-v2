import React, { createContext, useContext, useEffect, useState } from "react";
import { useSpring, animated, config, useTrail } from "@react-spring/web";

import { FaFacebookF, BsInstagram, BsTwitter } from "../assets";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const socialMedia = [
    { icon: FaFacebookF, url: "https://www.facebook.com" },
    { icon: BsInstagram, url: "https://www.instagram.com" },
    { icon: BsTwitter, url: "https://www.twitter.com" },
  ];
  const [show, setShow] = useState(false);
  const springProps = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(50px)",
  });

  const appearText = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 2000,
    config: {
      duration: 1000,
    },
  });
  const appearImg = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1400,
    config: {
      duration: 1000,
    },
  });

  const accountAnimation = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 800,
    config: config.easeInOut,
  });

  const logoAnimation = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 1000,
    config: config.easeInOut,
  });

  const searchAnimation = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 1200,
    config: config.easeInOut,
  });

  const menuBtnAnimation = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 1400,
    config: config.easeInOut,
  });

  const contactAnimation = useSpring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, transform: "rotate(-90deg)" },
    delay: 1000,
    config: config.easeInOut,
    transform: "",
  });
  const tagAnimation = useSpring({
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    delay: 1000,
    config: config.easeInOut,
  });
  const shopAnimation = useSpring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, transform: "rotate(90deg)" },
    delay: 1600,
    config: config.easeInOut,
  });
  const yearAnimation = useSpring({
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    delay: 1600,
    config: config.easeInOut,
  });
  const addAnimation = useSpring({
    delay: 1000,
    from: { opacity: 0, x: -40, transform: "rotate(0deg)" },
    to: { opacity: 1, x: 0, transform: "rotate(90deg)" },
    config: config.easeInOut,
  });
  const arrowLeftAnimation = useSpring({
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
    delay: 2800,
    config: config.easeInOut,
  });
  const arrowRightAnimation = useSpring({
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
    delay: 2800,
    config: config.easeInOut,
  });
  const lineAnimation = useSpring({
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0 },
    delay: 2800,
    config: config.easeInOut,
  });

  const trail = useTrail(socialMedia.length, {
    delay: 2800,
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: config.easeInOut,
  });

  return (
    <StateContext.Provider
      value={{
        animated,
        springProps,
        setShow,
        appearText,
        appearImg,
        accountAnimation,
        logoAnimation,
        searchAnimation,
        menuBtnAnimation,
        contactAnimation,
        tagAnimation,
        shopAnimation,
        yearAnimation,
        addAnimation,
        arrowLeftAnimation,
        arrowRightAnimation,
        lineAnimation,
        trail,
        socialMedia,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
