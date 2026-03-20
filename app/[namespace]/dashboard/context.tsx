"use client";

import { SelectEnvironment } from "@/lib/db/types";
import { createContext, useContext, ReactNode } from "react";
import { ProductProperty, TaxCode, User } from "@/lib/core/types";

type DashboardContextValue = {
  environment: SelectEnvironment;
  user: User;
  taxCodes: TaxCode[];
  productProperties: ProductProperty[];
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({
  children,
  environment,
  user,
  taxCodes,
  productProperties,
}: DashboardContextValue & { children: ReactNode }) {
  return (
    <DashboardContext.Provider value={{ environment, user, taxCodes, productProperties }}>
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
