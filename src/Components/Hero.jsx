import { TvMinimalPlay } from "lucide-react";
import React from "react";

function Hero({ref}) {
  return (
    <section className="hero bg-background" ref={ref}>
      <div className="overlay">
        <div className="container flex text-center md:text-left items-center min-h-[85vh]">
          <div className="flex-wrapper max-w-[580px]  p-2">
            <h1 className="text-textcolor  text-[35px] md:text-[65px] font-bold">
              Refresh Your Routine Shape Your <span className="text-maincolor">Fitness</span>
            </h1>
            <p className="text-[19px]">
              Engaging in regular exercise not only amplifies well-being and
              fortifies the body but also diminishes the likelihood of injuries
              thereby optimizing.
            </p>
            <div className="mt-4 flex gap-x-9 justify-center flex-wrap md:justify-start">
              <button className="bg-maincolor px-5 rounded-md text-[18px] capitalize">join now</button>
              <button className="text-maincolor text-[19px] flex items-end gap-x-2 p-5	">
                <TvMinimalPlay />
                 <span> watch video</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
