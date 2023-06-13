import React from "react";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-900">
      <h1 className="text-white text-center p-4 flex-grow mt-5 mb-5">
        © 2023 ExpressVPN. All rights reserved.
      </h1>
      <div className="flex flex-1 justify-center">
        <AiFillYoutube className="text-white text-4xl mx-2" />
        <FaLinkedinIn className="text-white text-4xl mx-2" />
        <AiOutlineTwitter className="text-white text-4xl mx-2" />
        <FaFacebookF className="text-white text-4xl mx-2" />
        <AiFillInstagram className="text-white text-4xl mx-2" />
      </div>
    </div>
  );
};

export default Footer;
