async function Page({ params }: { params: Promise<{ filtros: string[] }> }) {
  const { filtros } = await params;
  return (
    <div>
      {filtros.map((filtro, i) => (
        <p key={i}>{filtro}</p>
      ))}
    </div>
  );
}

export default Page;
