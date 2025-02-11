import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faPhoneAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import {motion} from "motion/react"
function Footer() {
  return (
    <motion.footer
    initial={{ opacity: 0, y: 200 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 1, delay: 0}}
    className="py-12"
   
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6">
          <div className=" py-3 px-1 min-h-72 flex flex-col justify-between">
            <div>
              <img src="./assets/logo.png" alt="logo" />
            </div>
            <p>
              A gym, also known as a fitness center or health club, is a
              facility dedicated to physical fitness and exercise gyms and
              typically offer a range
            </p>
            <div className="mt-4">
              <span className="border border-white px-2 py-1 rounded-md mr-3 hover:border-maincolor hover:text-maincolor ease-in transition-all hover:cursor-pointer ">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span className="border border-white px-2 py-1 rounded-md mr-3 hover:border-maincolor hover:text-maincolor ease-in transition-all hover:cursor-pointer ">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className="border border-white px-2 py-1 rounded-md mr-3 hover:border-maincolor hover:text-maincolor ease-in transition-all hover:cursor-pointer ">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="border border-white px-2 py-1 rounded-md hover:border-maincolor hover:text-maincolor ease-in transition-all hover:cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </div>
          </div>
          <div className=" py-3 px-1 min-h-72 flex flex-col justify-between items-start md:items-center">
            <h2 className="text-2xl font-bold">category</h2>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Strength Training</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Body Building</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Weight Lost</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Basic Yoga</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Physical Fitness</p>
          </div>
          <div className=" py-3 px-1 min-h-72 flex flex-col justify-between  items-start md:items-center">
            <h2 className="text-2xl font-bold">Company</h2>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">About us</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Classes</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Trainers</p>
            <p className="hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">Price</p>
          </div>
          <div className=" py-3 min-h-72 flex flex-col justify-between  md:px-7">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="flex items-center gap-x-3 hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <p>+1 269-537-1744</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <p>Info@fitcore.com</p>
            </div>
            <div className="flex items-center gap-x-3 hover:text-maincolor hover:cursor-pointer transition-all ease-in hover:underline">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <p>3033 Goff Avenue, Michigan, Grand Rapids, USA</p>
            </div>
         
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
