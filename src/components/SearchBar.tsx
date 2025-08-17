import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
function SearchBar() {
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const term = formData.get("term") as string;

    if (term) {
      router.push(`/nav?term=${encodeURIComponent(term)}`);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex bg-gray-100 rounded-full p-1 focus-within:outline-2 focus-within:outline-gray-300 focus-within:bg-gray-300"
    >
      <button className="rounded-full bg-background p-2">
        <MagnifyingGlassIcon className="size-4" />
      </button>
      <input
        type="text"
        name="term"
        className="w-[100%] ml-2 outline-none"
        placeholder="Buscar"
      />
    </form>
  );
}

export default SearchBar;
