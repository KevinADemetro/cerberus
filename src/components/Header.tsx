import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchWithFilters from "./SearchWithFilters";
function Header() {
  return (
    <header className="bg-background flex flex-col p-3 gap-2">
      <div className="flex justify-between">
        <Link href="/">logo</Link>
        <div className="flex gap-3">
          <Link href="/carrinho">
            <ShoppingBagIcon className="size-6" />
          </Link>
          <Bars3Icon className="size-6" />
        </div>
      </div>
      <SearchWithFilters />
    </header>
  );
}

export default Header;
