"use client";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';
import artifacts from "@/assets/AlabayGames/artifacts.png"
import Abilities from "@/assets/AlabayGames/Abilities.png"
import wratn from "@/assets/AlabayGames/wratn.png"




const GamePreviews = () => {
    const [activeTab, setActiveTab] = useState('photos');
    // const [currentSet, setCurrentSet] = useState(0);

     const photos = [
        artifacts,
        Abilities,
        wratn,
    ];

    // const togglePhotos = () => {
    //     setCurrentSet((currentSet + 1) % 2);
    // };
    return (
        <div className="my-32 mb-28 md:w-11/12 mx-auto">
            <h1 className="text-5xl font-extrabold my-10"><spane className="text-[#FFA800]">GAME</spane> PREVIEWS</h1>
            
            {/* Content */}
            <div className="min-h-[200px]">
                {activeTab === 'photos' && (
                    <div className="md:flex justify-between items-center">
                        {/* Photo Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-11/12">
                            {photos.map((photo, index) => (
                                <div key={index} className="w-full h-80 bg-gray-200 rounded-2xl">
                                    <Image src={photo} alt={`Photo ${index + 1}`} width={200} height={200} className="object-cover w-full h-full rounded-2xl" />
                                </div>
                            ))}
                        </div>

                        {/* Right-side Button */}
                        <button
                            className="md:ml-4 py-6 px-3 flex items-center justify-center md:w-14 w-full shadow-xl shadow-gray-700 text-3xl bg-black text-white rounded-lg hover:bg-blue-600"
                        >
                            <FaArrowRight className="" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamePreviews;