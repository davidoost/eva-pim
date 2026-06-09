"use client";

import { useEffect } from "react";
import { useRecentNamespaces } from "@/lib/hooks/use-recent-namespaces";

export function RecentNamespaceTracker({
  namespace,
  endpoint,
}: {
  namespace: string;
  endpoint: string;
}) {
  const { add } = useRecentNamespaces();

  useEffect(() => {
    add(namespace, endpoint);
  }, [namespace, endpoint, add]);

  return null;
}
