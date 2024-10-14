import Banner from "@/components/Banner";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Merchandise from "@/components/Merchandise";
import Games from "@/components/Games";
import RoadMap from "@/components/RoadMap";
import Tokenomics from "@/components/Tokenomics";
import ProjectVision from "@/components/ProjectVision";
import TabsPhotos from "@/components/TabsPhotos";
import GamePreviews from "@/components/GamePreviews";

export default function Home() {
  return (
    <div>
      <Banner />
      <TabsPhotos />
      <ProjectVision />
      <RoadMap />
      <Tokenomics />
      <Merchandise />
      <Games /> 
      <GamePreviews/>
      <SocialMediaLinks />
    </div>
  );
}
