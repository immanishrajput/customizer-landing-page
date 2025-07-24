"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import CtaSection from "./CtaSection/page";
import JewelryBanner from "./JewelryBanner/page";
import JewelrySec2 from "./JewelrySec2/page";


export default function JewelryComponent() {
  return (
    <main>
      <Navbar/>
      <JewelryBanner/>
      <JewelrySec2/>
      <CtaSection/>
      
      <Footer/>
    </main>
  );
}

