import { stats } from "../constants";

const Stats = () => (
  <section className={`sm:mb-20 mb-6 border border-[#9dedf0]  sm:my-24 my-6 p-6 rounded-xl`}>
    <h1 className=" flex justify-center items-center text-center font-poppins font-normal xs:text-[40.89px] text-[30.89px] text-gradient">
      Unveiling Our Impact
    </h1>
    <div className="flex-1 sm:flex justify-center items-center sm:gap-x-20 my-6 ">
    {stats.map((stat) => (
        <div key={stat.id} className={` flex-1 flex-col text-center justify-center items-center m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-[#5ce1e6] uppercase ml-3">
            {stat.title}
          </p>
        </div>
    ))}
    </div>
  </section>
);

export default Stats;
