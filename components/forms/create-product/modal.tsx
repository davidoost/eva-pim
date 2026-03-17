"use client";

import { Button, useOverlayState } from "@heroui/react";
import { Icon } from "@iconify/react";
import ResponsiveModal from "@/components/layout/responsive-modal";
import CreateProductForm from "./form";
import { ProductProperty } from "@/lib/core/types";

export default function CreateProductFormModal({
  namespace,
  properties,
}: {
  namespace: string;
  properties: ProductProperty[];
}) {
  const modalState = useOverlayState();

  return (
    <>
      <Button variant="tertiary" onPress={modalState.open}>
        <Icon icon="hugeicons:plus-sign" />
        New Product
      </Button>

      <ResponsiveModal
        title="Create Product"
        description="Enter the fields to create a new product"
        modalState={modalState}
      >
        <CreateProductForm namespace={namespace} modalState={modalState} properties={properties} />
      </ResponsiveModal>
    </>
  );
}
