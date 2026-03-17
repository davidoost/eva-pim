"use client";

import {
  TextField,
  Label,
  Input,
  ErrorMessage,
  TextArea,
  Switch,
  toast,
  UseOverlayStateReturn,
} from "@heroui/react";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { updateProduct } from "./action";
import CancelButton from "@/components/form-fields/cancel-button";
import SubmitButton from "@/components/form-fields/submit-button";
import ProductImageUploader, {
  ProductImageUploaderRef,
} from "@/components/form-fields/product-image-uploader";
import VariationsField from "@/components/form-fields/variations-field";
import { SelectProduct } from "@/lib/db/types";
import { ProductProperty } from "@/lib/core/types";
import DeleteProductFormModal from "../delete-product/modal";

interface UpdateProductFormProps {
  modalState: UseOverlayStateReturn;
  namespace: string;
  product: SelectProduct;
  properties: ProductProperty[];
}

export default function UpdateProductForm({
  modalState,
  namespace,
  product,
  properties,
}: UpdateProductFormProps) {
  const router = useRouter();
  const uploaderRef = useRef<ProductImageUploaderRef>(null);

  const formAction = updateProduct.bind(null, namespace, product.id);

  const [state, dispatch, isLoading] = useActionState(formAction, {
    status: "default",
    fieldValues: {
      name: product.name,
      shortDescription: product.shortDescription ?? undefined,
      longDescription: product.longDescription ?? undefined,
      published: product.published,
    },
  });

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { imageUrls, removedPaths } =
      (await uploaderRef.current?.prepareSubmit()) ?? {
        imageUrls: [],
        removedPaths: [],
      };
    imageUrls.forEach((url) => formData.append("imageUrl", url));
    removedPaths.forEach((path) => formData.append("removedImagePath", path));
    startTransition(() => dispatch(formData));
  }

  useEffect(() => {
    if (state.status === "success") {
      toast.success("Product updated");
      modalState.close();
      router.refresh();
    }

    if (state.status === "error") {
      toast.danger("Error updating product");
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

      <ProductImageUploader
        ref={uploaderRef}
        namespace={namespace}
        initialImages={product.images}
      />

      <VariationsField properties={properties} initialVariations={product.variations} />

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
      <div className="w-full flex justify-end gap-2">
        <CancelButton onCancel={modalState.close} />
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
}
