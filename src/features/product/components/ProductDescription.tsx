export function ProductDescription({ description }: { description: string }) {
  return (
    <div className="p-5">
      <h3>Descrição</h3>
      <p>{description}</p>
    </div>
  );
}
