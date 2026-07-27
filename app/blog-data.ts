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
      "How instant push-to-talk communication helps warehouse and logistics teams reduce waiting, mispicks, and loading-bay delays.",
    image: "/images/sec2-rt-img-transparent.png",
    sections: [
      {
        heading: "Start with the workplace, not the model number",
        body:
          "A warehouse can look organised and still lose time in small gaps: a picker waiting for confirmation, a forklift operator stuck at a blind corner, or dispatch searching for one missing carton. Walkie-talkies help because they make quick questions truly quick. Someone asks, someone answers, and the job keeps moving.",
      },
      {
        heading: "Forklift and aisle coordination becomes simpler",
        body:
          "Forklifts create stop-start movement when teams cannot see around racks, cages, pallets, and loading areas. A short voice call can confirm right of way, warn others before entering a tight aisle, or flag a blocked route before it turns into a queue. Better communication does not replace safe procedures; it helps people follow them faster.",
      },
      {
        heading: "Loading bays are where minutes vanish",
        body:
          "Dispatch often slows down because one person is trying to find the last item, confirm paperwork, and manage a waiting vehicle. With radios, the work can be split instantly between goods-in, picking, dispatch, and lift operators. A simple communication structure can stop a five-minute problem from becoming a twenty-minute delay.",
      },
      {
        heading: "The right setup is more than the handset",
        body:
          "Warehouse teams usually need earpieces for noisy zones, speaker microphones for hands-busy roles, spare batteries, and multi-chargers for rotating shifts. The best radio kit is the one that survives the day-to-day rhythm of the site and is easy for every shift to use consistently.",
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
      "The avoidable buying mistakes that leave teams with poor range, weak batteries, noisy audio, or radios that cannot scale.",
    image: "/images/homepage-slider/slider-img2.jpg",
    sections: [
      {
        heading: "Choosing only by price",
        body:
          "The cheapest radio can become expensive when it fails during a busy shift. Range, battery life, build quality, warranty support, and accessory availability matter more than the first purchase price. A business radio should be judged by how reliably it performs across months of daily use.",
      },
      {
        heading: "Ignoring the real coverage area",
        body:
          "Many teams test radios in an open room and then discover dead spots in basements, service corridors, metal racks, or outdoor yards. Before buying, map the actual site: floors, walls, lifts, loading bays, stairwells, and the furthest point where the team must stay connected.",
      },
      {
        heading: "Skipping durability and accessories",
        body:
          "A radio is only useful if the full kit works. Dust resistance, water resistance, belt clips, earpieces, speaker microphones, spare batteries, and multi-chargers all decide how smoothly the fleet works in real life. Accessories should be planned with the radios, not treated as an afterthought.",
      },
      {
        heading: "Not thinking about future team size",
        body:
          "A small team may start with license-free radios, but growth can bring more channels, groups, repeaters, or PoC requirements. Choosing a system that can expand avoids replacing everything when the operation becomes larger or more complex.",
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
      "Why event teams depend on fast voice coordination across gates, stage areas, security posts, vendors, and operations desks.",
    image: "/images/product-banner.jpg",
    sections: [
      {
        heading: "Events need role-based communication",
        body:
          "Ordering one radio for every person is rarely the best plan. Event managers, gate leads, security posts, stage teams, parking leads, hospitality teams, and vendor coordinators need communication based on decision points. Radios should support the people who need to act quickly.",
      },
      {
        heading: "Channels keep the day calm",
        body:
          "A shared channel can become noisy during a busy event. Separating operations, security, parking, and production teams keeps routine updates away from urgent messages. Clear channel planning makes the radio system feel simple on the day.",
      },
      {
        heading: "Battery planning avoids mid-event silence",
        body:
          "Long events need spare batteries, multi-chargers, and a planned charging point. The radio fleet should be checked before gates open, with enough charged equipment for late shifts, backup staff, and emergency roles.",
      },
      {
        heading: "Range should be tested before the crowd arrives",
        body:
          "Stages, metal barriers, basements, temporary structures, and crowd density can affect coverage. A site walk before the event helps decide whether standard handhelds are enough or whether repeaters, higher-grade radios, or PoC devices are needed.",
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
