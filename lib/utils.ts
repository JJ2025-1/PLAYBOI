import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Concatenates and merges Tailwind CSS classes using clsx and tailwind-merge.
 * This ensures that conflicting Tailwind classes are handled correctly.
 * 
 * @param inputs - A list of class names or conditional class objects.
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
