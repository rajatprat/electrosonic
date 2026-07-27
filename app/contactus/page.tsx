import { Footer, Header, InquiryForm, PageBanner } from "../components";

const offices = [
  {
    city: "New Delhi",
    address: "Flat No. 1011, 10th Floor, Devika Tower B-6, Nehru Place, New Delhi - 110019",
    email: "info@electrosonictech.com",
    phones: ["+91-11-43619394", "+91-9990696931", "+91-9990696961"],
  },
  {
    city: "Mumbai",
    address: "B-122, First Floor, Ashoka Super Market, S.V. Road, Goregaon (W), Mumbai - 400104",
    email: "mumbai@electrosonictech.com",
    phones: ["+91-22-47784817", "+91-9990696931", "+91-9082896765"],
  },
];

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageBanner title="Contact Us" image="/images/contact-banner.jpg" />

      <section className="contact-intro section">
        <div>
          <p className="eyebrow">Contact Electrosonic</p>
          <h2>Talk to us before you choose a radio setup.</h2>
        </div>
        <p>
          Share your location type, team size, range expectations, and preferred brands. Our Delhi and Mumbai teams can
          help you shortlist radios, repeaters, PoC devices, airband systems, and accessories.
        </p>
      </section>

      <section className="contact-hub section">
        <div className="office-grid">
          {offices.map((office) => (
            <article key={office.city}>
              <span>{office.city.slice(0, 3).toUpperCase()}</span>
              <h2>{office.city}</h2>
              <p>{office.address}</p>
              <a href={`mailto:${office.email}`}>{office.email}</a>
              {office.phones.map((phone) => (
                <a key={phone} href={phoneHref(phone)}>{phone}</a>
              ))}
            </article>
          ))}
        </div>

        <div className="contact-form-panel">
          <InquiryForm />
        </div>
      </section>

      <section className="contact-quick section">
        <article>
          <span>Email</span>
          <a href="mailto:info@electrosonictech.com">info@electrosonictech.com</a>
        </article>
        <article>
          <span>Call</span>
          <a href="tel:+919990696931">+91-9990696931</a>
        </article>
        <article>
          <span>Support hubs</span>
          <strong>Delhi and Mumbai</strong>
        </article>
      </section>

      <Footer />
    </main>
  );
}
