import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import { FaXTwitter } from "react-icons/fa6";

import { FaGithubSquare } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

const Contect = () => {
  return (
    <>
      <div className="container" id="Contect">
        <h1>CONTACT ME </h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/up_44_akash?igsh=cnU5dG5sZXZsYWk1"
            target="_blank"
            className="item"
          >
            <FaSquareInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="item">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-rawat-686884340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="item"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="item">
            <FaXTwitter className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="item">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:akashrawatr697@gmail.com"
            target="_blank"
            className="item"
          >
            <CiMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contect;
