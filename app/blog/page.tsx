import { Footer, Header } from "../components";
import { blogPosts } from "../blog-data";

export default function BlogPage() {
  return (
    <main>
      <Header />

      <section className="blog-index-hero">
        <h1>Ideas for safer, sharper field operations.</h1>
        <p>
          Product guidance, industry notes and practical communication tips for teams using radios, airband,
          PoC, repeaters and security equipment.
        </p>
      </section>

      <section className="blog-index section">
        <div className="journal-grid journal-grid-full">
          {blogPosts.map((post) => (
            <article key={post.slug} className="journal-card">
              <a className="journal-image" href={`/blog/${post.slug}/`}>
                <span>Electrosonic Journal</span>
                <img src={post.image} alt="" />
              </a>
              <div className="journal-card-body">
                <p className="journal-date">{post.date}</p>
                <span>{post.category}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}/`}>Read article</a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
