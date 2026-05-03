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
