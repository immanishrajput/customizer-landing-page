"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "Gabrial Soares",
    role: "CEO & Kds",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "Emily Carter",
    role: "Head of Marketing",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "James Lee",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    text: "The Customizer has been a game-changer for our product business. It boosts user engagement and drives higher product personalization across categories from apparel and accessories to books. Whether it's for showcasing new features, onboarding users, or promoting limited-edition collections, it’s become an essential tool for our brand’s growth and customer connection.",
    name: "Emily Carter",
    role: "Head of Marketing",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedOnce) {
          sliderRef.current?.slickGoTo(0); // Go to first slide
          setShouldPlay(true); // Start autoplay
          setHasPlayedOnce(true); // Prevent future resets
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
                <img src={t.image} alt={t.name} className="author-image" />
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
