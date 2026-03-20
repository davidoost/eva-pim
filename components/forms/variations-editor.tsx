"use client";

import { useDashboard } from "@/app/[namespace]/dashboard/context";
import {
  Button,
  ComboBox,
  Description,
  Input,
  Label,
  ListBox,
  Surface,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export type VariationLevel = {
  property: string;
  values: string[];
};

interface VariationsEditorProps {
  variations: VariationLevel[];
  onChange: (variations: VariationLevel[]) => void;
}

export default function VariationsEditor({
  variations,
  onChange,
}: VariationsEditorProps) {
  function updateProperty(index: number, value: string) {
    const next = [...variations];
    next[index] = { ...next[index], property: value };
    onChange(next);
  }

  function updateValue(levelIndex: number, valueIndex: number, value: string) {
    const next = [...variations];
    const values = [...next[levelIndex].values];
    values[valueIndex] = value;
    next[levelIndex] = { ...next[levelIndex], values };
    onChange(next);
  }

  function addValue(levelIndex: number) {
    const next = [...variations];
    next[levelIndex] = {
      ...next[levelIndex],
      values: [...next[levelIndex].values, ""],
    };
    onChange(next);
  }

  function removeValue(levelIndex: number, valueIndex: number) {
    const next = [...variations];
    next[levelIndex] = {
      ...next[levelIndex],
      values: next[levelIndex].values.filter((_, i) => i !== valueIndex),
    };
    onChange(next);
  }

  function removeLevel(index: number) {
    onChange(variations.filter((_, i) => i !== index));
  }

  function addLevel() {
    onChange([...variations, { property: "", values: [""] }]);
  }

  const { productProperties } = useDashboard();

  return (
    <div className="flex flex-col gap-3">
      <Label>Variations</Label>
      {variations.map((level, li) => (
        <Surface
          key={li}
          variant="secondary"
          className="flex flex-col gap-2 p-4 rounded-2xl"
        >
          <ComboBox
            value={level.property}
            onChange={(k) => updateProperty(li, k as string)}
            fullWidth
          >
            <Label>Type</Label>
            <ComboBox.InputGroup>
              <Input placeholder="e.g. color, size" />
              <ComboBox.Trigger />
            </ComboBox.InputGroup>
            <ComboBox.Popover>
              <ListBox>
                {productProperties.map((p) => (
                  <ListBox.Item
                    key={p.ID}
                    id={p.ID}
                    textValue={p.DisplayName ?? p.ID}
                  >
                    {p.DisplayName ?? p.ID}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </ComboBox.Popover>
            {li > 0 && (
              <Description className="text-xs text-muted">
                Applied under each {variations[0]?.property || "primary"}{" "}
                variant.
              </Description>
            )}
          </ComboBox>

          <div className="flex flex-col gap-2">
            <Label>Values</Label>
            {level.values.map((val, vi) => (
              <div key={vi} className="flex gap-2">
                <Input
                  className="flex-1"
                  value={val}
                  placeholder={`e.g. ${["S", "M", "L", "XL"][vi] ?? "value"}`}
                  onChange={(e) => updateValue(li, vi, e.target.value)}
                />
                {level.values.length > 1 && (
                  <Button
                    variant="ghost"
                    isIconOnly
                    size="sm"
                    onPress={() => removeValue(li, vi)}
                  >
                    <Icon icon="hugeicons:cancel-01" />
                  </Button>
                )}
              </div>
            ))}
            <div className="flex justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="self-start"
                onPress={() => addValue(li)}
              >
                <Icon icon="tabler:plus" />
                Add value
              </Button>
              {li === variations.length - 1 && (
                <Button
                  variant="danger-soft"
                  size="sm"
                  onPress={() => removeLevel(li)}
                >
                  Remove Variation
                </Button>
              )}
            </div>
          </div>
        </Surface>
      ))}

      {variations.length < 2 && (
        <Button
          variant="outline"
          size="sm"
          className="self-start"
          onPress={addLevel}
        >
          <Icon icon="tabler:plus" />
          Add variation
        </Button>
      )}
    </div>
  );
}
