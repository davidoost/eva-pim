"use client";

import {
  Modal,
  TextField,
  Label,
  Input,
  ErrorMessage,
  TextArea,
  Switch,
  toast,
  useOverlayState,
  UseOverlayStateReturn,
} from "@heroui/react";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "./action";
import CancelButton from "@/components/form-fields/cancel-button";
import SubmitButton from "@/components/form-fields/submit-button";
import ProductImageUploader, { ProductImageUploaderRef } from "@/components/form-fields/product-image-uploader";

interface CreateProductForm {
  modalState: UseOverlayStateReturn;
  namespace: string;
}

export default function CreateProductForm({
  modalState,
  namespace,
}: CreateProductForm) {
  const router = useRouter();
  const uploaderRef = useRef<ProductImageUploaderRef>(null);

  const formAction = createProduct.bind(null, namespace);

  const [state, dispatch, isLoading] = useActionState(formAction, {
    status: "default",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { imageUrls } = (await uploaderRef.current?.prepareSubmit()) ?? { imageUrls: [] };
    imageUrls.forEach((url) => formData.append("imageUrl", url));
    startTransition(() => dispatch(formData));
  }

  useEffect(() => {
    if (state.status === "success") {
      toast.success("Product created");
      modalState.close();
      router.refresh();
    }

    if (state.status === "error") {
      toast.danger("Error creating product");
    }
  }, [state]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <TextField
        variant="secondary"
        name="name"
        defaultValue={state.fieldValues?.name}
      >
        <Label>Name</Label>
        <Input placeholder="Skippy ball" />
        {state.fieldErrors?.name && (
          <ErrorMessage>{state.fieldErrors.name.errors[0]}</ErrorMessage>
        )}
      </TextField>

      <TextField
        variant="secondary"
        name="shortDescription"
        defaultValue={state.fieldValues?.shortDescription}
      >
        <Label>Short Description</Label>
        <Input placeholder="Big bulky boinker" />
        {state.fieldErrors?.shortDescription && (
          <ErrorMessage>
            {state.fieldErrors.shortDescription.errors[0]}
          </ErrorMessage>
        )}
      </TextField>

      <TextField
        variant="secondary"
        name="longDescription"
        defaultValue={state.fieldValues?.longDescription}
      >
        <Label>Long Description</Label>
        <TextArea rows={4} placeholder="Big bulky boinker but longer" />
        {state.fieldErrors?.longDescription && (
          <ErrorMessage>
            {state.fieldErrors.longDescription.errors[0]}
          </ErrorMessage>
        )}
      </TextField>

      <ProductImageUploader ref={uploaderRef} namespace={namespace} />

      <Switch name="published" defaultSelected={state.fieldValues?.published}>
        {({ isSelected }) => (
          <>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Label className="text-sm">Published</Label>
          </>
        )}
      </Switch>
      <div className="flex justify-end gap-2">
        <CancelButton onCancel={modalState.close} />
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
}
