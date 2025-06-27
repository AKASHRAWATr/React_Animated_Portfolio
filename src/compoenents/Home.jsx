import React, { useEffect, useRef } from "react";
import pdf from "../pdf/AKASH RAWAT's Reume complete.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome TO My Profile",
        "MY Name Is AkashRawat",
        "Im Full Stack Devloper(MERN)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="AKASH RAWAT's Reume complete.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-left" data-aos-duration="1000">
            <img src={`/assets/Images/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
