import { useEffect } from 'react';
import { homeTitle, pageTitle } from '@/lib/profile';

// Keeps the tab title right after client-side navigation; prerendered pages already have it.
// Without a title it restores the home page's.
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? pageTitle(title) : homeTitle;
  }, [title]);
}
