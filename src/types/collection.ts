export interface Gemstone {
  id: number;
  name: string;
  image: string;
  meaning: string;
}

export interface Tree {
  id: number;
  name: string;
  image: string;
  numerology: string;
  price: string; // 👈 ADD THIS
  buyLink?: string;
}

export interface Bracelet {
  id: number;
  name: string;
  image: string;
  numerology: string;
  price: string; // 👈 ADD THIS
  buyLink?: string;
}

export type CollectionCategory = "gemstones" | "bracelets" | "trees";
