import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using tailwind-merge and clsx.
 * This ensures that conflicting Tailwind classes are handled correctly.
 * 
 * @param inputs - A list of class names or conditional class objects.
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Commit 21: Minor improvement
// Commit 22: Minor improvement
// Commit 23: Minor improvement
// Commit 24: Minor improvement
// Commit 25: Minor improvement
// Commit 26: Minor improvement
// Commit 27: Minor improvement
// Commit 28: Minor improvement
// Commit 29: Minor improvement
// Commit 30: Minor improvement
// Commit 31: Minor improvement
// Commit 32: Minor improvement
// Commit 33: Minor improvement
// Commit 34: Minor improvement
// Commit 35: Minor improvement
// Commit 36: Minor improvement
// Commit 37: Minor improvement
