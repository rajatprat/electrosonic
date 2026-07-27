import { Footer, Header, InquiryForm, PageBanner } from "../components";
import { allProducts } from "../aspera-products";
import { ProductCatalog } from "./ProductCatalog";

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <PageBanner title="Products" image="/images/product-banner.jpg" />

      <ProductCatalog products={allProducts} />

      <section className="inquiry section"><InquiryForm dark /></section>
      <Footer />
    </main>
  );
}
