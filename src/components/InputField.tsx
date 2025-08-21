import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  label: string;
  field: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
};

function InputField<T extends FieldValues>({
  label,
  field,
  placeholder,
  register,
}: InputFieldProps<T>) {
  return (
    <div className="flex flex-col">
      <label htmlFor={field} className="text-sm mb-2">{`${label}`}</label>
      <input
        type="text"
        id={field}
        placeholder={placeholder}
        {...register(field)}
        className="py-3 px-5 border border-gray-600 rounded-md focus-within:outline-2 focus-within:outline-gray-300"
      />
    </div>
  );
}

export default InputField;
