"use client";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import Image from 'next/image';

const TabsPhotos = () => {
    const [activeTab, setActiveTab] = useState('photos');
    const [currentSet, setCurrentSet] = useState(0);

    const all = [
        'https://img.freepik.com/free-photo/cute-dog-with-nature-background_23-2150687009.jpg',
        'https://img.freepik.com/free-photo/cute-dog-with-nature-background_23-2150687003.jpg',
        'https://youtu.be/VPG9YcEXbks?si=AsbiMSTu1IpaqZ-D',
        'https://youtu.be/vdzQZqCLVzE?si=wUJC-ubG6NdtaPVk',
        'https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907020.jpg',
        'https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907166.jpg',
        'https://youtu.be/SrF988zqyKo?si=jRMb1C2lGvnUJyrv',
        'https://youtu.be/bMx4iwyHgOs?si=AsM-YBtRV3u8oiks',
        'https://img.freepik.com/free-photo/cute-dog-studio_23-2150687246.jpg',
        'https://img.freepik.com/free-photo/cute-dog-spending-time-outdoors_23-2150687033.jpg',
        
    ]

    const photos = [
        'https://img.freepik.com/free-photo/cute-dog-studio_23-2150687246.jpg',
        'https://img.freepik.com/free-photo/cute-dog-spending-time-outdoors_23-2150687033.jpg',
        'https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907020.jpg',
        'https://img.freepik.com/free-photo/3d-rendering-cartoon-dog-portrait_23-2150907166.jpg',
        'https://img.freepik.com/free-photo/cute-dog-with-nature-background_23-2150687009.jpg',
        'https://img.freepik.com/free-photo/cute-dog-with-nature-background_23-2150687003.jpg',
        'https://youtu.be/X6RKia6abHM?si=P28VjPAyrSy2rATW',
        'https://youtu.be/17qqQfV88s4?si=dWQyW72pJzomk5Ot',
    ];
    const videos = [
        'https://youtu.be/VPG9YcEXbks?si=AsbiMSTu1IpaqZ-D',
        'https://youtu.be/vdzQZqCLVzE?si=wUJC-ubG6NdtaPVk',
        'https://youtu.be/SrF988zqyKo?si=jRMb1C2lGvnUJyrv',
        'https://youtu.be/bMx4iwyHgOs?si=AsM-YBtRV3u8oiks',
        'https://youtu.be/X6RKia6abHM?si=P28VjPAyrSy2rATW',
        'https://youtu.be/17qqQfV88s4?si=dWQyW72pJzomk5Ot',

    ];

    const togglePhotos = () => {
        setCurrentSet((currentSet + 1) % 2);
    };

    return (
        <div className="mt-20 mb-28 w-11/12 mx-auto">
            {/* Tabs */}
            <div className="flex justify-center items-center font-extrabold space-x-4 mb-8 text-xl">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 ${activeTab === 'all' ? 'border-[#FFA800] text-[#FFA800]' : 'border-transparent text-black'}`}
                >
                    ALL
                </button>
                <button
                    onClick={() => setActiveTab('photos')}
                    className={`px-4 py-2 ${activeTab === 'photos' ? 'border-[#FFA800] text-[#FFA800]' : 'border-transparent text-black'}`}
                >
                    PHOTOS
                </button>
                <button
                    onClick={() => setActiveTab('videos')}
                    className={`px-4 py-2 ${activeTab === 'videos' ? 'border-[#FFA800] text-[#FFA800]' : 'border-transparent text-black'}`}
                >
                    VIDEOS
                </button>
            </div>

            {/* Content */}
            <div className="min-h-[200px]">
                {activeTab === 'all' && (
                    <div className="md:flex justify-between items-center">
                        {/* All Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-11/12">
                            {all.slice(currentSet * 3, (currentSet + 1) * 3).map((item, index) => (
                                <div key={index} className="w-full h-64 bg-gray-200 rounded-2xl">
                                    {/* Check if the item is a YouTube video */}
                                    {item.includes('youtu') ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={item.replace('youtu.be/', 'www.youtube.com/embed/')} // Convert short URL to embeddable format
                                            title={`Video ${index + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="rounded-2xl"
                                        ></iframe>
                                    ) : (
                                        <Image
                                            src={item}
                                            alt={`Image ${index + 1}`}
                                            width={200}
                                            height={200}
                                            className="object-cover w-full h-full rounded-2xl"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right-side Button */}
                        <button
                            onClick={togglePhotos}
                            className="md:ml-4 py-6 px-3 flex items-center justify-center md:w-14 w-full shadow-xl shadow-gray-700 text-3xl bg-black text-white rounded-lg hover:bg-blue-600"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                )}


                {activeTab === 'videos' && (
                    <div className="md:flex justify-between items-center">
                        {/* Video Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-11/12">
                            {videos.slice(currentSet * 3, (currentSet + 1) * 3).map((video, index) => (
                                <div key={index} className="w-full h-64 bg-gray-200 rounded-2xl">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={video.replace('youtu.be/', 'www.youtube.com/embed/')} // Convert short URL to embeddable format
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-2xl"
                                    ></iframe>
                                </div>
                            ))}
                        </div>

                        {/* Right-side Button */}
                        <button
                            onClick={togglePhotos}
                            className="md:ml-4 py-6 px-3 flex items-center justify-center md:w-14 w-full shadow-xl shadow-gray-700 text-3xl bg-black text-white rounded-lg hover:bg-blue-600"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                )}

                {activeTab === 'photos' && (
                    <div className="md:flex justify-between items-center">
                        {/* Photo Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-11/12">
                            {photos.slice(currentSet * 3, (currentSet + 1) * 3).map((photo, index) => (
                                <div key={index} className="w-full h-64 bg-gray-200 rounded-2xl">
                                    <Image src={photo} alt={`Photo ${index + 1}`} width={200} height={200} className="object-cover w-full h-full rounded-2xl" />
                                </div>
                            ))}
                        </div>

                        {/* Right-side Button */}
                        <button
                            onClick={togglePhotos}
                            className="md:ml-4 py-6 px-3 flex items-center justify-center md:w-14 w-full shadow-xl shadow-gray-700 text-3xl bg-black text-white rounded-lg hover:bg-blue-600"
                        >
                            <FaArrowRight className=""/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default TabsPhotos;
