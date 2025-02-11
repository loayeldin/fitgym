import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import React from "react";

function Trainers({ref}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
      className="container"
      ref={ref}
    >
      <div className="trainers  text-center py-6">
        <h3 className="font-bold text-lg tracking-[4px]">Our Trainers</h3>
        <h2 className="text-[46px] text-maincolor font-bold mb-4">
          Meet Our Trainers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          <motion.div
          initial={{ opacity: 0, y: 220 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.2 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer1.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, y: 220 }} 
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ ease: "easeOut", duration: .8, delay: 0.4 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer2.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, y: 220 }} 
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ ease: "easeOut", duration: .8, delay: 0.6 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer3.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 220 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.7 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer4.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 220 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.2 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer5.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 220 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.4 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer6.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 220 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.6 }}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer7.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 220 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.7}}
          className="card bg-base-50  shadow-2xl">
            <figure>
              <img
                src="./assets/trainer8.jpg"
                className="rounded-md"
                alt="trainer-img"
              />
            </figure>
            <div className="card-body ">
              <h2 className="text-center text-2xl text-maincolor ">
                Albert Flores
              </h2>
              <p className="text-md">Fitness Instructor</p>
              <div className="card-actions justify-center">
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faFacebookF} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faInstagram} className="text-black" />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg">
                  <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Trainers;
