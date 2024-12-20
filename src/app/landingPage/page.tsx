
import Accounts from "./(pageComponents)/accounts";
import HeroSection from "./(pageComponents)/heroSection";
import QrCode from "./(pageComponents)/qrCode";

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <QrCode />
      <Accounts />
    </div>
  );
}
