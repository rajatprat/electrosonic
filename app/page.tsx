import { BrandStrip, Footer, Header, InquiryForm } from "./components";
import { products, strengths, testimonials } from "./site-data";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="home">
        <img className="hero-image" src="/images/homepage-slider/slider-img1.jpg" alt="Motorola TALKABOUT radio products" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <h1>Simplify Communications</h1>
          <p>The TALKABOUT T82 is the perfect partner for keeping you connected.</p>
        </div>
      </section>

      <section className="about section">
        <div>
          <p className="eyebrow">Everything you need in one place!</p>
          <h2>About Electrosonic Technologies Pvt Ltd</h2>
          <p>
            We as a company are built on the foundation of the virtues that resonate with sincerity, courage and a will
            to achieve. We are a growing bundle of communication systems that wants to offer the best services to the
            clients while enriching them with better knowledge, righteous opinions and the best products.
          </p>
          <a className="text-button" href="/aboutus/">Learn More</a>
        </div>
        <img src="/images/sec2-rt-img.jpg" alt="Communication radio equipment" width={720} height={520} />
      </section>

      <section className="why section">
        <h2>Why Choose Us</h2>
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

      <section className="section">
        <h2 className="center">Our Products</h2>
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
        <p className="center top-gap"><a className="text-button" href="/products/">Learn More</a></p>
      </section>

      <section className="testimonials section">
        <h2 className="center">Our Clients Says</h2>
        <div className="testimonial-grid">
          {testimonials.map(([name, quote]) => (
            <article key={name} className="testimonial">
              <p>{quote}</p>
              <span>★★★★★</span>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="inquiry section">
        <InquiryForm dark />
      </section>

      <BrandStrip />
      <Footer />
    </main>
  );
}
