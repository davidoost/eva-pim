"use client";

import { Button, useOverlayState } from "@heroui/react";
import { Icon } from "@iconify/react";
import ResponsiveModal from "@/components/layout/responsive-modal";
import CreateProductForm from "./form";

export default function CreateProductFormModal({
  namespace,
}: {
  namespace: string;
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
        <CreateProductForm namespace={namespace} modalState={modalState} />
      </ResponsiveModal>
    </>
  );
}
