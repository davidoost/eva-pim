import { core } from "@/lib/core";
import { notFound, redirect } from "next/navigation";

export default async function DashboardHomePage({
  params,
}: {
  params: Promise<{ namespace: string }>;
}) {
  return <p>xd we made it</p>;
}
