"use client";

import { Button, useOverlayState } from "@heroui/react";
import ResponsiveModal from "@/components/layout/responsive-modal";
import UpdateProductForm from "./form";
import { SelectProduct } from "@/lib/db/types";
import { ProductProperty, TaxCode } from "@/lib/core/types";
import { Icon } from "@iconify/react";

export default function UpdateProductFormModal({
  product,
  taxCodes,
  productProperties,
}: {
  product: SelectProduct;
  taxCodes: TaxCode[];
  productProperties: ProductProperty[];
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
          product={product}
          taxCodes={taxCodes}
          modalState={modalState}
          productProperties={productProperties}
        />
      </ResponsiveModal>
    </>
  );
}
