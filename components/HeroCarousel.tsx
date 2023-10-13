"use client"
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const heroImages = [
    {imgUrl: 'assets/images/hero-1.svg'  , alt:'smartwatch'},
    {imgUrl: 'assets/images/hero-2.svg'  , alt:'bag'},
    {imgUrl: 'assets/images/hero-3.svg'  , alt:'lamp'},
    {imgUrl: 'assets/images/hero-4.svg'  , alt:'air fryer'},
    {imgUrl: 'assets/images/hero-5.svg'  , alt:'chair'},
]

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
        <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
    >
        {heroImages.map((item) => (
            <Image key={item.alt} src={item.imgUrl} alt={item.alt} width={484} height={484} className='object-contain' />
        ))}
    </Carousel>
    <Image src={'/assets/icons/hand-drawn-arrow.svg'} alt={'arrow'} width={175} height={175}className='max-xl:hidden absolute bottom-0 -left-20 z-0' />
    </div>
  )
}

export default HeroCarousel