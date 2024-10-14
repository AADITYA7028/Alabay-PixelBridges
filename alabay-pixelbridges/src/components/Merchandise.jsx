"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bluecapbck from "@/assets/AlabayMerch/bluecapbck.png";
import capmockup from "@/assets/AlabayMerch/capmockup.png";
import pinkteebck from "@/assets/AlabayMerch/pinkteebck.png";
import pinktshirt from "@/assets/AlabayMerch/pinktshirt.png";
import yellowteebck from "@/assets/AlabayMerch/yellowteebck.png";
import yellowtshirt from "@/assets/AlabayMerch/yellowtshirt.png";
import blackhoodiebck from "@/assets/AlabayMerch/blackhoodiebck.png";
import blackhoodie from "@/assets/AlabayMerch/blackhoodie.png";

const products = [
    { id: 1, come: "Coming soon...", name: 'Product 1', image: capmockup, bgImage: bluecapbck },
    { id: 2, come: "Coming soon...", name: 'Product 2', image: pinktshirt, bgImage: pinkteebck },
    { id: 3, come: "Coming soon...", name: 'Product 3', image: yellowtshirt, bgImage: yellowteebck },
    { id: 4, come: "Coming soon...", name: 'Product 4', image: blackhoodie, bgImage: blackhoodiebck },
];

const Merchandise = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(false);

    // This effect runs on initial load
    useEffect(() => {
        const bgTimer = setTimeout(() => {
            setIsImageVisible(true); // Show image after a delay
        }, 500);

        return () => clearTimeout(bgTimer); // Cleanup on unmount
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
        setIsImageVisible(false); // Hide image before transition
        setTimeout(() => setIsImageVisible(true), 500); // Show image after delay
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
        setIsImageVisible(false); // Hide image before transition
        setTimeout(() => setIsImageVisible(true), 500); // Show image after delay
    };

    return (
        <div>
            <h1 className="vision md:text-8xl my-12 text-4xl text-[#FFA800] font-bold text-center">Merchandise</h1>
            <div
                className={`relative md:w-10/12 h-[550px] mx-auto bg-purple-300 overflow-hidden rounded-2xl bg-slide-in`}
                style={{
                    backgroundImage: `url(${products[currentIndex].bgImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Foreground Image */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isImageVisible ? 'opacity-100 image-slide-in' : 'opacity-0'}`}>
                    <Image src={products[currentIndex].image} alt={products[currentIndex].name} width={500} height={500} className="w-[500px] h-[500px] object-cover" />
                </div>

                {/* Bottom Content */}
                <p className="text-xl font-extrabold absolute bottom-8 right-16 top-16 transform -translate-x-1/2">{products[currentIndex].come}</p>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button className="mt-4 px-12 hover:bg-white hover:text-black py-2 bg-gray-800 text-white rounded-full">Discover</button>
                </div>

                {/* Navigation Arrows */}
                <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3">
                    <ChevronLeft size={32} />
                </button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3">
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
};

export default Merchandise;