"use client";

import { SelectEnvironment } from "@/lib/db/types";
import { createContext, useContext, ReactNode } from "react";
import {
  PricingTaxCodeItem,
  UsersLoggedInUserDto,
} from "@/src/eva/generated/eva-services-core";
import { ServicesProductPropertyTypesListProductPropertyTypesDto } from "@/src/eva/generated/eva-services-pim";
import { navItems } from "@/components/navigation/nav-items";
import { usePathname } from "next/navigation";

type NavItem = (typeof navItems)[number];

type DashboardContextValue = {
  environment: SelectEnvironment;
  user: UsersLoggedInUserDto;
  taxCodes: PricingTaxCodeItem[];
  productProperties: ServicesProductPropertyTypesListProductPropertyTypesDto[];
  currentNavItem: NavItem | undefined;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({
  children,
  environment,
  user,
  taxCodes,
  productProperties,
}: Omit<DashboardContextValue, "currentNavItem"> & { children: ReactNode }) {
  const pathname = usePathname();
  const base = `/${environment.namespace}/dashboard`;
  const currentNavItem = navItems.find((item) =>
    item.slug === ""
      ? pathname === base
      : pathname === `${base}/${item.slug}` || pathname.startsWith(`${base}/${item.slug}/`),
  );

  return (
    <DashboardContext.Provider
      value={{ environment, user, taxCodes, productProperties, currentNavItem }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard(): DashboardContextValue {
  const ctx = useContext(DashboardContext);
  if (!ctx)
    throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}
