"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "eva-recent-namespaces";
const MAX_ENTRIES = 5;

export type RecentNamespace = { namespace: string; endpoint: string };

export function useRecentNamespaces() {
  const [namespaces, setNamespaces] = useState<RecentNamespace[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setNamespaces(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  const add = useCallback((namespace: string, endpoint: string) => {
    setNamespaces((prev) => {
      const next = [
        { namespace, endpoint },
        ...prev.filter((n) => n.namespace !== namespace),
      ].slice(0, MAX_ENTRIES);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore quota errors
      }
      return next;
    });
  }, []);

  const remove = useCallback((namespace: string) => {
    setNamespaces((prev) => {
      const next = prev.filter((n) => n.namespace !== namespace);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  return { namespaces, add, remove };
}
