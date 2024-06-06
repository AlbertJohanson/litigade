import Image from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    image: string;
}

const Card = ({title, image}: CardProps) => {
  return (
        <div className="flex flex-col mb-[30px]">
          <div className="flex flex-row py-[30px] px-[10px]  justify-center items-center bg-[#F6E4D7] rounded-t-lg">
            <div className="flex flex-row justify-center align-middle bg-[#FFFFFF] w-[72px] h-[72px] rounded-full py-[23px] px-[20px] mr-[20px]">
              <Image
                src={image}
                width={25}
                height={26}
                alt={title}
              />
            </div>
            <p className="text-base text-center align-center text-[#252B42] font-bold ">
             {title}
            </p>
          </div>
          <div className="bg-[#FFFFFF] rounded-xl border-[#A9D6FF] border mt-[-20px] py-[30px] px-[50px]">
            <ul className="flex flex-col rounded-xl">
              <li className="flex flex-row justify-between  border-b-[1px] border-[#FFFFFF]">
                <p className="text-sm	 text-[#737373] font-bold mb-[15px]">
                  - The best products start with Figma
                </p>
              </li>
              <li className="flex flex-row justify-between  border-b-[1px] border-[#FFFFFF]">
                <p className="text-sm	 text-[#737373] font-bold mb-[15px]">
                  - Design with real data
                </p>
              </li>
              <li className="flex flex-row justify-between  border-b-[1px] border-[#FFFFFF]">
                <p className="text-sm	 text-[#737373] font-bold mb-[15px]">
                  - Lightning fast prototyping
                </p>
              </li>
              <li className="flex flex-row justify-between  border-b-[1px] border-[#FFFFFF]">
                <p className="text-sm	 text-[#737373] font-bold mb-[15px]">
                  - Fastest way to organize{" "}
                </p>
              </li>
              <li className="flex flex-row justify-between  border-b-[1px] border-[#FFFFFF]">
                <p className="text-sm	 text-[#737373] font-bold mb-[15px]">
                  - Work at the speed of thought.{" "}
                </p>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-[#D0A144]">Learn More</a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Card