import { ShoppingBagIcon, Bars3Icon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header className="bg-white flex flex-col p-3 gap-2">
      <div className="flex justify-between">
        <div>logo</div>
        <div className="flex gap-3">
          <ShoppingBagIcon className="size-6" />
          <Bars3Icon className="size-6" />
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
