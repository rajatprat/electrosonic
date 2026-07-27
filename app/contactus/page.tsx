import { Footer, Header, InquiryForm, PageBanner } from "../components";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageBanner title="Contact Us" image="/images/contact-banner.jpg" />

      <section className="contact-layout section">
        <div className="office-grid">
          <article>
            <h2>New Delhi</h2>
            <p>FLAT No. 1011, 10th FLOOR, Devika Tower B-6, Nehru Place New Delhi - 110019</p>
            <a href="mailto:info@electrosonictech.com">info@electrosonictech.com</a>
            <a href="tel:+911143619394">+91-11-43619394</a>
            <a href="tel:+919990696931">+91-9990696931</a>
            <a href="tel:+919990696961">+91-9990696961</a>
          </article>
          <article>
            <h2>Mumbai</h2>
            <p>B-122, First Floor, Ashoka Super Market, S.V. Road Goregaon (W), Mumbai-400104</p>
            <a href="mailto:mumbai@electrosonictech.com">mumbai@electrosonictech.com</a>
            <a href="tel:+912247784817">+91-22-47784817</a>
            <a href="tel:+919990696931">+91-9990696931</a>
            <a href="tel:+919082896765">+91-9082896765</a>
          </article>
        </div>
        <InquiryForm />
      </section>

      <Footer />
    </main>
  );
}
