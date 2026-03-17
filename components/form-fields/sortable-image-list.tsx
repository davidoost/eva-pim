"use client";

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
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface ImageItem {
  id: string;
  url: string;
}

function SortableImageItem({
  item,
  index,
  onRemove,
  onUrlChange,
}: {
  item: ImageItem;
  index: number;
  onRemove: (id: string) => void;
  onUrlChange: (id: string, url: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
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

      {index === 0 && (
        <span className="text-xs font-medium text-primary shrink-0">Primary</span>
      )}

      <Input
        variant="secondary"
        placeholder="https://example.com/image.jpg"
        value={item.url}
        onChange={(e) => onUrlChange(item.id, e.target.value)}
        className="flex-1"
      />

      {/* Hidden field preserving order for FormData */}
      <input type="hidden" name="imageUrl" value={item.url} />

      <Button
        type="button"
        variant="ghost"
        isIconOnly
        size="sm"
        onPress={() => onRemove(item.id)}
      >
        <Icon icon="hugeicons:cancel-01" width={14} />
      </Button>
    </div>
  );
}

export default function SortableImageList() {
  const [items, setItems] = useState<ImageItem[]>([]);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.findIndex((i) => i.id === active.id);
        const newIndex = prev.findIndex((i) => i.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  function addImage() {
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), url: "" },
    ]);
  }

  function removeImage(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateUrl(id: string, url: string) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, url } : i)),
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Images</span>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item, index) => (
            <SortableImageItem
              key={item.id}
              item={item}
              index={index}
              onRemove={removeImage}
              onUrlChange={updateUrl}
            />
          ))}
        </SortableContext>
      </DndContext>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="self-start"
        onPress={addImage}
      >
        <Icon icon="tabler:plus" />
        Add Image
      </Button>
    </div>
  );
}
