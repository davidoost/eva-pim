"use client";

import { SearchField } from "@heroui/react";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import debounce from "debounce";
import { ProductsTable, ProductsTableProps } from "./table";
import CreateProductFormModal from "@/components/forms/create-product/modal";

export function SearchableProductsTable(props: ProductsTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const pushQuery = useMemo(
    () =>
      debounce((value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
          params.set("q", value);
        } else {
          params.delete("q");
        }
        router.replace(`${pathname}?${params.toString()}`);
      }, 300),
    [pathname, router, searchParams],
  );

  function handleSearch(value: string) {
    setQuery(value);
    pushQuery(value);
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-row items-center justify-between gap-3">
        <div className="flex flex-row items-center gap-3">
          <SearchField
            name="search"
            variant="secondary"
            value={query}
            onChange={handleSearch}
          >
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder={"Search..."} />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>
        <CreateProductFormModal />
      </div>
      <ProductsTable {...props} />
    </div>
  );
}
