export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-black text-white w-full text-center py-3 rounded-full cursor-pointer">
      {children}
    </button>
  );
}
