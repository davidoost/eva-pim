"use client";

import { Button, useOverlayState } from "@heroui/react";
import { Icon } from "@iconify/react";
import ResponsiveModal from "@/components/layout/responsive-modal";
import { SelectProduct } from "@/lib/db/types";
import DeleteProductForm from "./form";
import { useDashboard } from "@/app/[namespace]/dashboard/context";

interface DeleteProductFormModalProps {
  productId: SelectProduct["id"];
}

export default function DeleteProductFormModal({
  productId,
}: DeleteProductFormModalProps) {
  const modalState = useOverlayState();
  const { environment } = useDashboard();

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
          namespace={environment.namespace}
          productId={productId}
        />
      </ResponsiveModal>
    </>
  );
}
