import { Hero } from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Teachers from "../components/Teachers";

export function Home() {
  return (
    <div className="bg-black bgcustom2">
      <Navbar />
      <Hero />
      <Teachers />
      <InfoSection />
    </div>
  );
}

export default Home;
