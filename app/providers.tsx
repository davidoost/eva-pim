"use client";

import { Toast } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { Sidebar } from "@heroui-pro/react";
import { RouterProvider } from "react-aria-components";
import { addCollection } from "@iconify/react";
import gravityUI from "@iconify-json/gravity-ui/icons.json";

addCollection(gravityUI);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toast.Provider placement="bottom end" />
      {children}
    </ThemeProvider>
  );
}
