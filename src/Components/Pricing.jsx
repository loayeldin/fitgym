import React from "react";
import { BadgeCheck } from "lucide-react";
import {motion} from "motion/react"
function Pricing({ref}) {
  return (
    <div className="container" ref={ref}>
      <div className="pricing py-10">
        <motion.div
         initial={{ opacity: 0, y: 220 }} 
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ ease: "easeOut", duration: .8, delay: 0.3}}
        className="mb-10 gap-y-3 text-center ">
          <h3 className="font-bold text-lg tracking-[4px] ">Pricing</h3>
          <h2 className="text-2xl md:leading-10 md:text-[46px] text-maincolor font-bold">
            Affordable Pricing Plans
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          <motion.div
           initial={{ opacity: 0, y: 620 }} 
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ ease: "easeOut", duration: 1, delay: 0.2}}
          class="box  flex flex-col justify-center items-center shadow-2xl">
            <div class="ribbon">
              <span>POPULAR</span>
            </div>
            <h3 className="text-maincolor text-2xl package-title">Basic Package</h3>
            <h2 className="text-[55px] font-bold">$25</h2>
            <p className="text-[#959595] text-[18px] package-desc">
              per month, bill annually
            </p>
            <div className="py-10 lg:py-16">
              <p className="flex gap-x-4 mb-4 md:mb-6 ">
                <BadgeCheck className="text-maincolor badge-icon" />
                Unlimited Gym Access
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                2x Fitness Consultant
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                Nutrition Tracking
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                1x Free Suplement
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />3 Days per week
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" /> Personal Trainer
              </p>
              <div className=" text-center">
                <button className="bg-white text-maincolor px-5 py-4 rounded-md font-bold text-lg">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 620 }} 
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ ease: "easeOut", duration: 1, delay: 0.4}}
          class="box  flex flex-col justify-center items-center shadow-2xl">
            <div class="ribbon">
              <span>Best Seller</span>
            </div>
            <h3 className="text-maincolor text-2xl package-title">
              Mid Package
            </h3>
            <h2 className="text-[55px] font-bold">$55</h2>
            <p className="text-[#959595] text-[18px] package-desc">
              per month, bill annually
            </p>
            <div className="py-10 lg:py-16">
              <p className="flex gap-x-4 mb-4 md:mb-6 ">
                <BadgeCheck className="text-maincolor badge-icon" />
                Unlimited Gym Access
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                4x Fitness Consultant
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                Nutrition Tracking
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                3x Free Suplement
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                5 Days per week
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                Personal Trainer
              </p>
              <div className=" text-center">
                <button className="bg-white text-maincolor px-5 py-4 rounded-md font-bold text-lg">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, y: 620 }} 
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ ease: "easeOut", duration: 1, delay: 0.6}}
          class="box  flex flex-col justify-center items-center shadow-2xl">
            <div class="ribbon">
              <span>POPULAR</span>
            </div>
            <h3 className="text-maincolor text-2xl package-title">Pro  Package</h3>
            <h2 className="text-[55px] font-bold">$75</h2>
            <p className="text-[#959595] text-[18px] package-desc">
              per month, bill annually
            </p>
            <div className="py-10 lg:py-16">
              <p className="flex gap-x-4 mb-4 md:mb-6 ">
                <BadgeCheck className="text-maincolor badge-icon" />
                Unlimited Gym Access
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                5x Fitness Consultant
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                Nutrition Tracking
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                5x Free Suplement
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />
                Gym Card
              </p>
              <p className="flex gap-x-4 mb-4 md:mb-6">
                <BadgeCheck className="text-maincolor badge-icon" />Personal Trainer
              </p>
              <div className=" text-center">
                <button className="bg-white text-maincolor px-5 py-4 rounded-md font-bold text-lg">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
