import { Footer, Header, InquiryForm, PageBanner } from "../components";
import { allProducts } from "../aspera-products";
import { ProductCatalog } from "./ProductCatalog";

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <PageBanner title="Products" image="/images/product-banner.jpg" />

      <section className="product-page-intro section">
        <div>
          <p className="eyebrow">Product catalog</p>
          <h2>Compare radios, repeaters, PoC devices, airband systems, and accessories.</h2>
        </div>
        <p>
          Browse the current Electrosonic catalog by brand and radio type. Each product page keeps important datasheet
          details together so your team can shortlist options faster.
        </p>
      </section>

      <ProductCatalog products={allProducts} />

      <section className="inquiry section"><InquiryForm dark /></section>
      <Footer />
    </main>
  );
}
