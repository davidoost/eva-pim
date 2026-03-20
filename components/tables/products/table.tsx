"use client";

import DeleteProductFormModal from "@/components/forms/delete-product/modal";
import UpdateProductFormModal from "@/components/forms/update-product/modal";
import { SelectProduct } from "@/lib/db/types";
import { Badge, Chip, EmptyState, Pagination, Table } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import { useDashboard } from "@/app/[namespace]/dashboard/context";

function ProductStatus({ product }: { product: SelectProduct }) {
  if (!product.lastSyncedAt) {
    return <Chip variant="soft">Draft</Chip>;
  }
  if (product.lastUpdatedAt > product.lastSyncedAt) {
    return (
      <Chip variant="soft" color="warning">
        Changed
      </Chip>
    );
  }
  return (
    <Chip variant="soft" color="success">
      Up to date
    </Chip>
  );
}

export interface ProductsTableProps {
  namespace: string;
  products: SelectProduct[];
  pageSize?: number;
}

export function ProductsTable({
  products,
  pageSize = 10,
  namespace,
}: ProductsTableProps) {
  const { taxCodes } = useDashboard();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [products]);

  const totalPages = Math.ceil(products.length / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return products.slice(start, start + pageSize);
  }, [page, products, pageSize]);
  const start = products.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, products.length);

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content>
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Variations</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Updated</Table.Column>
            <Table.Column>Synced</Table.Column>
            <Table.Column />
          </Table.Header>
          <Table.Body
            renderEmptyState={() => (
              <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-4 py-6 text-center">
                <Icon
                  className="size-6 text-muted"
                  icon="hugeicons:package-search"
                />
                <span className="text-sm text-muted">No products found</span>
              </EmptyState>
            )}
          >
            {paginatedItems.map((product) => (
              <Table.Row key={product.id} className="group">
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>
                  {product.childrenVariationProperty ? (
                    product.children.length > 0 &&
                    product.children[0].childrenVariationProperty ? (
                      `${product.childrenVariationProperty} × ${product.children[0].childrenVariationProperty}`
                    ) : (
                      product.childrenVariationProperty
                    )
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <ProductStatus product={product} />
                </Table.Cell>
                <Table.Cell>
                  {product.lastUpdatedAt.toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>
                  {product.lastSyncedAt ? (
                    product.lastSyncedAt.toLocaleDateString()
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex">
                    <UpdateProductFormModal
                      namespace={namespace}
                      product={product}
                      taxCodes={taxCodes}
                    />
                    <DeleteProductFormModal
                      namespace={namespace}
                      productId={product.id}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
      {totalPages > 1 && (
        <Table.Footer>
          <Pagination size="sm">
            <Pagination.Summary>
              {start} to {end} of {products.length} results
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={page === 1}
                  onPress={() => setPage((p) => Math.max(1, p - 1))}
                >
                  <Pagination.PreviousIcon />
                  Prev
                </Pagination.Previous>
              </Pagination.Item>
              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link
                    isActive={p === page}
                    onPress={() => setPage(p)}
                  >
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={page === totalPages}
                  onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  Next
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </Table.Footer>
      )}
    </Table>
  );
}
