"use client"
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import Blogs from "./Blogs/page";


export default function BlogComponent() {
    return (
        <main>
            <Navbar />
            <Blogs/>
            <Footer />
        </main>
    );
}

