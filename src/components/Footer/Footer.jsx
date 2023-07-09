import React from "react";
import "./footer.css";
import { FaArrowUpLong } from "react-icons/fa6";
import {
  FaGlobeAsia,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowBarRight } from "react-icons/bs";

function Footer() {
  return (
    <div class="Footer">
      <img
        src="https://wantedfornothing.com/wp-content/uploads/2023/02/copyright.svg"
        alt=""
        class="Footer____img"
      />

      <ul class="Footer__list">
        <li class="Footer__list__item" id="tomato">
          INFO@WANTEDFORNOTHING.COM
        </li>
        <li class="Footer__list__item">CONTACT US</li>
        <li class="Footer__list__item" id="li">
          PRIVACY POLICY TERMS OF USE
        </li>
        <div class="Footer__list__div">
          <span class="Footer__list__div__img">
            <FaGlobeAsia />
          </span>
          <span class="Footer__list__div__img">
            <FaInstagram />
          </span>
          <span class="Footer__list__div__img">
            <FaFacebookSquare />
          </span>
          <span class="Footer__list__div__img">
            <FaLinkedin />
          </span>
          <span class="Footer__list__div__img">
            <FaInstagram />
          </span>
        </div>
      </ul>
      <div class="Footer__inp">
        <p class="Footer__inp__p">STAY IN THE KNOW</p>

        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Email"
          class="Footer__inp__inp"
        />

        <div class="Footer__inp__svg">
          <BsArrowBarRight />
        </div>
      </div>

      <div class="Footer____img">
        <FaArrowUpLong />
      </div>
    </div>
  );
}

export default Footer;
