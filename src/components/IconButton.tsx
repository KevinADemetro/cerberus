export function IconButton({
  children,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick: () => void;
}>) {
  return <button onClick={onClick}>{children}</button>;
}
