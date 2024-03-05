"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { quotes } from "../assets";

let interval: any;


type Card = {
  id: number;
  name: string;
  location: string
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 3500);

    return () => clearInterval(interval);
  };

  return (
    <div className="relative  h-96 w-full md:h-72 md:w-full flex justify-center p-6">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className=" absolute h-96 w-full  md:h-72 md:w-full bg-primary rounded-3xl overflow-hidden shadow-xl border  border-[#9dedf0] dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="p-4">
              <img src={quotes} alt="quotes-icon" className="w-8 h-10"></img>
              <h3 className="text-lg text-white mt-2">{card.content}</h3>
              <h4 className="text-md text-gray-400 mt-2">@{card.name}</h4>
              <p className="text-md text-gray-400">📍{card.location}</p>
            </div>


          </motion.div>
        );
      })}
    </div>
  );
};
