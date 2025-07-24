"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import CtaSection from "./CtaSection/page";
import GiftBanner from "./GiftBanner/page";
import GiftSec2 from "./GiftSec2/page";


export default function GiftOccasionComponent() {
  return (
    <main>
      <Navbar/>
      <GiftBanner/>
      <GiftSec2/>
      <CtaSection/>
      
      <Footer/>
    </main>
  );
}

