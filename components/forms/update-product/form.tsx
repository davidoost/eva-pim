"use client";

import {
  ComboBox,
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
import { SelectProduct } from "@/lib/db/types";
import { TaxCode } from "@/lib/core/types";
import { updateProductAction } from "@/app/[namespace]/dashboard/products/[id]/edit/actions";
import CancelButton from "@/components/form-fields/cancel-button";
import SubmitButton from "@/components/form-fields/submit-button";
import DeleteProductFormModal from "../delete-product/modal";
import VariationsEditor, {
  VariationLevel,
} from "@/components/forms/variations-editor";

interface UpdateProductFormProps {
  modalState: UseOverlayStateReturn;
  namespace: string;
  product: SelectProduct;
  taxCodes: TaxCode[];
}

export default function UpdateProductForm({
  modalState,
  namespace,
  product,
  taxCodes,
}: UpdateProductFormProps) {
  const router = useRouter();
  const uploaderRef = useRef<ProductImageUploaderRef>(null);
  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState(product.name);
  const [brand, setBrand] = useState(product.brand ?? "");
  const [taxCode, setTaxCode] = useState(product.taxCode ?? "");
  const [shortDescription, setShortDescription] = useState(
    product.shortDescription ?? "",
  );
  const [longDescription, setLongDescription] = useState(
    product.longDescription ?? "",
  );
  const [published, setPublished] = useState(product.published);

  const [variations, setVariations] = useState<VariationLevel[]>(() => {
    const levels: VariationLevel[] = [];
    if (product.children.length > 0) {
      levels.push({
        property: product.childrenVariationProperty ?? "",
        values: product.children.map((c) => c.variationValue ?? "").filter(Boolean),
      });
      if (product.children[0]?.children.length > 0) {
        levels.push({
          property: product.children[0].childrenVariationProperty ?? "",
          values: product.children[0].children
            .map((gc) => gc.variationValue ?? "")
            .filter(Boolean),
        });
      }
    }
    return levels;
  });

  const isLoading = isPending || isUploading;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsUploading(true);
    const { imageUrls = [], removedPaths = [] } =
      (await uploaderRef.current?.prepareSubmit()) ?? {};
    setIsUploading(false);

    const [primary, secondary] = variations;
    const validValues = primary?.values.filter((v) => v.trim()) ?? [];
    const validSecondaryValues = secondary?.values.filter((v) => v.trim()) ?? [];

    startTransition(async () => {
      const result = await updateProductAction(namespace, product.id, {
        name: name.trim(),
        brand: brand.trim() || undefined,
        taxCode: taxCode || undefined,
        shortDescription: shortDescription.trim() || undefined,
        longDescription: longDescription.trim() || undefined,
        published,
        imageUrls,
        removedImagePaths: removedPaths,
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
        toast.success("Product updated");
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
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Classic T-Shirt"
        />
      </TextField>

      <TextField variant="secondary">
        <Label>Brand</Label>
        <Input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="e.g. Acme"
        />
      </TextField>

      <ComboBox value={taxCode} onChange={(k) => setTaxCode(k as string)} fullWidth>
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

      <ProductImageUploader
        ref={uploaderRef}
        namespace={namespace}
        initialImages={product.images}
      />

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

      <div className="w-full flex justify-between gap-2">
        <DeleteProductFormModal namespace={namespace} productId={product.id} />
        <div className="flex gap-2">
          <CancelButton onCancel={modalState.close} />
          <SubmitButton isLoading={isLoading} />
        </div>
      </div>
    </form>
  );
}
