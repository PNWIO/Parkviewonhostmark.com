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
