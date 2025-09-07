import Link from "next/link";
import { Button } from "./Button";

export function StepForward({ href }: { href: string }) {
  return (
    <Button>
      <Link href={href}>Continuar</Link>
    </Button>
  );
}
