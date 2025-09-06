"use client";
import { usePathname } from "next/navigation";
import { Filters } from "@/src/components/Filters";
import { SearchBar } from "@/src/components/SearchBar";

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
