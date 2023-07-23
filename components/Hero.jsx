import React from 'react';
import Image from 'next/image';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import Head from 'next/head';
import Carousel from './Carousel';



function Hero() {
    return (
        <>
            <Head>
                <title>this is using bootstrap</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

            </Head>
            <div className="container mx-auto flex flex-wrap px-10 items-center">
                {/* Left side (Content) */}
                <div className="flex flex-col gap-7 w-full md:w-1/2 order-2 md:order-1">
                    <div className="flex items-center px-12 w-fit-content bg-pink mt-12 p-5 rounded-lg text-sm text-themeRed font-bold">
                        <span style={{ color: 'var(--themeRed)' }}>More than Faster</span>
                        <Image src={Cherry} width={40} height={25} alt="" />
                    </div>

                    <div className="flex gap-3 flex-col text-6xl font-bold px-3">
                        <span>Be the Fastest</span>
                        <span>In Delivering</span>
                        <span>
                            your <span className="text-themeRed">Pizza</span>
                        </span>
                    </div>

                    <div className="w-full md:w-2/3 px-12 text-gray-500 font-semibold">
                        Our Mission is to Deliver food in time with premium quality.
                        Your Happiness is our Mission!!
                    </div>

                    <button className="mbtn">Get Started!</button>
                </div>

                {/* Right side (Image) */}
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-end">

                    <div className="w-100">
                        <Image src={HeroImage} alt="" layout="intrinsic" />
                    </div>



                </div>

            </div>


            {/* {Carousel part} */}
            <Carousel />
        </>

    );
}

export default Hero;
