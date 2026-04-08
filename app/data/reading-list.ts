export interface ReadingItem {
  title: string;
  author: string;
  category: string;
  note: string;
  rating: number; // 1-5
  link?: string;
  coverColor: string; // gradient start color for visual variety
}

export const categories = [
  "All",
  "Marketing",
  "Business",
  "Technology",
  "Personal Growth",
];

export const readingList: ReadingItem[] = [
  {
    title: "Obviously Awesome",
    author: "April Dunford",
    category: "Marketing",
    note: "The definitive guide to product positioning. I revisit this every time I start a new positioning exercise. Dunford's framework is simple yet powerful.",
    rating: 5,
    link: "https://www.aprildunford.com/obviously-awesome",
    coverColor: "#0d9488",
  },
  {
    title: "Crossing the Chasm",
    author: "Geoffrey Moore",
    category: "Marketing",
    note: "A classic that's still relevant. Understanding the technology adoption lifecycle is fundamental to any product launch strategy.",
    rating: 5,
    link: "#",
    coverColor: "#06b6d4",
  },
  {
    title: "Made to Stick",
    author: "Chip & Dan Heath",
    category: "Marketing",
    note: "The SUCCESs framework (Simple, Unexpected, Concrete, Credible, Emotional, Stories) has influenced how I approach every piece of messaging.",
    rating: 4,
    link: "#",
    coverColor: "#f59e0b",
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "Business",
    note: "Raw, honest advice about building and running a company. The chapter on wartime vs peacetime CEO is particularly insightful.",
    rating: 5,
    link: "#",
    coverColor: "#ef4444",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    note: "Thiel's contrarian thinking on competition, monopolies, and innovation. Every product marketer should understand why being different beats being better.",
    rating: 4,
    link: "#",
    coverColor: "#10b981",
  },
  {
    title: "Build",
    author: "Tony Fadell",
    category: "Business",
    note: "Incredible insights from the creator of the iPod and Nest. The sections on product-market fit and launching v1 are gold.",
    rating: 4,
    link: "#",
    coverColor: "#8b5cf6",
  },
  {
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    category: "Technology",
    note: "Understanding disruption theory is essential for product marketers working in competitive markets. This book changed how I think about market dynamics.",
    rating: 5,
    link: "#",
    coverColor: "#ec4899",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Personal Growth",
    note: "Understanding System 1 and System 2 thinking has made me a better marketer. Most purchasing decisions happen in System 1.",
    rating: 5,
    link: "#",
    coverColor: "#14b8a6",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Personal Growth",
    note: "Not just a self-help book—the habit loop framework is directly applicable to building user engagement and product adoption strategies.",
    rating: 4,
    link: "#",
    coverColor: "#f97316",
  },
  {
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    category: "Technology",
    note: "Essential reading for understanding AI's impact on business and marketing. Provides great context for how AI will reshape go-to-market strategies.",
    rating: 4,
    link: "#",
    coverColor: "#3b82f6",
  },
];
