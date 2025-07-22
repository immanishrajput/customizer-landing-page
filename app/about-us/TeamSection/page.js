"use client";
import React from "react";
import "./TeamSection.css";

const team = [
  {
    name: "Floyd Miles",
    role: "Executive Officer and Founder",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753161829/Rectangle_20_wfn1tv.png",
  },
  {
    name: "Marvin McKinney",
    role: "As a Partner",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753161829/Rectangle_20_1_cubpal.png",
  },
  {
    name: "Leslie Alexander",
    role: "Developer",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753161829/Rectangle_20_2_kan26s.png",
  },
  {
    name: "Jane Cooper",
    role: "Developer",
    image: "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753161829/Rectangle_20_3_jcivtw.png",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <header className="team-header">
          <h2>Our Crew – Your Customizer</h2>
          <p>The dream customization team – Your best choice for ecommerce personalization.</p>
        </header>
        <div className="team-grid">
          {team.map((member, index) => (
            <article className="team-member" key={index}>
              <figure>
                <img src={member.image} alt={member.name} />
              </figure>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
