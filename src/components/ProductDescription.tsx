function ProductDescription({ description }: { description: string }) {
  return (
    <div className="p-5">
      <h3 className="my-5">Descrição</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescription;
