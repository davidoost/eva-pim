import DashboardPageHeader from "@/components/layout/dashboard-page-header";
import { SearchableProductsTable } from "@/components/tables/products";
import { core } from "@/lib/core";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

interface ProductsPageProps {
  params: Promise<{ namespace: string }>;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  const [products, properties] = await Promise.all([
    env.listProducts(),
    env.listProductProperties(await cookies()),
  ]);

  return (
    <>
      <DashboardPageHeader
        title="Products"
        description="Manage your product catalog"
      />

      <SearchableProductsTable products={products} namespace={namespace} properties={properties} />
    </>
  );
}
