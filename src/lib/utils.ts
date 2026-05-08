import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { lazy } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function lazyImport(factory, name) {
  return lazy(() => 
    factory().then(module => ({ default: module[name] }))
  );
}