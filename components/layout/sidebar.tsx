"use client";

import { buttonVariants, cn, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../forms/logout/button";
import { ThemeSwitcher } from "../theme-switcher";

type SidebarItem = {
  label: string;
  slug: string;
  icon: string;
};

const items: SidebarItem[] = [
  { label: "Overview", slug: "", icon: "hugeicons:home-07" },
  { label: "Products", slug: "products", icon: "hugeicons:package" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const namespace = pathname.split("/")[1];
  const segment = pathname.split("/")[3] ?? "";

  return (
    <div className="w-full max-w-72 flex flex-col border-r border-separator">
      <div className="flex-1 p-4 py-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            className={cn(
              buttonVariants({
                variant: segment === item.slug ? "tertiary" : "ghost",
                size: "lg",
              }),
              "w-full justify-start",
              segment !== item.slug && "text-muted hover:text-foreground",
            )}
            href={`/${namespace}/dashboard/${item.slug}`}
          >
            <Icon icon={item.icon} />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="w-full flex gap-2 p-4">
        <LogoutButton namespace={namespace} /> <ThemeSwitcher />
      </div>
    </div>
  );
}
