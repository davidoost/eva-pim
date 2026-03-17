"use client";

import { useActionState, useEffect } from "react";
import SubmitButton from "@/components/form-fields/submit-button";
import { toast, UseOverlayStateReturn } from "@heroui/react";
import { useRouter } from "next/navigation";
import { SelectEnvironment, SelectProduct } from "@/lib/db/types";
import { deleteProduct } from "./action";

interface DeleteProductFormProps {
  namespace: SelectEnvironment["namespace"];
  productId: SelectProduct["id"];
  modalState: UseOverlayStateReturn;
}

export default function DeleteProductForm({
  namespace,
  productId,
  modalState,
}: DeleteProductFormProps) {
  const router = useRouter();
  const formAction = deleteProduct.bind(null, namespace, productId);

  const [state, action, isLoading] = useActionState(formAction, "default");

  useEffect(() => {
    if (state === "success") {
      toast.success("Product deleted");

      modalState.close();
      router.refresh();
    }

    if (state === "error") {
      toast.danger("Error deleting product");
    }
  }, [state]);

  return (
    <form action={action}>
      <div className="flex justify-end gap-2">
        <SubmitButton isLoading={isLoading} label={"Delete"} variant="danger" />
      </div>
    </form>
  );
}
