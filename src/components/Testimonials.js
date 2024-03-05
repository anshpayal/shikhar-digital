import { feedback } from "../constants";
import styles from "../style";
import { CardStack } from "./card-stack.tsx";

const Testimonials = () => (
  <section id="clients"className={` ${styles.flexCenter} flex-col sm:flex-row relative sm:mb-20 mb-6 sm:my-24 my-6 p-6`}>
    <h1 className={`${styles.heading2} mb-14 font-poppins`}>What people are <br className="sm:block hidden"/> saying about us</h1>
    <div className="flex items-center justify-center w-full">
      <CardStack items={feedback} scaleFactor="0.04"/>
    </div>
  </section>
);

export default Testimonials;
