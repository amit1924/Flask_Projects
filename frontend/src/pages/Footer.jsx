/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/bat.png";
import { SOCIAL_MEDIA_LINKS } from "../pages/constants";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center ">
        <img src={logo} width={200} className="my-20" alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            href={link.href}
            className=""
            key={index}
            target="_blank"
            rel="noopener noreferer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="pt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; Copyright 2024.All rights reserved
      </p>
    </div>
  );
};

export default Footer;
