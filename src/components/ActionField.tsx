"use client";
import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldError,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";
import { InputField } from "./InputField";

type SingleFieldFormProps<T extends FieldValues> = {
  field: Path<T>;
  placeholder: string;
  register?: UseFormRegister<T>;
  registerWithMask?: any;
  mask?: string;
  label?: string;
  error?: FieldError;
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
  buttonLabel: string;
  handleSubmit: UseFormHandleSubmit<T>;
  action: SubmitHandler<T>;
};

export function ActionField<T extends FieldValues>({
  buttonLabel,
  handleSubmit,
  action,
  error,
  ...inputProps
}: SingleFieldFormProps<T>) {
  return (
    <form onSubmit={handleSubmit(action)} className="rounded-md w-full">
      <div className="relative">
        <InputField {...inputProps} className="outline-none " />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 border border-neutral-400 px-4 py-1 rounded-full"
        >
          {buttonLabel}
        </button>
      </div>

      {error && <p className="text-red-400 mt-2">{error.message}</p>}
    </form>
  );
}
