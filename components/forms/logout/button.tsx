"use client";

import { Button, Spinner } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { logout } from "./action";

export default function LogoutButton({ namespace }: { namespace: string }) {
  const [isLoading, setIsLoading] = useState(false);

  async function onLogout() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await logout(namespace);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      size="sm"
      variant="danger-soft"
      onPress={onLogout}
      isDisabled={isLoading}
      className="flex-1"
    >
      {isLoading ? <Spinner size="sm" color="current" /> : "Log Out"}
    </Button>
  );
}
