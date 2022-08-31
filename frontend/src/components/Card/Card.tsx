import React from "react";
type cardProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
  bordered?: boolean;
  className?: string;
};
const Card = (props: cardProps) => {
  return (
    <div
      className={`rounded-md ${props.bordered && "border"} shadow ${
        props.className
      }`}
    >
      {props.title && <div className="border-b p-2">{props.title}</div>}
      <div className="p-2">{props.children}</div>
    </div>
  );
};
export default Card;
