import en from "./en";
import vi from "./vi";
import type { Dictionary } from "./en";

export type Locale = "en" | "vi";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  vi,
};

export type { Dictionary };
export { en, vi };
