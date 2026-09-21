import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSqFt(n: number) {
  return n.toLocaleString("en-US") + " SF";
}

export function formatAcres(n: number) {
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "") + " ac";
}

export function asset(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const rel = path.replace(/^\//, "");
  return base.endsWith("/") ? base + rel : `${base}/${rel}`;
}
