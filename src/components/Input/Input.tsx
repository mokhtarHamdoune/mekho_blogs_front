import React from "react";
import { useField } from "formik";

type inputrest = {
  label?: string;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  size: "small" | "medium" | "large";
};

interface inputSizeI {
  small: string;
  medium: string;
  large: string;
}

const inputSize: inputSizeI = {
  small: "h-10",
  medium: "h-12",
  large: "h-14",
};

const Input = ({ size = "small", ...rest }: inputrest) => {
  const [field, meta] = useField<string>(rest.name);
  console.log(meta);
  return (
    <div className="w-full">
      <label className={rest.labelClassName}>{rest.label}</label>
      <input
        className={`${inputSize[size]} w-full outline-2 ${
          meta.error && meta.touched
            ? "outline outline-red-400"
            : "focus:outline-primary"
        } ${rest.className}`}
        placeholder={rest.placeholder}
        id={rest.id}
        type={rest.type}
        {...field}
      />
      <div className="h-6">
        {meta.error && meta.touched && (
          <span className="text-red-400">{meta.error}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
