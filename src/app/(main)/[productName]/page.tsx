async function page({ params }: { params: Promise<{ productName: string }> }) {
  const { productName } = await params;

  return <div>{productName}</div>;
}

export default page;
