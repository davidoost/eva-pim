"use client";

import { useState, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  ComboBox,
  Description,
  ErrorMessage,
  Input,
  Label,
  ListBox,
  Switch,
  TextArea,
  TextField,
  toast,
  cn,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import ProductImageUploader, {
  ProductImageUploaderRef,
} from "@/components/form-fields/product-image-uploader";
import { TaxCode } from "@/lib/core/types";
import { createProductAction } from "@/app/[namespace]/dashboard/products/new/actions";

interface CreateProductWizardProps {
  namespace: string;
  taxCodes: TaxCode[];
}

type FormState = {
  name: string;
  customId: string;
  brand: string;
  taxCode: string;
  shortDescription: string;
  longDescription: string;
  published: boolean;
  imageUrls: string[];
  hasVariants: boolean;
  variationProperty: string;
  variantValues: string[];
  hasSecondaryVariant: boolean;
  secondaryVariationProperty: string;
  secondaryVariantValues: string[];
};

const STEPS = [
  { label: "Product Info" },
  { label: "Images" },
  { label: "Variants" },
];

export default function CreateProductWizard({
  namespace,
  taxCodes,
}: CreateProductWizardProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = useState(false);
  const uploaderRef = useRef<ProductImageUploaderRef>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    customId: "",
    brand: "",
    taxCode: "",
    shortDescription: "",
    longDescription: "",
    published: true,
    imageUrls: [],
    hasVariants: false,
    variationProperty: "",
    variantValues: [""],
    hasSecondaryVariant: false,
    secondaryVariationProperty: "",
    secondaryVariantValues: [""],
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateStep(s: number): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (s === 0 && !form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (s === 2 && form.hasVariants) {
      if (!form.variationProperty.trim())
        newErrors.variationProperty = "Variation type is required";
      if (!form.variantValues.some((v) => v.trim()))
        newErrors.variantValues = "Add at least one value";
      if (form.hasSecondaryVariant) {
        if (!form.secondaryVariationProperty.trim())
          newErrors.secondaryVariationProperty = "Variation type is required";
        if (!form.secondaryVariantValues.some((v) => v.trim()))
          newErrors.secondaryVariantValues = "Add at least one value";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleNext() {
    if (!validateStep(step)) return;
    if (step === 1) {
      setIsUploading(true);
      const result = await uploaderRef.current?.prepareSubmit();
      setIsUploading(false);
      if (result?.imageUrls?.length) update("imageUrls", result.imageUrls);
    }
    setStep((s) => s + 1);
  }

  function handleSubmit() {
    if (!validateStep(step)) return;
    const validValues = form.variantValues.filter((v) => v.trim());
    const validSecondaryValues = form.secondaryVariantValues.filter((v) => v.trim());
    startTransition(async () => {
      const result = await createProductAction(namespace, {
        name: form.name.trim(),
        brand: form.brand.trim() || undefined,
        taxCode: form.taxCode || undefined,
        shortDescription: form.shortDescription.trim() || undefined,
        longDescription: form.longDescription.trim() || undefined,
        published: form.published,
        imageUrls: form.imageUrls,
        variants:
          form.hasVariants && validValues.length > 0
            ? { property: form.variationProperty.trim(), values: validValues }
            : undefined,
        secondaryVariants:
          form.hasVariants && form.hasSecondaryVariant && validSecondaryValues.length > 0
            ? { property: form.secondaryVariationProperty.trim(), values: validSecondaryValues }
            : undefined,
      });
      if (result.success) {
        toast.success("Product created");
        router.push(`/${namespace}/dashboard/products`);
      } else {
        toast.danger(result.error ?? "Something went wrong");
      }
    });
  }

  const isLoading = isPending || isUploading;

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          isIconOnly
          onPress={() => router.push(`/${namespace}/dashboard/products`)}
        >
          <Icon icon="hugeicons:arrow-left-01" />
        </Button>
        <h1 className="text-xl font-semibold">New Product</h1>
      </div>

      {/* Step indicator */}
      <div className="flex items-center">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-2 shrink-0">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
                  i < step
                    ? "bg-primary text-primary-foreground"
                    : i === step
                      ? "ring-2 ring-primary text-primary bg-background"
                      : "bg-surface-secondary text-muted",
                )}
              >
                {i < step ? (
                  <Icon
                    icon="hugeicons:checkmark-circle-01"
                    className="size-4"
                  />
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={cn(
                  "text-sm hidden sm:block",
                  i === step ? "font-medium" : "text-muted",
                )}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-px mx-3",
                  i < step ? "bg-primary" : "bg-separator",
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Product Info */}
      {step === 0 && (
        <div className="flex flex-col gap-3">
          <TextField variant="secondary" isRequired>
            <Label>Name</Label>
            <Input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Classic T-Shirt"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </TextField>

          <TextField variant="secondary">
            <Label>Custom ID</Label>
            <Input
              value={form.customId}
              onChange={(e) => update("customId", e.target.value)}
              placeholder="e.g. shirt-001"
            />
            <Description className="text-xs text-muted">
              Optional. Sent as <code>CustomID</code> to EVA. Leave blank and
              EVA will generate one.
            </Description>
          </TextField>

          <TextField variant="secondary">
            <Label>Brand</Label>
            <Input
              value={form.brand}
              onChange={(e) => update("brand", e.target.value)}
              placeholder="e.g. Acme"
            />
          </TextField>

          <ComboBox
            value={form.taxCode}
            onChange={(key) => update("taxCode", key as string)}
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
              value={form.shortDescription}
              onChange={(e) => update("shortDescription", e.target.value)}
              placeholder="Brief summary"
            />
          </TextField>

          <TextField variant="secondary">
            <Label>Long Description</Label>
            <TextArea
              rows={4}
              value={form.longDescription}
              onChange={(e) => update("longDescription", e.target.value)}
              placeholder="Full product description"
            />
          </TextField>

          <Switch
            isSelected={form.published}
            onChange={(val: boolean) => update("published", val)}
          >
            {() => (
              <>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Label className="text-sm">Published</Label>
              </>
            )}
          </Switch>
        </div>
      )}

      {/* Step 1: Images */}
      {step === 1 && (
        <ProductImageUploader ref={uploaderRef} namespace={namespace} />
      )}

      {/* Step 2: Variants */}
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <Switch
            isSelected={form.hasVariants}
            onChange={(val: boolean) => update("hasVariants", val)}
          >
            {() => (
              <>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Label className="text-sm">This product has variants</Label>
              </>
            )}
          </Switch>

          {form.hasVariants && (
            <div className="flex flex-col gap-3">
              <TextField variant="secondary">
                <Label>Variation type</Label>
                <Input
                  value={form.variationProperty}
                  onChange={(e) => update("variationProperty", e.target.value)}
                  placeholder="e.g. size, color"
                />
                {errors.variationProperty && (
                  <ErrorMessage>{errors.variationProperty}</ErrorMessage>
                )}
                <Description className="text-xs text-muted">
                  The axis products vary on. Each value becomes a child product.
                </Description>
              </TextField>

              <div className="flex flex-col gap-2">
                <Label>Values</Label>
                {form.variantValues.map((val, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      className="flex-1"
                      variant="secondary"
                      value={val}
                      placeholder={`e.g. ${["S", "M", "L", "XL"][i] ?? "value"}`}
                      onChange={(e) => {
                        const next = [...form.variantValues];
                        next[i] = e.target.value;
                        update("variantValues", next);
                      }}
                    />
                    {form.variantValues.length > 1 && (
                      <Button
                        variant="ghost"
                        isIconOnly
                        size="sm"
                        onPress={() =>
                          update(
                            "variantValues",
                            form.variantValues.filter((_, j) => j !== i),
                          )
                        }
                      >
                        <Icon icon="hugeicons:cancel-01" />
                      </Button>
                    )}
                  </div>
                ))}
                {errors.variantValues && (
                  <ErrorMessage>{errors.variantValues}</ErrorMessage>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="self-start"
                  onPress={() =>
                    update("variantValues", [...form.variantValues, ""])
                  }
                >
                  <Icon icon="tabler:plus" />
                  Add value
                </Button>
              </div>

              <Switch
                isSelected={form.hasSecondaryVariant}
                onChange={(val: boolean) => update("hasSecondaryVariant", val)}
              >
                {() => (
                  <>
                    <Switch.Control>
                      <Switch.Thumb />
                    </Switch.Control>
                    <Label className="text-sm">Add a second variation</Label>
                  </>
                )}
              </Switch>

              {form.hasSecondaryVariant && (
                <>
                  <TextField variant="secondary">
                    <Label>Secondary variation type</Label>
                    <Input
                      value={form.secondaryVariationProperty}
                      onChange={(e) => update("secondaryVariationProperty", e.target.value)}
                      placeholder="e.g. size"
                    />
                    {errors.secondaryVariationProperty && (
                      <ErrorMessage>{errors.secondaryVariationProperty}</ErrorMessage>
                    )}
                    <Description className="text-xs text-muted">
                      Applied under each {form.variationProperty || "primary"} variant.
                    </Description>
                  </TextField>

                  <div className="flex flex-col gap-2">
                    <Label>Values</Label>
                    {form.secondaryVariantValues.map((val, i) => (
                      <div key={i} className="flex gap-2">
                        <Input
                          className="flex-1"
                          variant="secondary"
                          value={val}
                          placeholder={`e.g. ${["S", "M", "L", "XL"][i] ?? "value"}`}
                          onChange={(e) => {
                            const next = [...form.secondaryVariantValues];
                            next[i] = e.target.value;
                            update("secondaryVariantValues", next);
                          }}
                        />
                        {form.secondaryVariantValues.length > 1 && (
                          <Button
                            variant="ghost"
                            isIconOnly
                            size="sm"
                            onPress={() =>
                              update(
                                "secondaryVariantValues",
                                form.secondaryVariantValues.filter((_, j) => j !== i),
                              )
                            }
                          >
                            <Icon icon="hugeicons:cancel-01" />
                          </Button>
                        )}
                      </div>
                    ))}
                    {errors.secondaryVariantValues && (
                      <ErrorMessage>{errors.secondaryVariantValues}</ErrorMessage>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="self-start"
                      onPress={() =>
                        update("secondaryVariantValues", [...form.secondaryVariantValues, ""])
                      }
                    >
                      <Icon icon="tabler:plus" />
                      Add value
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-2">
        <Button
          variant="outline"
          onPress={() =>
            step > 0
              ? setStep((s) => s - 1)
              : router.push(`/${namespace}/dashboard/products`)
          }
          isDisabled={isLoading}
        >
          {step === 0 ? "Cancel" : "Back"}
        </Button>
        {step < STEPS.length - 1 ? (
          <Button variant="primary" onPress={handleNext} isDisabled={isLoading}>
            {isUploading ? "Uploading…" : "Next"}
            <Icon icon="hugeicons:arrow-right-01" />
          </Button>
        ) : (
          <Button
            variant="primary"
            onPress={handleSubmit}
            isDisabled={isLoading}
          >
            {isPending ? "Creating…" : "Create Product"}
          </Button>
        )}
      </div>
    </div>
  );
}
