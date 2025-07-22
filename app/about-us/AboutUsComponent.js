"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import AboutSec2 from "./AboutSec2/page";
import AboutSec3 from "./AboutSec3/page";
import AboutSec4 from "./AboutSec4/page";
import AboutSec5 from "./AboutSec5/page";
import AboutUsBanner from "./AboutUsBanner/page";
import AchieveSection from "./AchieveSection/page";
import TeamSection from "./TeamSection/page";


export default function AboutUsComponent() {
    return (
        <main>
            <Navbar />
            <AboutUsBanner />
            <AboutSec2 />
            <AboutSec3 />
            <AboutSec4 />
            <AboutSec5 />
            <TeamSection/>
            <AchieveSection/>
            <Footer />
        </main>
    );
}

