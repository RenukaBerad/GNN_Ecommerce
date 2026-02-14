export interface Gemstone {
  id: number;
  name: string;
  image: string;
  meaning: string;
}

export interface Tree {
  _id?: string;
  id: string | number;
  name: string;
  image: string;
  numerology: string;
  price: string;
  buyLink?: string;
}

export interface Bracelet {
  _id?: string;
  id: string | number;
  name: string;
  image: string;
  numerology: string;
  price: string;
  buyLink?: string;
}

export type CollectionCategory = "gemstones" | "bracelets" | "trees";
