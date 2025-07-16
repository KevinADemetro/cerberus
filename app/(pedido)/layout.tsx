function PedidoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1>Layout do pedido</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default PedidoLayout;
