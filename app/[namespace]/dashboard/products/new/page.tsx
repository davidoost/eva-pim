import { core } from "@/lib/core";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import CreateProductWizard from "@/components/forms/create-product/wizard";

export default async function NewProductPage({
  params,
}: {
  params: Promise<{ namespace: string }>;
}) {
  const { namespace } = await params;
  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();
  const cookieStore = await cookies();
  const taxCodes = await env.listTaxCodes(cookieStore);
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <CreateProductWizard namespace={namespace} taxCodes={taxCodes} />
    </div>
  );
}
