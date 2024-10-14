
"use client";
import Image from 'next/image';
import bg1 from "@/assets/AlabayGames/bg1.png";
import image1 from "@/assets/AlabayGames/AlabayGuard/image1.png";
import image2 from "@/assets/AlabayGames/AlabayGuard/image2.png";
import image3 from "@/assets/AlabayGames/AlabayGuard/image3.png";
import { FaPlay } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const AlabayGuardian = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const contentRef = useRef(null); // Create a reference to the scrollable content

    // Update the scroll height as the user scrolls
    const handleScroll = () => {
        const scrollableDiv = contentRef.current;
        if (scrollableDiv) {
            const scrollTop = scrollableDiv.scrollTop;
            const scrollHeight = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            setScrollHeight(scrolled);
        }
    };

    useEffect(() => {
        const scrollableDiv = contentRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollableDiv) {
                scrollableDiv.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Custom CSS to hide the default scrollbar */}
            <style jsx>{`
                ::-webkit-scrollbar {
                    display: none;
                }
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            `}</style>

            {/* Background Image with Fixed Position */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg1.src})`, backgroundAttachment: 'fixed' }}
            >
                <div className="absolute inset-0"></div>
            </div>

            {/* Scrollable Content */}
            <div
                ref={contentRef} // Assign the ref to the scrollable content
                className="relative overflow-y-auto h-full w-full md:px-16 px-8 pt-10 space-y-5 z-10"
            >
                <div className="flex justify-between mb-20">
                    <div>
                        <h1 className="text-5xl text-white font-bold mb-2">ALABAY GUARDIAN</h1>
                        <h2 className="text-2xl font-bold text-[#90FFAE]">THE LOST ADVENTURE</h2>
                        <p className="mt-4 max-w-md text-white">
                            Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
                        </p>
                        <button className="mt-4 bg-[#90FFAE] font-bold px-8 py-2 rounded-full flex gap-2 items-center">
                            <FaPlay className="text-white bg-black w-8 h-8 p-2 text-lg rounded-full" /> PLAY
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="fixed right-4 top-1/4 h-1/2 w-2 bg-gray-700 rounded-full z-20">
                        <div className="bg-[#90FFAE] rounded-full" style={{ height: `${scrollHeight}%` }}></div>
                    </div>
                </div>

                <h1 className="text-2xl text-white font-bold my-10">
                    <span className="text-[#90FFAE]">GAME</span> PREVIEWS
                </h1>

                <div className="md:flex gap-6 items-center">
                    <div className="border-2 border-white h-48 rounded-2xl">
                        <Image src={image1} alt="Overview" width={500} height={500} className="object-cover w-full h-full rounded-2xl" />
                    </div>
                    <div className="border-2 border-white h-48 rounded-2xl">
                        <Image src={image2} alt="Abilities" width={500} height={500} className="object-cover w-full h-full rounded-2xl" />
                    </div>
                    <div className="border-2 border-white h-48 rounded-2xl">
                        <Image src={image3} alt="Artifacts" width={500} height={500} className="object-cover w-full h-full rounded-2xl" />
                    </div>
                </div>

                {/* Features */}
                <div className="py-20 space-y-3 font-bold text-white">
                    <h1 className="text-2xl font-bold text-[#90FFAE]">FEATURES</h1>
                    <p>
                        Explore a variety of landscapes, including <span className="text-[#90FFAE]">mountains, forests, deserts</span>, and <span className="text-[#90FFAE]">ancient ruins</span>.
                    </p>
                    <p>
                        Use the Alabay <span className="text-[#90FFAE]">abilities</span> to solve <span className="text-[#90FFAE]">puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.
                    </p>
                    <p>
                        Discover relics that tell the story of the Alabay ancestors, each piece contributing to a larger narrative about the breed role in ancient history.
                    </p>
                    <p>
                        Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
                    </p>

                    <h1 className="font-bold">Challenge Modes:</h1>
                    <div className="ml-5">
                        <p>
                            - <span className="text-[#90FFAE]">Time Trials:</span> Compete in special timed challenges where the Alabay must navigate through complex mazes or complete puzzles within a time limit.
                        </p>
                        <p>
                            - <span className="text-[#90FFAE]">Exploration Mastery:</span> A mode that rewards players for fully exploring every nook and cranny of the game’s world, uncovering all secrets.
                        </p>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="mt-4 bg-white text-black border-2 border-black w-44 font-bold px-8 py-1 rounded-full flex gap-2 items-center">
                            <FaPlay className="text-white bg-black w-8 h-8 p-2 text-lg rounded-full" /> PLAY
                        </button>
                        <button className="mt-4 border-2 bg-gray-900 border-black w-44 font-bold px-8 py-2 rounded-full">
                            EXIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlabayGuardian;




