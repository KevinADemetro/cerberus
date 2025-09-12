function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm mb-2">
      {children}
    </label>
  );
}

export default Label;
