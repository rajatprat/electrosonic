import { Footer, Header, InquiryForm, PageBanner } from "../components";

const services = [
  [
    "Radio requirement consultation",
    "We understand your site type, team size, floors, basements, outdoor areas, shift patterns, and communication pain points before suggesting products.",
  ],
  [
    "Product supply and comparison",
    "Compare Motorola, Kenwood, Icom, Aspera, Vertel, and other radio options across handhelds, mobiles, repeaters, PoC devices, and airband systems.",
  ],
  [
    "Accessories and deployment kits",
    "Plan earpieces, speaker microphones, chargers, batteries, belt clips, programming cables, and accessories around actual daily usage.",
  ],
  [
    "After-sales support",
    "Get help with product questions, basic configuration needs, replacement accessories, and practical follow-up after the equipment is supplied.",
  ],
];

const serviceFlow = [
  ["01", "Map the site", "Tell us where radios will be used and which teams need to talk."],
  ["02", "Shortlist options", "We compare suitable brands, technologies, accessories, and range requirements."],
  ["03", "Deploy the kit", "Your team gets practical guidance for channels, charging, accessories, and day-to-day use."],
];

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageBanner title="Services" image="/images/homepage-slider/slider-img2.jpg" />

      <section className="services-intro section">
        <div>
          <p className="eyebrow">Radio service support</p>
          <h2>From product selection to practical deployment guidance.</h2>
        </div>
        <p>
          Electrosonic supports teams that need dependable communication across warehouses, schools, malls, hotels,
          factories, events, security sites, aviation teams, and field operations.
        </p>
      </section>

      <section className="services-grid section">
        {services.map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="service-flow section">
        <div className="service-flow-head">
          <p className="eyebrow">How it works</p>
          <h2>A simple process for choosing the right radio setup.</h2>
        </div>
        <div className="service-flow-grid">
          {serviceFlow.map(([step, title, copy]) => (
            <article key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-support section">
        <div>
          <p className="eyebrow">Built for real teams</p>
          <h2>Support that stays practical after the sale.</h2>
        </div>
        <p>
          Radio systems work best when the whole kit is planned: handset type, charging routine, audio accessory,
          range expectations, channels, and replacement support. We keep those details part of the conversation.
        </p>
      </section>

      <section className="inquiry section"><InquiryForm dark /></section>
      <Footer />
    </main>
  );
}
