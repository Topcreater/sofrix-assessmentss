import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navebar";
import QrCode from "./(pageComponents)/landingPage/qrCode";
import Accounts from "./(pageComponents)/landingPage/accounts";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <QrCode />
      <Accounts />
      {/* <FeaturesSection /> */}
      <Footer />
    </div>
  );
}
