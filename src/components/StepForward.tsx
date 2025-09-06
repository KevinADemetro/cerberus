import Link from "next/link";

export function StepForward({ href }: { href: string }) {
  return (
    <div className="flex justify-center items-center p-5">
      <Link
        href={href}
        className="bg-black text-white w-full text-center py-3 rounded-full"
      >
        Continuar
      </Link>
    </div>
  );
}
