import styles from "./style";
import {NavBar, Hero, Stats, Portfolio, Testimonials, Pricing, FAQ, Footer} from "./components"
const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter} border-b border-gray-700`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} bg-cover bg-center bg-no-repeat bg-[url(https://assets-global.website-files.com/64fad25f8884cb2d680a1052/651438da4d065110b561b1b2_hero-bg-blocks.svg)]`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} border-t border-gray-700`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Portfolio/>
        <Testimonials/>
        <Pricing/>
        <FAQ/>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;