import Image from 'next/image';
import tokenomics from "@/assets/tokenomics.png";

const Tokenomics = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Full-width gradient background */}
            <div className="absolute inset-0" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 70%)', background: 'linear-gradient(to bottom right, #FFDD40, #FFC701)' }}></div>

            {/* Content with constrained width */}
            <div className="relative w-11/12 mx-auto px-5 py-72 z-10">
                <h1 className="banner text-white font-bold md:text-8xl text-5xl">TOKENOMICS</h1>
                <div className="md:flex justify-between items-center">
                    <div className="md:w-1/2 space-y-9">
                        <div className="bg-black rounded-2xl py-5 px-10 space-y-3 shadow-2xl">
                            <h1 className="font-extrabold text-2xl text-white">LIQUIDITY</h1>
                            <h1 className="font-extrabold text-4xl text-[#FFF280]">LOCKED</h1>
                        </div>
                        <div className="bg-black rounded-2xl py-5 px-10 space-y-3 shadow-2xl">
                            <h1 className="font-extrabold text-2xl text-white">CONTACT</h1>
                            <h1 className="font-extrabold text-4xl text-[#FFF280]">RENOUNCED</h1>
                        </div>
                        <div className="bg-black rounded-2xl py-5 px-10 space-y-3 shadow-2xl">
                            <h1 className="font-extrabold text-2xl text-white">TAXES</h1>
                            <h1 className="font-extrabold text-4xl text-[#FFF280]">0%</h1>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src={tokenomics}
                            alt="Tokenomics"
                            width={500}
                            height={500}
                            className="md:w-[580px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
