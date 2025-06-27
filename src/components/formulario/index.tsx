import React from "react";
import Button from "../button";

interface FormProps {
  onClick: () => void;
  count: number;
}

export const Form = ({ onClick, count }: FormProps) => {
  return (
    <div>
      Form
     <pre> {count}</pre>
      <Button onClick={onClick}>Enviar</Button>
    </div>
  );
};
