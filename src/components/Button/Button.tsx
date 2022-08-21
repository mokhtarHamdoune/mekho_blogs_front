import React from "react";

type btnType = {
  children: React.ReactNode;
  type?: "primary" | "danger" | "default";
  htmlType?: "button" | "submit";
  className?: string;
  size?: "small" | "medium" | "large";
  icon?: JSX.Element;
};

interface sizesI {
  small: string;
  medium: string;
  large: string;
}

const btnSize: sizesI = {
  small: "py-2 px-4",
  medium: "py-3 px-6",
  large: "py-4 px-8",
};

const btnType: { primary: string; danger: string; default: string } = {
  primary: "bg-primary",
  danger: "bg-danger",
  default: "bg-default",
};

const Button = ({ type = "default", size = "small", ...rest }: btnType) => {
  return (
    <button
      className={`${btnType[type]} ${
        btnSize[size]
      } flex justify-center items-center gap-x-2 text-white rounded-md ${
        rest.className ? rest.className : ""
      }`}
    >
      {rest.icon}
      {rest.children}
    </button>
  );
};

export default Button;
