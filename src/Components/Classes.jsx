import React from "react";
import { motion } from "motion/react"

function Classes({ref}) {
  return (
    <div className="container" ref={ref}>
      <div className="classes py-10">
        <motion.div 
         initial={{ opacity: 0, y: 200 }} 
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ ease: "easeOut", duration: .8, delay: 0.2 }}
        className="flex items-end justify-between mb-5 gap-y-3 flex-wrap">
          <div>
            <h3 className="font-bold text-lg tracking-[4px] ">our classes</h3>
            <h2 className="text-2xl md:leading-10 md:text-[46px] text-maincolor font-bold">
              Personalized Fitness <br /> Classes for Every Goal
            </h2>
          </div>
          <div>
            <button className="border border-maincolor px-5 py-4 capitalize text-lg rounded-sm">more classes</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 ">
          <motion.div 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.2 }}
          className="card h-[550px] md:h-[750px] relative  overflow-hidden mb-3">
            <img src="./assets/class1.png" loading="lazy" className="h-[100%] " alt="class2" />
            <div className="card-overlay">
              <h3 className="text-3xl font-bold">Strength Training</h3>
              <p className="text-lg">
                Classes focusing on building muscle strength and endurance
                through weightlifting and resistance exercises.
              </p>
              <button className="text-lg bg-maincolor px-5 py-4 rounded-md">
                join now{" "}
              </button>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: .8, delay: 0.4 }}
          className="card h-[750px] relative overflow-hidden mb-3">
            <img src="./assets/class2.png" loading="lazy" className="h-[100%] " alt="class2" />
            <div className="card-overlay">
              <h3 className="text-3xl font-bold">Strength Training</h3>
              <p className="text-lg">
                Classes focusing on building muscle strength and endurance
                through weightlifting and resistance exercises.
              </p>
              <button className="text-lg bg-maincolor px-5 py-4 rounded-md">
                join now{" "}
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: .8, delay: 0.6 }}
          className="card h-[750px] relative overflow-hidden mb-3">
            <img src="./assets/class3.png" loading="lazy" className="h-[100%] " alt="class2" />
            <div className="card-overlay">
              <h3 className="text-3xl font-bold">Strength Training</h3>
              <p className="text-lg">
                Classes focusing on building muscle strength and endurance
                through weightlifting and resistance exercises.
              </p>
              <button className="text-lg bg-maincolor px-5 py-4 rounded-md">
                join now{" "}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
