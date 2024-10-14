"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
// import { useRouter } from 'next/router'; 
import game1 from "@/assets/AlabayGames/game1.png";
import game2 from "@/assets/AlabayGames/game2.png";
import { useRouter } from 'next/navigation';

const Games = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter(); // Use it here inside the client component

    const cards = [
        {
            id: 1,
            imageUrl: game1,
            title: 'Discover',
            route: '/alabay-guardian'
        },
        {
            id: 2,
            imageUrl: game2,
            title: 'Discover',
            route: '/alabay-heritage'
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handleDiscover = (route) => {
        router.push(route); 
    };

    return (
        <div>
            <div className="my-10">   <h1 className="vision text-8xl text-[#FFA800] font-bold text-center">GAMES</h1>
             <h1 className="text-3xl  font-bold text-center">Stay tuned for upcomming games!</h1>
             </div>
                    <div className="relative w-11/12 h-[550px] mx-auto overflow-hidden rounded-3xl shadow-lg">

            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {cards.map((card) => (
                    <div key={card.id} className="w-full flex-shrink-0">
                        <div className="relative h-[550px]">
                            <Image
                                src={card.imageUrl}
                                alt="Game Image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <button
                                onClick={() => handleDiscover(card.route)}
                                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold flex items-center z-10"
                            >
                                {card.title}
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </button>

                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 border-2 border-white -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 bg-black hover:bg-purple-600"
            >
                <ChevronRight className="h-8 w-8" />
            </button>
        </div>
        </div>
    
    );
};

export default Games;
