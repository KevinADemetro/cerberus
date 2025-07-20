import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <form className="flex bg-gray-100 rounded-full p-1 focus-within:outline-2 focus-within:outline-gray-300 focus-within:bg-gray-300">
      <button className="rounded-full bg-white p-2">
        <MagnifyingGlassIcon className="size-4" />
      </button>
      <input
        type="text"
        className="w-[100%] ml-2 outline-none"
        placeholder="Buscar"
      />
    </form>
  );
}

export default SearchBar;
