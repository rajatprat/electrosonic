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
    <form className={dark ? "inquiry-card dark-form" : "inquiry-card"}>
      <p className="eyebrow">Contact Us</p>
      <h2>Inquiry Form</h2>
      <div className="form-grid">
        <input placeholder="Your Name" aria-label="Your Name" />
        <input placeholder="Your Email" aria-label="Your Email" type="email" />
        <input placeholder="Phone Number" aria-label="Phone Number" />
        <input placeholder="Company" aria-label="Company" />
        <textarea placeholder="Message" aria-label="Message" rows={4} />
      </div>
      <button type="button">Ask a question</button>
    </form>
  );
}

export function BrandStrip() {
  return (
    <section className="brands section">
      <h2 className="center">Top Brands</h2>
      <div className="brand-strip">
        {brands.concat(brands).map((brand, index) => (
          <img key={`${brand}-${index}`} src={`/images/brands/${brand}`} alt="" width={138} height={78} />
        ))}
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
