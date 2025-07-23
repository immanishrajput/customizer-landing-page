"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import CtaSection from "./CtaSection/page";
import FashionBanner from "./FashionBanner/page";
import FashionSec2 from "./FashionSec2/page";


export default function FashionApparelComponent() {
  return (
    <main>
      <Navbar/>
      <FashionBanner/>
      <FashionSec2/>
      <CtaSection/>
      
      <Footer/>
    </main>
  );
}

