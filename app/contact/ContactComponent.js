"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import ContactSection from "./ContactBanner/page";
import CtaSection from "./CtaSection/page";
import FaqSection from "./FaqSection/page";


export default function ContactComponent() {
  return (
    <main>
      <Navbar/>
      <ContactSection/>
      <FaqSection/>
      <CtaSection/>
      
      <Footer/>
    </main>
  );
}

