import React from "react";
import { motion } from "motion/react";
function Schedule() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut",
        duration: 0.8,
        delay: 0.2,
      }}
      viewport={{ once: true }} // run once 
      className="container"
     
    >
      <div className="schedule px-4  md:px-24 text-center py-6">
        <h3 className="font-bold text-lg tracking-[4px]">Class Schedule</h3>
        <h2 className="text-[46px] text-maincolor font-bold mb-4">
          Weekly Class Schedule
        </h2>
        <img
          src="./assets/schedule.png"
          loading="lazy"
          className="w-full min-h-60"
          alt="schedule-img"
        />
      </div>
    </motion.div>
  );
}

export default Schedule;
