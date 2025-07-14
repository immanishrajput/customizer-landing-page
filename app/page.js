import Footer from "./COMMON/Footer";
import Navbar from "./COMMON/Navbar";
import FaqSection from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import IndustriesSec from "./components/IndustrySec";
import IntegrationSection from "./components/IntegrationSec";
import MessageSec from "./components/MessageSec";
import ProductSec from "./components/ProductSec";
import TestimonialSlider from "./components/TestimonialSlider";

export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      {/* <LogoBar/> */}
      <IntegrationSection/>
      <ProductSec/>
      <IndustriesSec/>
      <TestimonialSlider/>
      <FaqSection/>
      <MessageSec/>
      <Footer/>
    </main>
  );
}

