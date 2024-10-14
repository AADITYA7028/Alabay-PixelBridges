

import Image from 'next/image'
import bannerCat from "@/assets/bannerCat.png"


const Banner = () => {
    return (
        <div className="relative md:h-[650px]">
            {/* Full-width gradient background */}
            <div className="absolute inset-0" style={{
                clipPath: 'polygon(0 0%, 100% 0, 100% 100%, 0 70%)',
                background: 'linear-gradient(to right, #FFC701 20%, #FFED71 50%, #FFC701)'
            }}></div>

            <div className="relative  to-90% md:flex justify-between md:p-16 rounded-xl items-center">
                <div className="md:w-1/2">
                    <Image
                        src={bannerCat}
                        alt="Picture of the author"
                        width={700}
                        height={700}
                       
                    />
                </div>
                <div className="md:w-1/2 md:text-right text-justify space-y-5 px-8">
                    <h1 className="font-extrabold text-4xl md:text-6xl text-[#F87A03]">History of </h1>
                    <h1 className="banner font-extrabold text-5xl md:text-8xl text-white">
                       ALABAY
                    </h1>
                    <p className="text-3xl">The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;