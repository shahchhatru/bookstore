"use client"
import React from 'react'
import Image from "next/image";
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
            Uncover Your Next Chapter: Explore and Thrive through the Pages of Imagination 
            </h1>
            <p className='hero__subtitle'>
            Embark on a Literary Adventure with Our Vast Bookstore!
            </p>
            <CustomButton 
                title="Explore Books"
                containerStyles = "bg-primary-blue text-white rounded-full mt-10 px-10 py-4"
                handleClick={handleScroll}


            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image  src="/girlreadingbook.png" alt="hero" fill className="object-contain" />
               {/**<div className='hero__image-overlay' /> */} 
            </div>
        </div>

    </div>
  )
}

export default Hero