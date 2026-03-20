import { SelectProduct } from "@/lib/db/types";
import { Chip } from "@heroui/react";

export default function PublicationStatusChip({
  product,
}: {
  product: SelectProduct;
}) {
  if (!product.published) {
    return <Chip variant="soft">Concept</Chip>;
  }
  return (
    <Chip variant="soft" color="success">
      Published
    </Chip>
  );
}
