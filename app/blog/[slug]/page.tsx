import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import { blogPosts, getBlogPost } from "../../blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Header />
      <article className="article-page">
        <header className="article-hero">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <span>{post.date} · {post.readTime}</span>
        </header>

        <img className="article-image" src={post.image} alt="" />

        <div className="article-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="article-cta">
            <h2>Need help choosing?</h2>
            <p>Share your site type, team size, and coverage needs. Electrosonic can help shortlist the right radios.</p>
            <a className="text-button" href="/contactus/">Contact us</a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
