"use client";
import { useCallback, useEffect, useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number = 500,
) => {
  let timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);
  const debouncedFn = useCallback(function (...args: Parameters<T>) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => fn(...args), delay);
  }, [fn, delay]);

  return debouncedFn;
};
