"use client";
import React from "react";
import "./blogdetail.css";

const BlogDetail = () => {
  return (
    <article className="blogdetail-container">
      <a href="/blog" className="back-btn">View all posts</a>

      <header className="blogdetail-header">
        <h1>The Role of Visual Product Customizers in E-Commerce Success</h1>
        <p className="blogdetail-meta">
          <time dateTime="2025-05-29">29 May, 25</time> &nbsp;•&nbsp; Post by <strong>Sara Tondowsky</strong>
        </p>
      </header>

      <figure className="blogdetail-image">
        <img
          src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1753166012/Rectangle_21_bd8o9w.png"
          alt="Person customizing a product on laptop"
        />
      </figure>

      <section className="blogdetail-content">
        <p>
          Last week we talked a lot about building the future of documentation — and that’s a theme
          we want to continue today. The engineering team at GitBook are working on a few different
          features that we’re excited to launch — computed content and upgraded insights among them.
          But today I want to talk to you about something new called adaptive content.
        </p>
        <p>
          Hey 👋 I’m Steven, and I’m Head of Engineering at GitBook. For the past few months I’ve
          been working on making an idea into a reality: docs that can use user information to adapt
          to that user’s needs in advanced, powerful ways.
        </p>
      </section>

      <section className="blogdetail-subcontent">
        <h2>Why is adaptive content important?</h2>
        <p>
          Last week we talked a lot about building the future of documentation — and that’s a theme
          we want to continue today. The engineering team at GitBook are working on a few different
          features that we’re excited to launch — computed content and upgraded insights among them.
          But today I want to talk to you about something new called adaptive content.
        </p>
        <p>
          Hey 👋 I’m Steven, and I’m Head of Engineering at GitBook. For the past few months I’ve
          been working on making an idea into a reality: docs that can use user information to adapt
          to that user’s needs in advanced, powerful ways.
        </p>
        <p>
          Last week we talked a lot about building the future of documentation — and that’s a theme
          we want to continue today. The engineering team at GitBook are working on a few different
          features that we’re excited to launch — computed content and upgraded insights among them.
          But today I want to talk to you about something new called adaptive content.
        </p>
        <p>
          Hey 👋 I’m Steven, and I’m Head of Engineering at GitBook. For the past few months I’ve
          been working on making an idea into a reality: docs that can use user information to adapt
          to that user’s needs in advanced, powerful ways.
        </p>
      </section>
    </article>
  );
};

export default BlogDetail;
