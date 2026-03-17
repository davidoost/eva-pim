"use client";

import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import {
  cn,
  Description,
  Drawer,
  Modal,
  UseOverlayStateReturn,
} from "@heroui/react";

interface ResponsiveModalProps {
  modalState: UseOverlayStateReturn;
  title?: string;
  description?: string;
  children: React.ReactNode;
  isDestructive?: boolean;
}

export default function ResponsiveModal({
  modalState,
  title,
  description,
  children,
  isDestructive = false,
}: ResponsiveModalProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer.Backdrop
        isOpen={modalState.isOpen}
        onOpenChange={modalState.setOpen}
      >
        <Drawer.Content placement="bottom">
          <Drawer.Dialog
            aria-label={title || "responsove-modal"}
            className="max-h-[85dvh]"
          >
            <Drawer.Handle />
            <Drawer.CloseTrigger />
            {(title || description) && (
              <Drawer.Header className="gap-1 mb-2">
                {title && (
                  <Drawer.Heading
                    className={cn(isDestructive && "text-danger")}
                  >
                    {title}
                  </Drawer.Heading>
                )}
                {description && (
                  <Description className="text-sm">{description}</Description>
                )}
              </Drawer.Header>
            )}
            <Drawer.Body className="flex flex-col gap-6">
              {children}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    );
  }

  return (
    <Modal.Backdrop
      isOpen={modalState.isOpen}
      onOpenChange={modalState.setOpen}
    >
      <Modal.Container size="lg">
        <Modal.Dialog>
          <Modal.CloseTrigger />
          {(title || description) && (
            <Modal.Header className="p-1 gap-1 mb-2">
              {title && (
                <Modal.Heading className={cn(isDestructive && "text-danger")}>
                  {title}
                </Modal.Heading>
              )}
              {description && (
                <Description className="text-sm">{description}</Description>
              )}
            </Modal.Header>
          )}
          <Modal.Body className="p-1 flex flex-col gap-6">
            {children}
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}
