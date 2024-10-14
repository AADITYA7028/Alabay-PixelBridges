import vision from "@/assets/vision.png";
import Image from 'next/image';


const ProjectVision = () => {
    return (
        <div className="relative h-[1550px]">
            {/* Full-width gradient background */}
            <div className="absolute inset-0" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)', background: 'linear-gradient(to bottom right, #FFDD40, #FFC701)' }}></div>


            <div className="relative my-24">
                <h1 className="vision text-4xl md:text-8xl text-[#FFA800] font-bold text-center">PROJECT VISION</h1>
                <div className="md:w-11/12 mx-auto text-center">
                    <Image
                        src={vision}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="mx-auto w-full"
                    />
                </div>
                <div className="mt-5 px-3 md:w-9/12 mx-auto">

                    <p className="text-[30px] md:text-center text-justify font-bold">Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just ass the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
                </div>
            </div>
           
        </div>
    );
};

export default ProjectVision;
