import { Footer, Header, InquiryForm, PageBanner } from "../components";
import { strengths } from "../site-data";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageBanner title="Services" image="/images/homepage-slider/slider-img2.jpg" />
      <section className="section prose-section">
        <h2>Communication services built around reliable radio systems</h2>
        <p>
          Electrosonic Technologies supports customers with product selection, walkie talkie supply, radio accessories,
          installation guidance, maintenance support and responsive customer service.
        </p>
      </section>
      <section className="why section">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {strengths.map(([title, copy, icon]) => (
            <article key={title} className="why-item">
              <img src={icon} alt="" width={62} height={62} />
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section service-grid">
        {["Walkie Talkie Consultation", "Product Supply", "Accessories", "After Sales Support"].map((item) => (
          <article key={item}>
            <h3>{item}</h3>
            <p>Practical support for dependable communication across workplaces, events, security teams and operations.</p>
          </article>
        ))}
      </section>
      <section className="inquiry section"><InquiryForm dark /></section>
      <Footer />
    </main>
  );
}
