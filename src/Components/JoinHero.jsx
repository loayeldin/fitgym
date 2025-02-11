import React from "react";
import {motion} from'motion/react'
function JoinHero() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 200 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 1, delay: .1}}
    className="join-hero text-center flex flex-col items-center justify-center"
   
    >
      <h1 className="text-[45px] font-bold">Get A Free Consultancy <br/> Right Now Here!</h1>
      <button className="capitalize bg-maincolor rounded-md text-textcolor px-5 py-4 mt-5 text-xl"> join membership</button>
    </motion.div>
  );
}

export default JoinHero;
