import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc"

const SocialMediaIcons = () => {
  return (
    <div className="flex-col flex h-full gap-2 justify-between items-center  ">
      <a target="_blank" className="text-4xl" href="https://www.instagram.com/sharpoetry/">
        <FaInstagram/></a>
        <a target="_blank" className="text-4xl" href="https://www.instagram.com/sharpoetry/">

        <FaFacebook/>
        </a>
        <a target="_blank" className="text-4xl" href="https://www.instagram.com/sharpoetry/">

        <FaTwitter/>
        </a>
      
    </div>
  );
};

export default SocialMediaIcons;
