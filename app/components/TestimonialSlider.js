"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "Gabrial Soares",
    role: "CEO & Kds",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753188481/image_3_sg1ybq.png",
  },
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "Emily Carter",
    role: "Head of Marketing",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753188481/image_3_sg1ybq.png",
  },
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "James Lee",
    role: "Product Manager",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753188481/image_3_sg1ybq.png",
  },
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "Emily Carter",
    role: "Head of Marketing",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753188481/image_3_sg1ybq.png",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;        // ← capture once
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedOnce) {
          sliderRef.current?.slickGoTo(0);
          setHasPlayedOnce(true);           // autoplay already true in settings
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    // cleanup uses the *same* captured node
    return () => observer.unobserve(node);
  }, [hasPlayedOnce]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <div className="testimonial-container">
        <header>
          <h2 className="testimonial-title">Customers Say It Best:</h2>
        </header>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-slide">
              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-author">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="author-image"
                  priority
                />
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
