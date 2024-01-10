import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logo,join ,about,follow} from '../assets';

const Footer = () => {
    const navigate = useNavigate();
  return (

      <div className=" items-center justify-center  bg-gradient-to-r from-amber-900 to-yellow-700 hover:from-yellow-700 hover:to-amber-900">
           <div className=" tems-center justify-center">
               <div className="w-auto  h-full  text-center items-center justify-center">
                  <h1 className=" pt-[40px] pb-[30px] lg:text-7xl md:text-5xl sm:text-4xl  text-4xl capitalize  font-sans tracking-wide text-white">You Can Help Now</h1>
                  <h3 className="italic sm:mx-[100px] font-sans lg:text-3xl md:text-xl sm:text-lg text-xl text-cyan-400/100">Your Small Effort,Big Opportunity For Others !</h3>
                   <hr className="mt-[30px] py-[10px] h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-40 dark:opacity-100" />

               </div>
               <div className="sm:mt-[30px] md:mt-[20px] flex gap-[30px] items-center justify-evenly mx-[20px]">
                  <div className="h-48 px-[10px] flex flex-col justify-centre items-center ">
                      <img className=" w-[60px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                           src={join}/>
                      <a onClick={() => {
                          navigate('create-campaign');
                      }}
                       className=" text-sm text-center hover:text-blue-400 text-yellow-300 font-medium">JOIN US</a>
                      <p className="pt-[15px]  text-xs font-medium text-stone-300  text-centre">Raise fund to join</p>
                   </div>
                  <div className=" h-48  px-[10px] flex justify-centre items-center  flex-col">
                      <img className="w-[60px] sm:w-[80px] md:w-[202px] lg:w-[900px] h-[100px] text-blue-500  object-contain"
                          src={about} />
                      <a onClick={() => {
                          navigate('AboutUs');}}
                        className=" text-center hover:text-blue-400 text-sm text-yellow-300 font-medium">ABOUT US</a>
                      <p className="pt-[15px]  text-xs font-medium text-stone-300  text-centre">Know more what we do for.</p>
                   </div>
                  <div className=" h-48  px-[10px] flex justify-centre items-center  flex-col">
                      <img className="w-[60px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                          src={follow} />
                      <a href="https://www.instagram.com/choudharyrahul__3/" className=" text-center hover:text-blue-400 text-sm text-yellow-300 font-medium">FOLLOW US</a>
                      <p className="pt-[15px]  text-xs font-medium text-stone-300  text-centre">for more Queries.</p>

                   </div>

               </div>
           </div>
       </div>
  )
}

export default Footer