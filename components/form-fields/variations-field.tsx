"use client";

import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  Surface,
} from "@heroui/react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { ProductProperty } from "@/lib/core/types";
import { SelectProductVariation } from "@/lib/db/types";

type ValueItem = { id: string; value: string };
type VariationGroup = { id: string; property: string; values: ValueItem[] };

function SortableValueRow({
  item,
  groupId,
  canRemove,
  onRemove,
  onValueChange,
}: {
  item: ValueItem;
  groupId: string;
  canRemove: boolean;
  onRemove: (groupId: string, id: string) => void;
  onValueChange: (groupId: string, id: string, value: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-2">
      <button
        type="button"
        className="cursor-grab text-muted shrink-0"
        {...attributes}
        {...listeners}
      >
        <Icon icon="hugeicons:drag-drop-vertical" width={16} />
      </button>
      <Input
        placeholder="Value..."
        value={item.value}
        onChange={(e) => onValueChange(groupId, item.id, e.target.value)}
        className="flex-1"
      />
      {canRemove && (
        <Button
          type="button"
          variant="ghost"
          isIconOnly
          size="sm"
          onPress={() => onRemove(groupId, item.id)}
        >
          <Icon icon="hugeicons:cancel-01" />
        </Button>
      )}
    </div>
  );
}

export default function VariationsField({
  properties,
  initialVariations = [],
}: {
  properties: ProductProperty[];
  initialVariations?: SelectProductVariation[];
}) {
  const [groups, setGroups] = useState<VariationGroup[]>(() => {
    const map = new Map<string, ValueItem[]>();
    for (const v of [...initialVariations].sort((a, b) => a.sequence - b.sequence)) {
      const existing = map.get(v.variationProperty) ?? [];
      map.set(v.variationProperty, [...existing, { id: crypto.randomUUID(), value: v.variationValue }]);
    }
    return Array.from(map.entries()).map(([property, values]) => ({
      id: crypto.randomUUID(),
      property,
      values,
    }));
  });

  const usedProperties = groups.map((g) => g.property);
  const sensors = useSensors(useSensor(PointerSensor));

  function addGroup() {
    setGroups((prev) => [
      ...prev,
      { id: crypto.randomUUID(), property: "", values: [{ id: crypto.randomUUID(), value: "" }] },
    ]);
  }

  function removeGroup(id: string) {
    setGroups((prev) => prev.filter((g) => g.id !== id));
  }

  function setProperty(id: string, property: string) {
    setGroups((prev) => prev.map((g) => (g.id === id ? { ...g, property } : g)));
  }

  function addValue(groupId: string) {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? { ...g, values: [...g.values, { id: crypto.randomUUID(), value: "" }] }
          : g,
      ),
    );
  }

  function removeValue(groupId: string, valueId: string) {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId ? { ...g, values: g.values.filter((v) => v.id !== valueId) } : g,
      ),
    );
  }

  function updateValue(groupId: string, valueId: string, value: string) {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? { ...g, values: g.values.map((v) => (v.id === valueId ? { ...v, value } : v)) }
          : g,
      ),
    );
  }

  function handleValueDragEnd(groupId: string, event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id !== groupId) return g;
        const oldIndex = g.values.findIndex((v) => v.id === active.id);
        const newIndex = g.values.findIndex((v) => v.id === over.id);
        return { ...g, values: arrayMove(g.values, oldIndex, newIndex) };
      }),
    );
  }

  // Serialize with position-as-sequence for the hidden input
  const serialized = groups.map((g) => ({
    property: g.property,
    values: g.values.map((v) => v.value),
  }));

  return (
    <div className="flex flex-col gap-2">
      <input type="hidden" name="variationsJson" value={JSON.stringify(serialized)} />

      <div className="flex items-center justify-between">
        <Label>Variations</Label>
        <Button type="button" variant="ghost" size="sm" onPress={addGroup}>
          <Icon icon="tabler:plus" />
          Add variation
        </Button>
      </div>

      {groups.length === 0 && (
        <p className="text-sm text-muted">No variations added.</p>
      )}

      {groups.map((group) => (
        <Surface
          key={group.id}
          variant="secondary"
          className="flex flex-col gap-2 p-3 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <ComboBox
              value={group.property}
              onChange={(key) => setProperty(group.id, key as string)}
              fullWidth
            >
              <Label>Variation Property</Label>
              <ComboBox.InputGroup>
                <Input placeholder="Search property..." />
                <ComboBox.Trigger />
              </ComboBox.InputGroup>
              <ComboBox.Popover>
                <ListBox>
                  {properties.map((p) => (
                    <ListBox.Item
                      key={p.ID}
                      id={p.ID}
                      textValue={p.DisplayName ?? p.ID}
                      isDisabled={usedProperties.includes(p.ID) && p.ID !== group.property}
                    >
                      {p.DisplayName ?? p.ID}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </ComboBox.Popover>
            </ComboBox>

            <Button
              type="button"
              variant="ghost"
              isIconOnly
              size="sm"
              onPress={() => removeGroup(group.id)}
            >
              <Icon icon="hugeicons:cancel-01" />
            </Button>
          </div>

          <div className="flex flex-col gap-1">
            {group.values.length > 1 ? (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(e) => handleValueDragEnd(group.id, e)}
              >
                <SortableContext items={group.values} strategy={verticalListSortingStrategy}>
                  {group.values.map((item) => (
                    <SortableValueRow
                      key={item.id}
                      item={item}
                      groupId={group.id}
                      canRemove={group.values.length > 1}
                      onRemove={removeValue}
                      onValueChange={updateValue}
                    />
                  ))}
                </SortableContext>
              </DndContext>
            ) : (
              group.values.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Input
                    placeholder="Value..."
                    value={item.value}
                    onChange={(e) => updateValue(group.id, item.id, e.target.value)}
                    className="flex-1"
                  />
                </div>
              ))
            )}

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="self-start"
              onPress={() => addValue(group.id)}
            >
              <Icon icon="tabler:plus" />
              Add value
            </Button>
          </div>
        </Surface>
      ))}
    </div>
  );
}
