"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import CtaSection from "./CtaSection/page";
import CustomizerJourney from "./CustomizerJourney/page";
import CustomizerPartHeroSec from "./CustomizerPartHeroSec/page";
import CustomTest from "./CustomTest/page";
import WhyChooseCustomizer from "./WhyChooseCutomizer/page";


export default function CutomizerPartnerComponent() {
  return (
    <main>
      <Navbar/>
      <CustomizerPartHeroSec/>
      <WhyChooseCustomizer/>
      <CustomizerJourney/>
      <CustomTest/>
      <CtaSection/>
      
      <Footer/>
    </main>
  );
}

