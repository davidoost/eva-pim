import { core } from "@/lib/core";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { RecentNamespaceTracker } from "@/components/recent-namespace-tracker";

export default async function NamespaceLayout({
  params,
  children,
}: {
  params: Promise<{ namespace: string }>;
  children: ReactNode;
}) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  return (
    <>
      <RecentNamespaceTracker namespace={namespace} endpoint={env.data.endpoint} />
      {children}
    </>
  );
}
