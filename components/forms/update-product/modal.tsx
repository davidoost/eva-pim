"use client";

import { Button, useOverlayState } from "@heroui/react";
import ResponsiveModal from "@/components/layout/responsive-modal";
import UpdateProductForm from "./form";
import { SelectProduct } from "@/lib/db/types";
import { TaxCode } from "@/lib/core/types";
import { Icon } from "@iconify/react";

export default function UpdateProductFormModal({
  namespace,
  product,
  taxCodes,
}: {
  namespace: string;
  product: SelectProduct;
  taxCodes: TaxCode[];
}) {
  const modalState = useOverlayState();

  return (
    <>
      <Button variant="ghost" onPress={modalState.open} isIconOnly>
        <Icon icon="hugeicons:pencil-edit-02" />
      </Button>

      <ResponsiveModal
        title="Update Product"
        description="Edit the fields to update the product"
        modalState={modalState}
      >
        <UpdateProductForm
          namespace={namespace}
          product={product}
          taxCodes={taxCodes}
          modalState={modalState}
        />
      </ResponsiveModal>
    </>
  );
}
