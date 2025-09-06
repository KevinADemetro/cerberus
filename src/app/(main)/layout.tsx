import { Header } from "@/src/components/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-24">{children}</div>
    </>
  );
}
