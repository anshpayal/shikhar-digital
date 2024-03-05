import styles from "../style";

import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Content Creation", "Organic Growth"],
    loop: {},
  });
  const handleClick = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleBookCallClick = () => {
    window.open('https://calendly.com/shikhardigital/instagram-strategy-1', '_blank');
  };

  return (
    <section id="home" className={`flex md:flex-col flex-col ${styles.paddingY} ${styles.marginY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col justify-between items-center w-full">
          <h1 className="flex-1 md:w-10/12 text-center font-poppins font-semibold ss:text-[78px] text-[42px] text-white ss:leading-[100.8px] leading-[55px]">
            Unlock Your Social Media Potential With
          </h1>
          <h1 className="text-gradient h-[100px] font-poppins font-semibold ss:text-[74px] text-[38px]">{text}</h1>
        </div>
        <div className={`flex justify-center items-center w-full font-poppins ss:text-3xl text-xl gap-x-8 ${styles.marginY}`}>
          <button className="bg-black text-white px-6 py-2 rounded-lg border cursor-pointer" onClick={handleBookCallClick} >Book a Call</button>
          <button className="bg-white text-black px-6 py-2 rounded-lg border cursor-pointer" onClick={handleClick}>Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
