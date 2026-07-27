import { Footer, Header, PageBanner } from "../components";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageBanner title="About Us" image="/images/about-banner.jpg" />

      <section className="about section inner-about">
        <div>
          <p className="eyebrow">Everything you need in one place!</p>
          <h2>About Electrosonic Technologies Pvt Ltd</h2>
          <p>
            We as a company are built on the foundation of the virtues that resonate with sincerity, courage and a will
            to achieve. We are a growing bundle of communication systems that wants to not only offer the best services
            to the clients but also enrich them with better knowledge, righteous opinions and the best products.
          </p>
          <p>
            A leading company in providing walkie talkies with loads of experience, innovative methodology, delightful
            communication skills and trustworthy individuals, we excel in whatever we do.
          </p>
        </div>
        <img src="/images/about-right-img.jpg" alt="Electrosonic communication products" width={720} height={520} />
      </section>

      <section className="section prose-section">
        <p>Based out of New Delhi, India, we offer a range of products, related accessories and world class services.</p>
        <p>
          Working on the principles of integrity, honesty, customer satisfaction and commitment, we focus on brilliant
          and strategic management skills. We focus amply on team work and inculcate a feeling of hard work, oneness and
          goal orientation in all of our employees.
        </p>
        <p>One thing that you would find different with us is our professionalism with which we handle every client.</p>
        <p>We are everything that a company aims to be and wants to be. We are Electrosonic.</p>
      </section>

      <section className="split-band section">
        <div>
          <h2>Mission</h2>
          <p>To conduit a quality product and commitments.</p>
        </div>
        <img src="/images/about-mission-img.png" alt="" />
      </section>

      <section className="split-band section reverse">
        <img src="/images/about-vision-img.png" alt="" />
        <div>
          <h2>Vision</h2>
          <p>Will to win.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
