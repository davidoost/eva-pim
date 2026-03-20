import { core } from "@/lib/core";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import UpdateProductWizard from "@/components/forms/update-product/wizard";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ namespace: string; id: string }>;
}) {
  const { namespace, id } = await params;
  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();
  const cookieStore = await cookies();
  const taxCodes = await env.listTaxCodes(cookieStore);
  const product = await env.getProduct(id);
  if (!product) notFound();
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <UpdateProductWizard
        namespace={namespace}
        product={product}
        taxCodes={taxCodes}
      />
    </div>
  );
}
