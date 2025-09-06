"use client";
import { usePathname } from "next/navigation";
import { Filters, SearchBar } from "@/src/components/";

export function SearchWithFilters() {
  const pathname = usePathname();
  const showFilterButton = pathname?.startsWith("/nav");
  return (
    <div className="flex items-center justify-evenly">
      <SearchBar />
      {showFilterButton && <Filters />}
    </div>
  );
}
