function InputField({
  label,
  field,
  placeholder,
  required,
}: {
  label: string;
  field: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={field} className="text-sm mb-2">{`${label} ${
        required ? "*" : ""
      }`}</label>
      <input
        type="text"
        id={field}
        name={field}
        placeholder={placeholder}
        className="py-3 px-5 border border-gray-600 rounded-md focus-within:outline-2 focus-within:outline-gray-300"
        required={required}
      />
    </div>
  );
}

export default InputField;
