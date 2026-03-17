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
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "@iconify/react";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { uploadProductImage } from "@/lib/supabase/actions";
import { SelectProductImage } from "@/lib/db/types";

type ImageItem =
  | { kind: "existing"; id: string; previewUrl: string; storagePath: string }
  | { kind: "new"; id: string; previewUrl: string; file: File };

export interface ProductImageUploaderRef {
  prepareSubmit(): Promise<{ imageUrls: string[]; removedPaths: string[] }>;
}

function storagePathFromUrl(url: string): string {
  const match = url.match(/\/object\/public\/[^/]+\/(.+)/);
  return match ? match[1] : url;
}

function SortableImageTile({
  item,
  index,
  onRemove,
}: {
  item: ImageItem;
  index: number;
  onRemove: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative aspect-square rounded-lg overflow-hidden border border-separator group"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-grab z-10"
        {...attributes}
        {...listeners}
      />

      <img
        src={item.previewUrl}
        alt={`Product image ${index + 1}`}
        className="w-full h-full object-cover"
      />

      {item.kind === "new" && (
        <div className="absolute bottom-1 left-1 z-20 pointer-events-none">
          <span className="text-[10px] font-semibold bg-orange-500/80 text-white px-1.5 py-0.5 rounded">
            Unsaved
          </span>
        </div>
      )}

      {item.kind === "existing" && index === 0 && (
        <span className="absolute bottom-1 left-1 text-[10px] font-semibold bg-black/60 text-white px-1.5 py-0.5 rounded z-20 pointer-events-none">
          Primary
        </span>
      )}

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="absolute top-1 right-1 z-20 bg-black/60 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Icon icon="hugeicons:cancel-01" width={10} />
      </button>
    </div>
  );
}

function UploadTile({ onFiles }: { onFiles: (files: FileList) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="aspect-square rounded-lg border-2 border-dashed border-separator flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors text-muted"
    >
      <Icon icon="hugeicons:image-upload" width={20} />
      <span className="text-xs">Add images</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => e.target.files && onFiles(e.target.files)}
      />
    </div>
  );
}

const ProductImageUploader = forwardRef<
  ProductImageUploaderRef,
  { namespace: string; initialImages?: SelectProductImage[] }
>(function ProductImageUploader({ namespace, initialImages = [] }, ref) {
  const [items, setItems] = useState<ImageItem[]>(() =>
    [...initialImages]
      .sort((a, b) => a.sequence - b.sequence)
      .map((img) => ({
        kind: "existing",
        id: img.id,
        previewUrl: img.imageUrl,
        storagePath: storagePathFromUrl(img.imageUrl),
      })),
  );

  const removedPaths = useRef<string[]>([]);
  const sensors = useSensors(useSensor(PointerSensor));

  useImperativeHandle(ref, () => ({
    async prepareSubmit() {
      const uploaded = await Promise.all(
        items.map(async (item) => {
          if (item.kind === "existing") return item.previewUrl;
          const fd = new FormData();
          fd.append("file", item.file);
          const result = await uploadProductImage(fd, namespace);
          return result?.url ?? null;
        }),
      );

      const imageUrls = uploaded.filter((url): url is string => url !== null);
      return { imageUrls, removedPaths: removedPaths.current };
    },
  }));

  function handleFiles(files: FileList) {
    const newItems: ImageItem[] = Array.from(files).map((file) => ({
      kind: "new",
      id: crypto.randomUUID(),
      previewUrl: URL.createObjectURL(file),
      file,
    }));
    setItems((prev) => [...prev, ...newItems]);
  }

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

  function removeImage(id: string) {
    const item = items.find((i) => i.id === id);
    if (item?.kind === "existing") removedPaths.current.push(item.storagePath);
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Images</span>

      {items.length === 0 ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="w-full aspect-video rounded-xl border-2 border-dashed border-separator flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors text-muted"
        >
          <Icon icon="hugeicons:image-upload" width={28} />
          <span className="text-sm">Click to upload images</span>
          <span className="text-xs opacity-60">PNG, JPG, WEBP</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
          />
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-3 gap-2">
              {items.map((item, index) => (
                <SortableImageTile
                  key={item.id}
                  item={item}
                  index={index}
                  onRemove={removeImage}
                />
              ))}
              <UploadTile onFiles={handleFiles} />
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
});

export default ProductImageUploader;
