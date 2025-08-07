"use client";
import { usePathname } from "next/navigation";
import Filters from "./Filters";
import SearchBar from "../components/SearchBar";

function SearchWithFilters() {
  const pathname = usePathname();
  const showFilterButton = pathname?.startsWith("/nav");
  return (
    <div className="flex items-center justify-evenly">
      <SearchBar />
      {showFilterButton && <Filters />}
    </div>
  );
}

export default SearchWithFilters;
