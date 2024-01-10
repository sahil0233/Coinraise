import React from 'react'
import { useNavigate } from 'react-router-dom';
import {logo,logo1,up,aa,rahul,sahil,jayant,anjali} from '../assets'




const AboutUs = () => {
    const navigate = useNavigate();
    return (
     <div>
         <div className="bg-rose-200 flex items-center justify-center">
             <div className=" mx-[50px] container flex flex-col  lg:flex-row items-center">
                 <img className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[402px]  rounded-md  object-contain"
                        src={aa} />

                    <div className=" w-full p-8 rounded-lg">
                     <h3 className="text-gray-900 text-lg md:text-2xl font-bold mb-4">our Vision</h3>
                     <h1 className="text-3xl md:text-5xl text-gray-900 font-serif font-bold italic">BE a Surprise</h1>
                 </div>
            </div>
         </div>

            <div className=" bg-gray-100 flex md:flex-row flex-col-reverse  p-4 md:p-8">
                <div className="mt-[50px]  flex flex-col">
                    <div className='flex gap-2'>

                    <h2 className="text-2xl md:text-4xl flex font-bold text-gray-700">Welcome to</h2>
                    <h2 className="text-2xl md:text-4xl flex font-bold text-green-700">Coinraise</h2>
                    </div>
                    <p className="mt-4 md:mt-8 text-lg md:text-xl text-gray-600">CoinRaise is a cutting-edge crowdfunding platform that empowers individuals and organizations to raise funds through Ethereum. Our platform offers a user-friendly interface, allowing users to create fundraising campaigns quickly and easily. With CoinRaise, you can reach a global audience and receive contributions from around the world in a secure and transparent way. Our platform utilizes the power of blockchain technology, ensuring the highest level of security and accountability for all transactions. Whether you're an entrepreneur, a nonprofit organization, or an individual looking to raise funds for a cause, CoinRaise is the perfect platform to bring your ideas to life.</p>
                </div>
                <div className="flex items-center justify-center">
                    <img className="w-[100px] sm:w-[80px]  md:w-[502px] lg:w-[802px] h-[100px] object-contain"
                        src={logo1} />
                </div>
            </div>


            <div className=" md:p-8 bg-white ">
                <h3 className="text-green-600 ml-[20px] md:mx-[150px]  text-2xl font">Our <span className='text-gray-700'>Mission</span></h3>
                <p className="mx-[15px] md:mx-[150px] md:mt-8 text-lg md:text-xl text-gray-700">Our mission is to empower creativity and innovation by providing a user-friendly, transparent, and secure platform for fundraising.</p>
                <img className="mt-[15px] mx-auto w-[400px] sm:w-[800px] md:w-[502px] lg:w-[802px] h-[300px] object-contain"
                    src={up} />
            </div>
            <div className=' pt-[20px] bg-red-100  items-center flex flex-col'>
                <div className='items-center'>
                <h4 className='text-center'>Meet The Team</h4>
                </div> 
                <div className='pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 pt-[15px] flex flex-wrap '>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="flex  justify-center w-[100px] h-[100px] rounded-full overflow-hidden">

                        <img className='max-w-full object-cover max-h-full scale-125'
                            src={rahul} />
                            </div>
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center '>Rahul Choudhary</h2>
                            <h4 className='text-center '>FullStack Developer</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="flex  justify-center w-[100px] h-[100px] rounded-full overflow-hidden">

                            <img className='max-w-full object-cover max-h-full scale-125'
                                src={sahil} />
                        </div>
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center '>Sahil Gangwani</h2>
                        <h4 className='text-center '>FullStack Developer</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="flex  justify-center w-[100px] h-[100px] rounded-full overflow-hidden">

                            <img className='max-w-full object-cover max-h-full scale-125'
                                src={anjali} />
                        </div>
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center '>Anjali Hasani</h2>
                        <h4 className='text-center '>AI Developer</h4>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="flex  justify-center w-[100px] h-[100px] rounded-full overflow-hidden">

                            <img className='max-w-full object-cover max-h-full scale-125'
                                src={jayant} />
                        </div>
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center '>Jayant Sankhi</h2>
                        <h4 className='text-center '>AI Developer</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs