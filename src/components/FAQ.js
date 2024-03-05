import React, { useState } from "react";
import { faqs } from "../constants";
import styles from "../style";

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section id="faq">
      <div className="text-center my-4">
        <h2 className={styles.heading2}>FAQ's</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 w-full mx-auto my-10">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-lg">
          <div
            onClick={() => toggleFAQ(index)}
            className="px-4 py-4 bg-slate-900 cursor-pointer rounded-t-xl flex justify-between"
          >
            <p className="text-white text-xl font-semibold">{faq.question}</p>
            <span className="text-white text-xl">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="px-4 py-3 bg-slate-900 rounded-b-xl">
              <p className="text-white text-lg">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};

export default FAQ;
