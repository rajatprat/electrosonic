import { BrandStrip, Footer, Header, InquiryForm } from "./components";
import { products, strengths, testimonials } from "./site-data";
import { getBlogPosts } from "./blog-data";

const stats = [
  ["20+", "Curated radio models"],
  ["5", "Specialist brands"],
  ["2", "Service hubs"],
  ["PMR446", "License-free options"],
];

const workflows = [
  ["01", "Understand the site", "We map your coverage area, team size, work shifts, and safety requirements."],
  ["02", "Match the radio stack", "We shortlist handhelds, mobiles, repeaters, PoC radios, and accessories."],
  ["03", "Deploy and support", "Your team gets practical guidance, configuration support, and responsive follow-up."],
];

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <main>
      <Header />

      <section className="hero redesign-hero" id="home">
        <img className="hero-image" src="/images/homepage-slider/slider-img1.jpg" alt="Motorola TALKABOUT radio products" />
        <div className="hero-overlay" />
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="hero-kicker">Radio systems for teams that need to move</p>
            <h1>Clear, reliable communication for every shift.</h1>
            <p>
              Electrosonic helps businesses choose and deploy walkie talkies, PMR446 radios, PoC systems, repeaters,
              aviation radios, and accessories from trusted communication brands.
            </p>
            <div className="hero-actions">
              <a className="text-button" href="/products/">Explore product catalog</a>
              <a className="hero-link" href="/contactus/">Request a recommendation</a>
            </div>
          </div>

          <div className="hero-command-panel">
            <p>Catalog snapshot</p>
            <div className="hero-stats">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="capability-strip">
        {["License-free radios", "Digital fleets", "PoC / LTE", "Repeaters", "Aviation radios"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="about section redesign-about">
        <div className="about-copy">
          <p className="eyebrow">Practical radio consultation</p>
          <h2>Choose equipment that fits your site, not just a spec sheet.</h2>
          <p>
            Electrosonic helps teams compare the right communication setup for real working conditions: floors,
            basements, loading bays, security routes, events, campuses, and industrial areas.
          </p>
          <div className="about-proof">
            <span>Multi-brand supply</span>
            <span>Coverage-led recommendations</span>
            <span>After-sales support</span>
          </div>
          <a className="text-button" href="/aboutus/">About Electrosonic</a>
        </div>
        <div className="about-media">
          <img src="/images/sec2-rt-img-transparent.png" alt="Two way radio communication equipment and users" width={570} height={445} />
          <div>
            <strong>Delhi + Mumbai</strong>
            <span>Consultation, supply, and support</span>
          </div>
        </div>
      </section>

      <section className="why section redesign-why">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Why teams choose us</p>
            <h2>Quietly rigorous. Fast when it matters.</h2>
          </div>
          <a className="outline-button light-outline" href="/services/">View services</a>
        </div>
        <div className="why-grid">
          {strengths.map(([title, copy, icon]) => (
            <article key={title} className="why-item">
              <img src={icon} alt="" width={62} height={62} />
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-showcase">
        <div className="product-showcase-head">
          <div>
            <p className="eyebrow">Communication categories</p>
            <h2>Build the right radio mix for your team.</h2>
            <p>
              Compare the main communication options before choosing a model: license-free radios, digital fleets,
              PoC devices, Wi-Fi radios, and specialist accessories.
            </p>
          </div>
          <a className="outline-button" href="/products/">Open full catalog</a>
        </div>
        <div className="product-grid">
          {products.map(([title, copy, image]) => (
            <article key={title} className="product-card">
              {image ? <img src={image} alt={title} width={170} height={170} /> : <div className="product-fallback" aria-hidden="true">HAM</div>}
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow section">
        <div>
          <p className="eyebrow">How we work</p>
          <h2>From requirement to working radio fleet.</h2>
        </div>
        <div className="workflow-grid">
          {workflows.map(([step, title, copy]) => (
            <article key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-preview section">
        <div className="blog-editorial-head">
          <div>
            <h2>Ideas for safer, sharper field operations.</h2>
            <p>
              Product guidance, industry notes and practical communication tips for teams using radios, airband,
              PoC, repeaters and security equipment.
            </p>
          </div>
          <a className="outline-button" href="/blog/">View all posts</a>
        </div>
        <div className="journal-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.title} className="journal-card">
              <a className="journal-image" href={`/blog/${post.slug}/`}>
                <span>Radio Journal</span>
                <img src={post.image} alt="" />
              </a>
              <div className="journal-card-body">
                <p className="journal-date">{post.date}</p>
                <span>{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}/`}>Read more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials section">
        <div className="testimonial-head">
          <div>
            <p className="eyebrow">Field feedback</p>
            <h2>Customers value clear advice before and after the purchase.</h2>
          </div>
          <p>
            From product selection to setup support, these notes reflect what teams usually need most: practical
            recommendations, reliable radios, and quick answers when work is moving.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([name, quote]) => (
            <article key={name} className="testimonial">
              <p>{quote}</p>
              <div className="testimonial-author">
                <span>{name.slice(0, 1)}</span>
                <div>
                  <strong>{name}</strong>
                  <small>Verified customer</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BrandStrip />

      <section className="inquiry section">
        <InquiryForm dark />
      </section>

      <Footer />
    </main>
  );
}
