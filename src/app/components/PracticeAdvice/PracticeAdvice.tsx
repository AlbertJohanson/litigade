import Image from "next/image";
import React from "react";
import Card from "./Card/Card";

const PracticeAdvice = () => {
  return (
    <section className="py-[53px] px-[32px]">
      <h2 className="text-4xl	text-[#252B42] text-center font-bold mb-[20px]">
        Practice <br className="block lg:hidden" />
        Advice
      </h2>
      <p className="text-sm	 text-[#737373] font-normal	 text-center mb-[70px]">
        Problems trying to resolve the conflict between <br className="hidden lg:block"/> the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-col lg:flex-row justify-between lg:px-[80px]">
        <Card title="Frauds or Mislead" image="/frauds_misleads.svg" />
        <Card title="Bailes & Warrants" image="/warrants.svg" />
        <Card title="Federal Drug Crimes" image="/federal_drugs.svg" />
      </div>
    </section>
  );
};

export default PracticeAdvice;
