"use client";

import { Button, useOverlayState } from "@heroui/react";
import { Icon } from "@iconify/react";
import ResponsiveModal from "@/components/layout/responsive-modal";
import { SelectEnvironment, SelectProduct } from "@/lib/db/types";
import DeleteProductForm from "./form";

interface DeleteProductFormModalProps {
  namespace: SelectEnvironment["namespace"];
  productId: SelectProduct["id"];
}

export default function DeleteProductFormModal({
  namespace,
  productId,
}: DeleteProductFormModalProps) {
  const modalState = useOverlayState();

  return (
    <>
      <Button
        variant="ghost"
        className={`text-danger hover:bg-danger-soft`}
        onPress={modalState.open}
        isIconOnly
      >
        <Icon icon={`tabler:trash`} />
      </Button>
      <ResponsiveModal
        title="Delete Product?"
        description="This is irreversible and will delete the product and all of its associated translations, images and variations."
        modalState={modalState}
        isDestructive
      >
        <DeleteProductForm
          modalState={modalState}
          namespace={namespace}
          productId={productId}
        />
      </ResponsiveModal>
    </>
  );
}
