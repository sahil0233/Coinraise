import React from 'react';

import { tagType, logo1 } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image,pId,prediction, handleClick }) => {
  const remainingDays = daysLeft(deadline);
  
  return (
    <div className="sm:w-[288px] w-full rounded-[20px] bg-gradient-to-r from-slate-700  to-stone-900 hover:from-red-900 hover:via-neutral-700 hover:to-green-800 cursor-pointer" onClick={handleClick}>
      <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
        </div>

        <div className="block">
          <h3 className="text-green-400 text-lg font-epilogue font-semibold text-[16px] text-left leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] text-sm  font-normal text-stone-300 text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="text-green-400	font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
            <p className="text-teal-600 mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-red-600 font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
            <p className="text-rose-300 mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[40px] h-[0px] rounded-full flex justify-center items-center ">
            <img src={logo1} alt="user" className="w-[70px] h-[100px] object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-rose-300 truncate">by <span className="text-slate-400">{owner}</span></p>
          
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] text-yellow-600 truncate">Success rate<span className="text-[#b2b3bd]">{prediction}</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default FundCard