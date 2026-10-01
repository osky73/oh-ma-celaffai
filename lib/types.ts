export type Category = "Slang" | "Creator" | "Meme e gesti" | "Moda e brand";

export const CATEGORIES: readonly Category[] = [
  "Slang",
  "Creator",
  "Meme e gesti",
  "Moda e brand",
] as const;

export interface Phenomenon {
  /** Slug usato anche per l'immagine: public/img/<slug>.webp */
  slug: string;
  /** Nome del fenomeno (uso interno e fallback grafico) */
  name: string;
  category: Category;
  /** Frase della domanda, scritta a mano (docs/CONTENUTI.md) */
  stem: string;
  /** 3 tag corretti, mostrati esattamente come scritti */
  correct: string[];
  /** 4 tag errati */
  wrong: string[];
  /** Commento unico «COS'È E PERCHÉ?» */
  spiegazione: string;
}
