import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { lazy } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function lazyImport(factory: () => Promise<any>, name: string) {
  return lazy(() =>
    factory().then(module => ({ default: module[name] }))
  );
}

export function getDaysDifference(date1: Date, date2: Date) {
  const diffTime = Math.abs(Number(date2) - Number(date1)); // Difference in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}