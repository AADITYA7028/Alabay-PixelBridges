import Image from 'next/image';
import socialPhoto from "@/assets/socialPhoto.png";
import twitter from "@/assets/twitter.png";
import maskgroup from "@/assets/maskgroup.png";

const SocialMediaLinks = () => {
    return (
        <div className="md:w-9/12 mx-auto">
            <h1 className="vision text-8xl text-[#FFA800] font-bold ">Social Media <br /> Links </h1>
            <div className="md:flex justify-between items-center">
                

                <div className="bg-[#417DF2] rounded-2xl border-8 border-[#132e64] py-12 px-16 space-y-6">
                   <div className="flex gap-4 items-center">
                    <Image
                        src={twitter}
                        alt="Picture of the author"
                        width={70}
                        height={70}
                        className="bg-black w-20 h-20 p-5 rounded-full"
                    />
                    <h1 className="text-2xl font-bold text-white">Twitter Link</h1>
                   </div>
                   <div className="flex gap-4 items-center">
                    <Image
                        src={maskgroup}
                        alt="Picture of the author"
                        width={70}
                        height={70}
                        className="bg-black w-20 h-20 p-5 rounded-full"
                    />
                    <h1 className="text-2xl font-bold text-white">Telegram Link</h1>
                   </div>
                  
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={socialPhoto}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

        </div>
    );
};

export default SocialMediaLinks;