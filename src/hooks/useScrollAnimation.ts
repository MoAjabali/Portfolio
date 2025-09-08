
"use client";

import type { RefObject } from 'react';
import { useEffect, useState, useRef } from 'react';

interface UseScrollAnimationOptions extends IntersectionObserverInit {
  triggerOnce?: boolean; // Defaults to true
}

export function useScrollAnimation<T extends HTMLElement>(
  options?: UseScrollAnimationOptions
): [RefObject<T>, boolean] {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const triggerOnce = options?.triggerOnce === undefined ? true : options.triggerOnce;
  const rootMargin = options?.rootMargin || '0px';
  const threshold = options?.threshold || 0.1;
  const root = options?.root;

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              obs.unobserve(currentElement);
            }
          } else {
            if (!triggerOnce) {
              setIsVisible(false); // Re-hide if not triggerOnce and out of view
            }
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) { // Ensure currentElement exists before unobserving
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, triggerOnce, root, rootMargin, threshold]); // Dependencies array

  return [elementRef, isVisible];
}
