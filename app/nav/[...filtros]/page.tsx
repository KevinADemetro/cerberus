async function page({ params }: { params: Promise<{ filtros: string[] }> }) {
  const { filtros } = await params;
  return <div></div>;
}

export default page;
