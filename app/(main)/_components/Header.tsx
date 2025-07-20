import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
import IconButton from "../../_components/IconButton";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-white flex flex-col p-3 gap-2">
      <div className="flex justify-between">
        <div>logo</div>
        <div className="flex gap-3">
          <Link href="/carrinho">
            <ShoppingBagIcon className="size-6" />
          </Link>
          <IconButton>
            <Bars3Icon className="size-6" />
          </IconButton>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
