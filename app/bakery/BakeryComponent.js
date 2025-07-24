"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import BakeryBanner from "./BakeryBanner/page";
import BakerySec2 from "./BakerySec2/page";
import CtaSection from "./CtaSection/page";


export default function BakeryComponent() {
  return (
    <main>
      <Navbar/>
      <BakeryBanner/>
      <BakerySec2/>
      <CtaSection/>
      
      <Footer/>
    </main>
  );
}

