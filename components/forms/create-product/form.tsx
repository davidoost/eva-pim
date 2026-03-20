"use client";

import {
  ComboBox,
  ErrorMessage,
  Input,
  Label,
  ListBox,
  Switch,
  TextArea,
  TextField,
  UseOverlayStateReturn,
  toast,
} from "@heroui/react";
import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import ProductImageUploader, {
  ProductImageUploaderRef,
} from "@/components/form-fields/product-image-uploader";
import { TaxCode } from "@/lib/core/types";
import { createProductAction } from "@/app/[namespace]/dashboard/products/new/actions";
import CancelButton from "@/components/form-fields/cancel-button";
import SubmitButton from "@/components/form-fields/submit-button";
import VariationsEditor, {
  VariationLevel,
} from "@/components/forms/variations-editor";

interface CreateProductFormProps {
  modalState: UseOverlayStateReturn;
  namespace: string;
  taxCodes: TaxCode[];
}

export default function CreateProductForm({
  modalState,
  namespace,
  taxCodes,
}: CreateProductFormProps) {
  const router = useRouter();
  const uploaderRef = useRef<ProductImageUploaderRef>(null);
  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [taxCode, setTaxCode] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [variations, setVariations] = useState<VariationLevel[]>([]);
  const [nameError, setNameError] = useState<string | undefined>();

  const isLoading = isPending || isUploading;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }
    setNameError(undefined);
    setIsUploading(true);
    const { imageUrls = [] } =
      (await uploaderRef.current?.prepareSubmit()) ?? {};
    setIsUploading(false);

    const [primary, secondary] = variations;
    const validValues = primary?.values.filter((v) => v.trim()) ?? [];
    const validSecondaryValues =
      secondary?.values.filter((v) => v.trim()) ?? [];

    startTransition(async () => {
      const result = await createProductAction(namespace, {
        name: name.trim(),
        brand: brand.trim() || undefined,
        taxCode: taxCode || undefined,
        shortDescription: shortDescription.trim() || undefined,
        longDescription: longDescription.trim() || undefined,
        published,
        imageUrls,
        variants:
          primary && validValues.length > 0
            ? { property: primary.property.trim(), values: validValues }
            : undefined,
        secondaryVariants:
          secondary && validSecondaryValues.length > 0
            ? {
                property: secondary.property.trim(),
                values: validSecondaryValues,
              }
            : undefined,
      });
      if (result.success) {
        toast.success("Product created");
        modalState.close();
        router.refresh();
      } else {
        toast.danger(result.error ?? "Something went wrong");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <TextField variant="secondary" isRequired>
        <Label>Name</Label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(undefined);
          }}
          placeholder="e.g. Classic T-Shirt"
        />
        {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
      </TextField>

      <TextField variant="secondary">
        <Label>Brand</Label>
        <Input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="e.g. Acme"
        />
      </TextField>

      <ComboBox
        value={taxCode}
        onChange={(k) => setTaxCode(k as string)}
        fullWidth
      >
        <Label>Tax Code</Label>
        <ComboBox.InputGroup>
          <Input placeholder="Search tax code..." variant="secondary" />
          <ComboBox.Trigger />
        </ComboBox.InputGroup>
        <ComboBox.Popover>
          <ListBox>
            {taxCodes.map((t) => (
              <ListBox.Item key={t.Name} id={t.Name} textValue={t.Name}>
                {t.Name}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </ComboBox.Popover>
      </ComboBox>

      <TextField variant="secondary">
        <Label>Short Description</Label>
        <Input
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Brief summary"
        />
      </TextField>

      <TextField variant="secondary">
        <Label>Long Description</Label>
        <TextArea
          rows={3}
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          placeholder="Full product description"
        />
      </TextField>

      <ProductImageUploader ref={uploaderRef} namespace={namespace} />

      <Switch isSelected={published} onChange={(v) => setPublished(v)}>
        {() => (
          <>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Label className="text-sm">Published</Label>
          </>
        )}
      </Switch>

      <VariationsEditor variations={variations} onChange={setVariations} />

      <div className="flex justify-end gap-2">
        <CancelButton onCancel={modalState.close} />
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
}
