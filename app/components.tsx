import { brands } from "./site-data";

const navItems = [
  ["Home", "/"],
  ["About us", "/aboutus/"],
  ["Products", "/products/"],
  ["Services", "/services/"],
  ["Blog", "/blog/"],
  ["Contact us", "/contactus/"],
];

export function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="/" aria-label="ElectroSonic home">
        <img src="/images/logo.png" alt="ElectroSonic" width={178} height={58} />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([item, href]) => (
          <a key={item} href={href}>{item}</a>
        ))}
      </nav>
    </header>
  );
}

export function PageBanner({ title, image }: { title: string; image: string }) {
  return (
    <section className="page-banner">
      <img src={image} alt="" />
      <div>
        <h1>{title}</h1>
        <p><a href="/">Home</a> <span>{title}</span></p>
      </div>
    </section>
  );
}

export function InquiryForm({ dark = false }: { dark?: boolean }) {
  return (
    <div className={dark ? "inquiry-wrap dark-form" : "inquiry-wrap"}>
      {dark ? (
        <div className="inquiry-copy">
          <p className="eyebrow">Talk to a radio specialist</p>
          <h2>Tell us your site. We will suggest the right communication setup.</h2>
          <p>
            Share your team size, location type, and coverage needs. We can help compare handheld radios, repeaters,
            license-free PMR446 options, PoC devices, and accessories.
          </p>
          <div className="inquiry-points">
            <span>Fast product shortlisting</span>
            <span>Delhi and Mumbai support</span>
            <span>Multi-brand guidance</span>
          </div>
        </div>
      ) : null}
      <form className="inquiry-card">
        <p className="eyebrow">Contact Us</p>
        <h2>Inquiry Form</h2>
        <div className="form-grid">
          <input placeholder="Your Name" aria-label="Your Name" />
          <input placeholder="Your Email" aria-label="Your Email" type="email" />
          <input placeholder="Phone Number" aria-label="Phone Number" />
          <input placeholder="Company" aria-label="Company" />
          <textarea placeholder="Tell us what you need" aria-label="Message" rows={4} />
        </div>
        <button type="button">Request recommendation</button>
      </form>
    </div>
  );
}

export function BrandStrip() {
  return (
    <section className="brands section">
      <div className="brands-head">
        <div>
          <p className="eyebrow">Brand ecosystem</p>
          <h2>One place to compare the radio brands teams actually use.</h2>
        </div>
        <p>
          Motorola, Kenwood, Icom, Aspera, and specialist radio partners brought together for practical comparison,
          supply, and after-sales guidance.
        </p>
      </div>
      <div className="brand-panel">
        <div className="brand-panel-copy">
          <span>08</span>
          <h3>Specialist partner brands</h3>
          <p>
            We help shortlist the right mix across license-free radios, digital systems, repeaters, aviation radios,
            PoC devices, and accessories.
          </p>
        </div>
        <div className="brand-strip">
          {brands.map((brand) => (
            <img key={brand} src={`/images/brands/${brand}`} alt="" width={138} height={78} />
          ))}
        </div>
      </div>
      <div className="brand-note">
        <span>Multi-brand catalog</span>
        <span>Product shortlisting</span>
        <span>Deployment support</span>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <img src="/images/footer-logo.png" alt="ElectroSonic" width={190} height={62} />
          <p>
            We as a company are built on sincerity, courage and a will to achieve, offering communication systems,
            services and knowledge-led product guidance.
          </p>
        </div>
        <div>
          <h3>Useful Links</h3>
          {navItems.map(([item, href]) => <a key={item} href={href}>{item}</a>)}
          <a href="/iso_certificate.pdf">Our ISO Certificate</a>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Sign up your Newsletter</p>
          <input type="email" placeholder="Email Address" aria-label="Newsletter email" />
          <button type="button">Subscribe</button>
        </div>
        <div>
          <h3>Contact Us</h3>
          <a href="mailto:info@electrosonictech.com">info@electrosonictech.com</a>
          <a href="tel:+919990696931">+91 99906-96931</a>
          <div className="socials" aria-label="Social links">
            <span>f</span>
            <span>ig</span>
            <span>wa</span>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright © 2025 Electrosonic Technology . All Rights Reserved</p>
    </footer>
  );
}
