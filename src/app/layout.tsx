import "../styles/globals.css";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-text">{children}</body>
    </html>
  );
}

export default RootLayout;
