"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./message.css";
import Image from "next/image";

const MessageSec = () => {
  return (
    <section className="important-message-section">
      <div className="message-container">
        <article className="message-text">
          <h2>
            <span className="highlight">Make sure every</span> <br />
            important message <br />counts.
          </h2>
          <p>
            Maintain a visible product journey with changelogs that highlight
            every new tool, tweak, or upgrade in your customizer.
          </p>
          <button className="cta-button">
            Try for free <FiArrowRight className="icon" />
          </button>
        </article>
        <figure className="message-image">
          <Image
            src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752490985/Group_fh1sfm.png"
            alt="Chat notification icon"
            width={300}
            height={300}
          />
        </figure>
      </div>
    </section>
  );
};

export default MessageSec;
