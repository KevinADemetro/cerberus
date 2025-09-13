"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function BackButton() {
  const router = useRouter();

  return (
    <button className="cursor-pointer" onClick={() => router.back()}>
      <ArrowLeftIcon className="w-6 h-6" />
    </button>
  );
}
