"use client";

import { SelectEnvironment, SelectProduct } from "@/lib/db/types";
import { createContext, useContext, ReactNode } from "react";
import { ProductProperty, TaxCode, User } from "@/lib/core/types";

type DashboardContextValue = {
  environment: SelectEnvironment;
  productProperties: ProductProperty[];
  taxCodes: TaxCode[];
  products: SelectProduct[];
  user: User;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({
  children,
  environment,
  productProperties,
  products,
  taxCodes,
  user,
}: DashboardContextValue & { children: ReactNode }) {
  return (
    <DashboardContext.Provider
      value={{ environment, productProperties, products, taxCodes, user }}
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
