"use client";
import "./blogs.css";
import Image from "next/image";

const dummyBlogs = [
  {
    id: 1,
    title: "The Role of Visual Product Customizers in E-Commerce Success",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753166012/Rectangle_21_bd8o9w.png",
    date: "27 July, 25",
    author: "Sara Tendulkar",
  },
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 2,
    title: "The Role of Visual Product Customizers in E-Commerce Success",
    image:
      "https://res.cloudinary.com/dqjbzgksw/image/upload/v1753166012/Rectangle_21_1_qgqtbo.png",
    date: "27 July, 25",
    author: "Sara Tendulkar",
  })),
];

export default function Blogs() {
  const [featured, ...rest] = dummyBlogs;

  return (
    <main className="blog-page">
      <header className="blog-header">
        <h1>The Customizer Blog</h1>
      </header>

      <section className="blog-grid-wrapper">
        <article className="featured-blog">
          <BlogCard blog={featured} featured />
        </article>

        <section className="blog-grid">
          {rest.map((blog) => (
            <article key={blog.id}>
              <BlogCard blog={blog} />
            </article>
          ))}
        </section>
      </section>
 
      <section className="cta-section">
        <div className="cta-box">
          <h2 className="cta-title">Get started for free</h2>
          <p className="cta-subtext">
            Play around with Customizer and set up your docs for free. Add your
            team and pay when you’re ready.
          </p>
          <a href="/contact" className="cta-btn">
            Request a Demo
          </a>
        </div>
      </section>
    </main>
  );
}

function BlogCard({ blog, featured }) {
  return (
    <article className={`blog-card ${featured ? "featured" : ""}`}>
      {featured ? (
        <div className="featured-layout">
          <figure className="blog-image featured-img">
            <Image
              src={blog.image}
              alt={blog.title}
              width={600}
              height={350}
              layout="responsive"
            />
          </figure>
          <div className="blog-info featured-info">
            <time className="blog-date">{blog.date}</time>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-author">Post by: {blog.author}</p>
          </div>
        </div>
      ) : (
        <>
          <figure className="blog-image">
            <Image
              src={blog.image}
              alt={blog.title}
              width={700}
              height={250}
              layout="responsive"
            />
          </figure>
          <div className="blog-info">
            <time className="blog-date1">{blog.date}</time>
            <h2 className="blog-title1">{blog.title}</h2>
            <p className="blog-author1">Post by: {blog.author}</p>
          </div>
        </>
      )}
    </article>
  );
}
