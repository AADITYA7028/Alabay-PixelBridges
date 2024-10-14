"use client"
import Image from 'next/image'
import roadMap from "@/assets/roadMap.png";
import dog1 from "@/assets/dog1.png";
import dog2 from "@/assets/dog2.png";
import dog3 from "@/assets/dog3.png";
import dog4 from "@/assets/dog4.png";


const RoadMap = () => {

    const cards = [
        { title: "Community Building and Initial Launch", imageSrc: dog1 },
        { title: "Merchangdise Store Launch", imageSrc: dog2 },
        { title: "Community Events and Contests", imageSrc: dog3 },
        { title: "Expansion and New Features", imageSrc: dog4 }
    ];
  const gradients = [
    'from-[#E0CE25] to-[#FAF4C0]',
    'from-[#24DDDD] to-[#CDFCFC]',
    'from-[#D52EFF] to-[#F6D5FD]',
    'from-[#944244] to-[#E7D5D6]'
    ];
    // const gradient = gradients[index];
    // console.log(gradient)
    return (
        <div className="w-11/12 mx-auto md:px-5 my-20 relative -mt-[400px]">
            <h1 className="banner text-white font-bold text-6xl md:text-8xl">ROAD MAP</h1>
            <div className="md:flex justify-between items-center">
                <div className="md:w-1/2 space-y-9">
                    <h1 className="text-4xl font-bold">Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
                    </h1>
                    <h1 className="text-4xl font-bold text-[#FFA800]">Join us as we grow and achieve new heights.</h1>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={roadMap}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>
            </div>
            {/* card */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 my-12">
                {cards.map((card, index) => (
                    <div key={index}>
                        <div className={`bg-gradient-to-b ${gradients[index]} p-3 rounded-lg shadow-lg`}>
                            <h2 className="text-2xl font-bold text-white mb-4 text-center">{card.title}</h2>
                            <div className="flex justify-center items-center h-80">
                                <Image src={card.imageSrc} alt={card.title} width={250} height={250} className="object-cover" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default RoadMap;