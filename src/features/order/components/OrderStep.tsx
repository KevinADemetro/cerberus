function OrderStep({
  indice,
  label,
  isActive,
}: {
  indice: number;
  label: string;
  isActive: boolean;
}) {
  return (
    <li
      className={`flex gap-1 items-center py-5 px-2  ${
        isActive ? "bg-gray-100" : "opacity-60 bg-gray-400"
      }`}
    >
      <div className="text-white bg-black p-1 rounded-full w-4 h-4 flex items-center justify-center">
        {indice}
      </div>
      <p>{label}</p>
    </li>
  );
}

export default OrderStep;
