"use client";

import { useMemo, useState } from "react";
import type { AsperaProduct } from "../aspera-products";

type CatalogProduct = AsperaProduct & {
  brand: string;
  technology: string;
  price: number;
};

const priceBySlug: Record<string, number> = {
  "kenwood-tk-3501": 11000,
  "vertel-team-talky": 4500,
  "aspera-v7": 8500,
  "aspera-victor": 6500,
  "aspera-v9": 9500,
  "aspera-vista": 12500,
  "aspera-ad90": 14500,
  "aspera-ip-360s": 22000,
  "kenwood-nx-1200-1300": 28000,
  "kenwood-nx-1700-1800": 42000,
  "kenwood-nxr-1700-1800": 90000,
  "motorola-r2": 24000,
  "motorola-r5": 52000,
  "motorola-r7": 85000,
  "motorola-tlk-150": 68000,
  "motorola-slr5300": 180000,
  "motorola-xir-p8600ex": 125000,
  "motorola-xir-m8660-m8668": 72000,
  "icom-ic-a25n-a25c": 65000,
  "icom-ic-a220": 150000,
};

function brandFromSlug(slug: string) {
  if (slug.startsWith("motorola")) return "Motorola";
  if (slug.startsWith("kenwood")) return "Kenwood";
  if (slug.startsWith("icom")) return "Icom";
  if (slug.startsWith("vertel")) return "Vertel";
  return "Aspera";
}

function technologyFor(product: AsperaProduct) {
  const text = `${product.name} ${product.category} ${product.summary}`.toLowerCase();
  if (text.includes("repeater")) return "Repeater";
  if (text.includes("air band") || text.includes("aircraft")) return "Airband";
  if (text.includes("poc") || text.includes("wave") || text.includes("lte")) return "PoC / LTE";
  if (text.includes("mobile")) return "Mobile Radio";
  if (text.includes("digital") || text.includes("dmr") || text.includes("nxdn")) return "Digital Radio";
  if (text.includes("analog") || text.includes("analogue")) return "Analog Radio";
  return "License Free Radio";
}

export function ProductCatalog({ products }: { products: AsperaProduct[] }) {
  const catalog = useMemo<CatalogProduct[]>(
    () =>
      products.map((product) => ({
        ...product,
        brand: brandFromSlug(product.slug),
        technology: technologyFor(product),
        price: priceBySlug[product.slug] ?? 25000,
      })),
    [products],
  );

  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [technology, setTechnology] = useState("All");
  const [sort, setSort] = useState("featured");
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);

  function goToPage(nextPage: number) {
    setPage(nextPage);
    window.requestAnimationFrame(() => {
      document.getElementById("product-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  const brands = Array.from(new Set(catalog.map((product) => product.brand))).sort();
  const technologies = ["All", ...Array.from(new Set(catalog.map((product) => product.technology))).sort()];

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    const matches = catalog.filter((product) => {
      const haystack = `${product.name} ${product.model} ${product.category} ${product.summary}`.toLowerCase();
      return (
        (!needle || haystack.includes(needle)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        (technology === "All" || product.technology === technology)
      );
    });

    return matches.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      return products.findIndex((product) => product.slug === a.slug) - products.findIndex((product) => product.slug === b.slug);
    });
  }, [catalog, products, search, selectedBrands, sort, technology]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  function resetFilters() {
    setSearch("");
    setSelectedBrands([]);
    setTechnology("All");
    setSort("featured");
    setPerPage(12);
    setPage(1);
  }

  return (
    <section className="shop section">
      <aside className="filters">
        <h3>Find radios</h3>
        <div className="search-row">
          <input
            placeholder="Search for products"
            aria-label="Search for products"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          />
          <button type="button" onClick={() => setPage(1)}>Search</button>
        </div>

        <h3>Brands</h3>
        <div className="checkbox-list" aria-label="Brand filters">
          {brands.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(item)}
                onChange={(event) => {
                  setSelectedBrands((current) =>
                    event.target.checked
                      ? [...current, item]
                      : current.filter((brandName) => brandName !== item),
                  );
                  setPage(1);
                }}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>

        <h3>Radio type</h3>
        <select aria-label="Technology" value={technology} onChange={(event) => { setTechnology(event.target.value); setPage(1); }}>
          {technologies.map((item) => <option key={item}>{item}</option>)}
        </select>

        <button type="button" className="reset-button" onClick={resetFilters}>Clear selection</button>
      </aside>

      <div className="listing" id="product-results">
        <div className="listing-top">
          <p>
            Showing <strong>{visible.length}</strong> of <strong>{filtered.length}</strong> results
          </p>
          <div className="listing-controls">
            <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="name">Name A-Z</option>
            </select>
            <select aria-label="Products per page" value={perPage} onChange={(event) => { setPerPage(Number(event.target.value)); setPage(1); }}>
              <option value={8}>8 per page</option>
              <option value={12}>12 per page</option>
              <option value={20}>20 per page</option>
            </select>
          </div>
        </div>

        {visible.length ? (
          <div className="catalog-grid">
            {visible.map((item) => (
              <article className="catalog-card" key={item.slug}>
                <a href={`/products/${item.slug}/`}>
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </a>
                <p>{item.brand} · {item.technology}</p>
                <a className="catalog-action" href={`/products/${item.slug}/`}>View Specs</a>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <h3>No products found</h3>
            <p>Try a different brand, category, technology, or price range.</p>
            <button type="button" onClick={resetFilters}>Clear filters</button>
          </div>
        )}

        <div className="pagination">
          <button type="button" disabled={currentPage === 1} onClick={() => goToPage(Math.max(1, currentPage - 1))}>‹</button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => (
            <button
              type="button"
              key={item}
              className={item === currentPage ? "active" : ""}
              onClick={() => goToPage(item)}
            >
              {item}
            </button>
          ))}
          <button type="button" disabled={currentPage === pageCount} onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}>›</button>
        </div>
      </div>
    </section>
  );
}
