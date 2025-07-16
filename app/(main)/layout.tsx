export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Layout do site</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
