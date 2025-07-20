function IconButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <button>{children}</button>;
}

export default IconButton;
