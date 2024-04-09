import Image from 'next/image'
import React from 'react'
import { TfiWheelchair  } from "react-icons/tfi";


const About = () => {
  return (
    <section className='w-full p-2 ' id='about'>
    <div className=' container mx-auto  bg-gray-800 w-full h-full bg-cover rounded-[5px] '>
      <div className="h-full flex flex-col  items-center py-3 gap-4">
        <h1 className="font-semibold uppercase">About us</h1>
        <p className='text-xs font-normal'>Let's get acquainted! Our Trajectory team is a group of like-minded people who cannot imagine their life without adventure, adrenaline and, of course, travel. We have visited dozens of countries, tasted hundreds of dishes from different cuisines of the world, traveled kilometers of roads and conquered more than one peak! <br /><br /> However, all travel experiences will be more complete and vivid if friends are around.
Have you been dreaming of breaking out of your daily routine for a long time, striving to learn and discover new places in a cheerful company of friends and like-minded people? We invite you to come with us!</p>
      </div>
      <div className="">
        <div className="w-full pb-3">
            <div className=" w-full h-auto rounded-[5px] overflow-hidden ">
                <video autoPlay src='/assets/video/videopriroda.mp4'	 width="100%" height="200px" className=' '   >
                <source  src="/assets/video/videopriroda.mp4" className='' type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
