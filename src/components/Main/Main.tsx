'use client';
import React from 'react'
import MainSlider from '../MainSlider/MainSlider';
import Image from "next/image";

const Main = () => {
  return (
    <>
      <section className='w-full bg-hero bg-cover bg-center bg-no-repeat p-2 sticky z-[10] ' id='main'>
        
        <MainSlider />
      </section>
      <Image
      src="/assets/img/Header/bg.png"
      width={1920}
      height={1080}
      className=" absolute z-[-10] top-0 bg-center w-full"
      alt="картинка"
    />
    </>
  )
}

export default Main
