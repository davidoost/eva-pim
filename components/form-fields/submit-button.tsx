"use client";

import { Button, Spinner } from "@heroui/react";
import { ComponentProps } from "react";

interface SubmitButtonProps extends Omit<
  ComponentProps<typeof Button>,
  "type" | "children"
> {
  isLoading: boolean;
  label?: string;
}

export default function SubmitButton({
  isLoading,
  label = "Submit",
  ...props
}: SubmitButtonProps) {
  return (
    <Button type="submit" isDisabled={isLoading} {...props}>
      {isLoading ? <Spinner size="sm" color="current" /> : label}
    </Button>
  );
}
