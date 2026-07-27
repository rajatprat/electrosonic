import { Footer, Header, PageBanner } from "../components";

const aboutStats = [
  ["20+", "Curated radio models"],
  ["5+", "Specialist brands"],
  ["2", "Service hubs"],
  ["PMR446", "License-free options"],
];

const principles = [
  [
    "Site-first recommendations",
    "We discuss floors, basements, outdoor areas, security routes, and team movement before suggesting a model.",
  ],
  [
    "Multi-brand comparison",
    "Motorola, Kenwood, Icom, Aspera, Vertel, and other options are compared by fit, durability, and support.",
  ],
  [
    "Practical deployment support",
    "Channels, accessories, chargers, batteries, and repeaters are planned around how your team will actually work.",
  ],
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageBanner title="About Us" image="/images/about-banner.jpg" />

      <section className="about-story section">
        <div className="about-story-copy">
          <p className="eyebrow">Electrosonic Technologies</p>
          <h2>Communication guidance for teams that cannot afford unclear coordination.</h2>
          <p>
            Electrosonic Technologies Pvt Ltd helps businesses choose, source, and support radio communication systems
            for real working environments. We work with teams that depend on quick voice coordination across warehouses,
            hotels, schools, malls, events, factories, security routes, aviation teams, and field operations.
          </p>
          <p>
            Our role is simple: understand the site, compare suitable products, and help customers build a radio setup
            that is easy to use, dependable during daily shifts, and practical to maintain.
          </p>
        </div>
        <div className="about-story-media">
          <img src="/images/sec2-rt-img-transparent.png" alt="Two way radio communication equipment and users" />
          <div>
            <strong>Delhi + Mumbai</strong>
            <span>Consultation, supply, and support across India</span>
          </div>
        </div>
      </section>

      <section className="about-stats section">
        {aboutStats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="about-principles section">
        <div className="about-section-head">
          <p className="eyebrow">How we think</p>
          <h2>Better radio decisions start with the operating environment.</h2>
          <p>
            A good communication setup is not chosen from a brochure alone. It comes from matching range, battery,
            audio, licensing, accessories, and support to the way a team actually moves through a site.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mission-vision section">
        <article>
          <p className="eyebrow">Mission</p>
          <h2>Make reliable communication easier to choose and deploy.</h2>
          <p>
            We aim to provide quality products, honest recommendations, and responsive service so customers can operate
            with clearer coordination and fewer communication gaps.
          </p>
        </article>
        <article>
          <p className="eyebrow">Vision</p>
          <h2>Be a trusted communication partner for growing teams.</h2>
          <p>
            Our vision is to help organizations across India build practical, scalable radio systems that support safer,
            faster, and better-coordinated work.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
