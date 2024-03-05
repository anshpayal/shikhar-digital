"use client";

import { cn } from "../utils/cn.ts";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    type: string;
    niche: string;
    plan: string;
    img:string;
    src:string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item,index) => (
          item.type==="image" ? 
          (<li
            className=" h-[400px]  max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                overflow:"hidden",
                position: "relative",
            }}
            key={index}
          >
            <blockquote className="h-full">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
              </div>
              <span className=" relative z-20 h-full">
                <img className="h-full w-full " src={item.img} alt="testimonial-img"/>
              </span>
            </blockquote>
          </li>) : (
          <li
            className=" h-[540px] bg-slate-900 flex justify-center max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-900 md:w-[304px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                overflow:"hidden",
                position: "relative",
            }}
            key={item.niche}
          >
            <blockquote className="h-full w-full flex justify-center  p-4 bg-slate-900">
              <div
                aria-hidden="true"
                className="user-select-none  -z-1 pointer-events-none absolute p-10 -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
              </div>
              
            <div className="h-[540px] z-10  rounded-xl  overflow-hidden">
              <iframe
                src={item.src}
                title="portfolio-video-3"
                allow="autoplay; fullscreen"
                frameBorder="0"
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                allowFullScreen
                width="281"
                height="500"
                >
              </iframe>
              <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
            </div>
            </blockquote>
          </li>)
        ))}
      </ul>
    </div>
  );
};
