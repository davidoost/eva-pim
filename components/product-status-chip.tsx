import { SelectProduct } from "@/lib/db/types";
import { Chip } from "@heroui/react";

export default function ProductStatusChip({
  product,
}: {
  product: SelectProduct;
}) {
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
