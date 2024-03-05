import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={` glow-border flex flex-col justify-center items-center p-6 h-[500px] rounded-xl ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card hover:bg-transparent `}>
    <div className={`w-[64px] h-[64px] rounded-full my-4 ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col text-center ml-3">
      <h4 className=" font-semibold text-white text-[22px] leading-[23.4px] mb-1 text-gradient">
        {title}
      </h4>
      <p className="font-poppins font-normal my-4 text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="services" className=" sm:my-32 my-6">
    <div className="text-center my-4">
      <h2 className={styles.heading2}>
        Our Services
      </h2>
    </div>
    <div className={`sm:flex gap-x-14 py-5`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;