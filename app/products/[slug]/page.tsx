import { notFound } from "next/navigation";
import { Footer, Header, InquiryForm } from "../../components";
import { allProducts, getAsperaProduct } from "../../aspera-products";

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getAsperaProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Header />
      <section className="product-hero section">
        <div className="product-visual">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
          <div className="product-actions">
            <a className="text-button" href={product.pdf}>Download Brochure</a>
            <a className="outline-button" href="/contactus/">Product Enquiry</a>
          </div>
        </div>
      </section>

      <section className="section product-detail-body">
        <aside>
          <h2>Main Functions</h2>
          <ul>
            {product.functions.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Standard Accessories</h2>
          <ul>
            {product.standardAccessories.map((item) => <li key={item}>{item}</li>)}
          </ul>

          {product.optionalAccessories ? (
            <>
              <h2>Optional Accessories</h2>
              <ul>
                {product.optionalAccessories.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </>
          ) : null}
        </aside>

        <div className="spec-sections">
          {product.specs.map((section) => (
            <section className="spec-table" key={section.title}>
              <h2>{section.title}</h2>
              <table>
                <tbody>
                  {section.rows.map(([label, value]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      </section>

      <section className="inquiry section"><InquiryForm dark /></section>
      <Footer />
    </main>
  );
}
