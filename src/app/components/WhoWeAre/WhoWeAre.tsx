import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-[53px] px-[32px] relative">
      <h2 className="text-4xl	text-[#252B42] text-center font-bold mb-[20px]">
        Who We Are
      </h2>
      <p className="text-sm	 text-[#737373] font-normal	 text-center mb-[70px]">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className="video_container relative flex flex-col justify-center items-center rounded-md z-10">
        <Image src="/btn_play.png" width={97} height={98} alt="play" />
      </div>
      <div className="absolute bottom-0 left-0 bg-[#295C7A] w-full h-[350px]">
      </div>
    </section>
  );
};

export default WhoWeAre;
