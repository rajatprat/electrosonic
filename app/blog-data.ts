export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  contentHtml?: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choose-walkie-talkie-for-team",
    title: "Walkie-Talkies for Warehouses and Logistics: Faster Communication, Smoother Movement",
    category: "Buying Guide",
    date: "24 Jul 2026",
    readTime: "5 min read",
    excerpt:
      "A practical framework for choosing radios by range, battery, audio, accessories, and site conditions.",
    image: "/images/sec2-rt-img-transparent.png",
    sections: [
      {
        heading: "Start with the workplace, not the model number",
        body:
          "The right radio depends on where your team works. A hotel floor, warehouse, outdoor event, shopping mall, security route, and construction site all need different coverage, audio, and battery decisions.",
      },
      {
        heading: "Check licensing and channels early",
        body:
          "License-free PMR446 radios are convenient for many teams, while larger or more controlled operations may need digital radios, repeaters, or PoC devices. Choosing this early avoids buying radios that cannot scale.",
      },
      {
        heading: "Match accessories to the job",
        body:
          "Earpieces, speaker microphones, spare batteries, multi-chargers, belt clips, and programming cables often matter as much as the radio itself. A good kit reduces downtime during busy shifts.",
      },
    ],
  },
  {
    slug: "analog-to-digital-radio-upgrade",
    title: "Common Mistakes Businesses Make While Buying Walkie-Talkies",
    category: "Technology",
    date: "24 Jul 2026",
    readTime: "4 min read",
    excerpt:
      "Digital radio is not only about clearer voice. It can improve privacy, fleet control, battery life, and future expansion.",
    image: "/images/homepage-slider/slider-img2.jpg",
    sections: [
      {
        heading: "Digital improves control",
        body:
          "Digital systems can support individual calls, group calls, emergency functions, remote stun or kill, text/status messages, and better fleet visibility depending on the radio family.",
      },
      {
        heading: "Audio and battery gains matter",
        body:
          "Modern digital radios often include stronger noise handling and power management. For security teams, operations teams, and loud workplaces, the difference is practical rather than cosmetic.",
      },
      {
        heading: "Migration can be gradual",
        body:
          "Many products support mixed analog and digital operation, which lets teams migrate in phases while keeping existing radios useful during the transition.",
      },
    ],
  },
  {
    slug: "poc-lte-repeaters-handhelds-explained",
    title: "Walkie-Talkies for Events: The Secret Behind Smooth Event Coordination",
    category: "Systems",
    date: "24 Jul 2026",
    readTime: "6 min read",
    excerpt:
      "Understand where handheld radios, repeater-backed networks, mobile units, and LTE push-to-talk devices fit best.",
    image: "/images/product-banner.jpg",
    sections: [
      {
        heading: "Handheld radios are best for direct team coordination",
        body:
          "For hotels, restaurants, retail, events, and site teams, handheld walkie talkies are simple, fast, and easy to train. They work especially well when the team is inside a defined operating area.",
      },
      {
        heading: "Repeaters extend coverage",
        body:
          "Repeaters help when teams need communication across larger buildings, industrial areas, basements, multi-floor properties, or spread-out campuses.",
      },
      {
        heading: "PoC and LTE work across distance",
        body:
          "Push-to-talk over cellular is useful when team members are spread across cities or need wide-area coverage without building radio infrastructure.",
      },
    ],
  },
  {
    slug: "license-free-pmr446-india",
    title: "License-Free PMR446 Radios for Hotels, Malls, and Schools",
    category: "Compliance",
    date: "23 Jul 2026",
    readTime: "3 min read",
    excerpt:
      "Where license-free radios make sense for malls, hotels, events, restaurants, schools, and small operations teams.",
    image: "/images/products/aspera/v9.png",
    sections: [
      {
        heading: "Why PMR446 is popular",
        body:
          "PMR446 radios are easy to deploy because they are designed for license-free short-range communication. They are a strong fit for many teams that need quick coordination.",
      },
      {
        heading: "Know the limits",
        body:
          "Range depends on walls, floors, metal racks, basements, and outdoor obstructions. For larger sites, teams may need a stronger digital solution or repeater-backed system.",
      },
      {
        heading: "Choose a complete kit",
        body:
          "Battery capacity, charging setup, spare accessories, and audio clarity should guide the final choice as much as brand or model.",
      },
    ],
  },
  {
    slug: "repeaters-for-large-sites",
    title: "When Your Site Needs a Repeater Instead of More Handsets",
    category: "Coverage",
    date: "23 Jul 2026",
    readTime: "4 min read",
    excerpt:
      "Repeater-backed systems help teams stay connected across basements, towers, warehouses, and large campuses.",
    image: "/images/products/motorola/slr5300.png",
    sections: [
      {
        heading: "More radios do not always solve range",
        body:
          "If the signal cannot travel through floors, metal racks, or wide industrial areas, adding more handsets may not improve coverage. A repeater can extend and stabilize the network.",
      },
      {
        heading: "Use repeaters for fixed operating sites",
        body:
          "Factories, logistics hubs, hospitals, campuses, and multi-floor properties often benefit from a planned repeater setup instead of ad hoc handheld-only communication.",
      },
      {
        heading: "Plan before deployment",
        body:
          "Coverage checks, antenna placement, channel planning, and future expansion should be discussed before choosing a repeater model.",
      },
    ],
  },
  {
    slug: "aviation-radio-basics",
    title: "Aviation Radios: What Ground Teams Should Check Before Buying",
    category: "Airband",
    date: "22 Jul 2026",
    readTime: "4 min read",
    excerpt:
      "A quick guide to portable and panel-mount VHF air band radios for ground teams and aviation operators.",
    image: "/images/brands/icom.png",
    sections: [
      {
        heading: "Airband radios serve a different job",
        body:
          "VHF air band radios are built for aviation communication, so channel spacing, certification, memory, audio clarity, and power options are key buying factors.",
      },
      {
        heading: "Portable versus panel mount",
        body:
          "Portable radios are flexible for ground teams and backup communication. Panel-mount radios are built into aircraft or fixed installations and need a more formal setup.",
      },
      {
        heading: "Accessories matter",
        body:
          "Battery packs, chargers, headset adapters, speaker microphones, and programming cables should be planned with the radio purchase.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

type WordPressPost = {
  slug: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  date?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
    }>;
    "wp:term"?: Array<Array<{
      name?: string;
      taxonomy?: string;
    }>>;
  };
};

const wordpressApiBase = process.env.WORDPRESS_API_BASE || process.env.NEXT_PUBLIC_WORDPRESS_API_BASE || "";

function stripHtml(value = "") {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;|&#8212;/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value?: string) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getCategory(post: WordPressPost) {
  const terms = post._embedded?.["wp:term"]?.flat() || [];
  return terms.find((term) => term.taxonomy === "category")?.name || "Journal";
}

function getFeaturedImage(post: WordPressPost) {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/sec2-rt-img-transparent.png";
}

function estimateReadTime(content: string) {
  const words = stripHtml(content).split(" ").filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function mapWordPressPost(post: WordPressPost): BlogPost {
  const contentHtml = post.content?.rendered || "";
  const title = stripHtml(post.title?.rendered);

  return {
    slug: post.slug,
    title,
    category: getCategory(post),
    date: formatDate(post.date),
    readTime: estimateReadTime(contentHtml),
    excerpt: stripHtml(post.excerpt?.rendered).slice(0, 180),
    image: getFeaturedImage(post),
    contentHtml,
    sections: [],
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!wordpressApiBase) {
    return blogPosts;
  }

  try {
    const separator = wordpressApiBase.includes("?") ? "&" : "?";
    const response = await fetch(`${wordpressApiBase}${separator}_embed=1&per_page=12`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return blogPosts;
    }

    const posts = (await response.json()) as WordPressPost[];
    return posts.length ? posts.map(mapWordPressPost) : blogPosts;
  } catch {
    return blogPosts;
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
