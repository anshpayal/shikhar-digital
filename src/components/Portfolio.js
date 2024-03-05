import React from "react";
import styles from "../style";
import { portfolioImages, portfolioVideos } from "../constants";
import { useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards.tsx";

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const buttonNames = ["All", "Content Creation", "Instagram Growth"];

  return (
    <section id="portfolio" className=" sm:my-32 my-6 ">
      <div className="text-center my-4">
        <h2 className={styles.heading2}>Portfolio</h2>
        <div className="flex justify-center gap-x-8 my-4">
          {buttonNames.map((name, index) => (
            <button
              key={index}
              className={`font-poppins font-semibold text-md sm:text-[22px] mb-1 px-3 ${
                active === name ? "border-b text-white" : "text-gradient"
              }`}
              onClick={() => setActive(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {active === "All" && (
            <div>
              <InfiniteMovingCards
                items={portfolioImages}
                direction="right"
                speed="slow"
              />
              <InfiniteMovingCards
                items={portfolioVideos}
                direction="left"
                speed="slow"
              />
            </div>
          )}
          {active==="Content Creation" && <InfiniteMovingCards items={portfolioVideos} direction="left" speed="slow"/> }
          {active==="Instagram Growth" && <InfiniteMovingCards items={portfolioImages} direction="rigth" speed="slow"/> }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
