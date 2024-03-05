import React from "react";
import styles from "../style";
import { pricing } from "../constants";


const PricingCard = ({ name, price, metaInfo, Detail }) => {
  const handleBookCallClick = () => {
    window.open('https://calendly.com/shikhardigital/instagram-strategy-1', '_blank');
  };

  return (
    <div className={`glow-border flex flex-col justify-center my-6 items-center p-6  w-full rounded-xl feature-card hover:bg-transparent `}>
    <div className="flex-1 flex flex-col center ml-3">
      <h4 className=" font-semibold  text-[24px] my-2 text-left text-white">
        {name}
      </h4>
      <h1 className="font-bold  text-[34px]  text-gradient">{price}/<span className="text-[26px]">month</span></h1>
      <p className="text-white font-poppins text-lg my-2">{metaInfo}</p>
      <button className="w-full bg-slate-900 text-white p-3 font-poppins border-slate-900 rounded-xl my-3" onClick={handleBookCallClick}>
        Book a call
      </button>

      <div className="my-2">
        {Detail.map((points,index)=>{
          return (
            <span key={index} className="flex justify-start items-center mb-3" >
              <img src={points.src} className="w-6 h-6" alt="icon"/>
              <p className="font-poppins mx-2 text-[16px] text-white">{points.content}</p>
            </span>
          )
        })}
      </div>
    </div>
  </div>
  )
}
  


const Pricing = () => {
  return (
    <section id="pricing" className=" mt-16 sm:my-32">
      <div className="text-center my-4">
        <h2 className={styles.heading2}>Pricing</h2>
      </div>
      <div className={`sm:flex gap-x-14 py-5`}>
        {pricing.map(( plan) => (
          <PricingCard  key = {plan.name} {...plan}/>
        ))}
      </div>

    </section>
  );
};

export default Pricing;
