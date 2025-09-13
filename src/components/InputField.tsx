import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";
import Label from "./Label";

type InputFieldProps<T extends FieldValues> = {
  className?: string;
  label?: string;
  field: Path<T>;
  placeholder: string;
  register?: UseFormRegister<T>;
  registerWithMask?: any;
  mask?: string;
  error?: FieldError | undefined;
  type?: string;
  inputMode?:
    | "text"
    | "search"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal";
  disabled?: boolean;
};

export function InputField<T extends FieldValues>({
  className,
  label,
  field,
  placeholder,
  register,
  registerWithMask,
  mask,
  error,
  inputMode = "text",
  type = "text",
  disabled = false,
}: InputFieldProps<T>) {
  return (
    <div className="flex flex-col">
      {label && <Label htmlFor={field}>{label}</Label>}
      {mask && registerWithMask ? (
        <input
          inputMode={inputMode}
          type={type}
          id={field}
          disabled={disabled}
          placeholder={placeholder}
          {...registerWithMask(field, mask)}
          className={`py-3 px-5 border border-gray-600  rounded-md focus-within:outline-2 focus-within:outline-gray-300 disabled:border-gray-300 disabled:text-gray-600 ${className}`}
        />
      ) : (
        <input
          inputMode={inputMode}
          disabled={disabled}
          type={type}
          id={field}
          placeholder={placeholder}
          {...register?.(field)}
          className={`py-3 px-5 border border-gray-600 rounded-md focus-within:outline-2 focus-within:outline-gray-300 disabled:border-gray-300 disabled:text-gray-600 ${className}`}
        />
      )}

      {error && <p className="text-red-400 mt-2">{error.message}</p>}
    </div>
  );
}
