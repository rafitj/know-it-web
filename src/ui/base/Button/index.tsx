import React from "react";
import { Button } from "antd";

export interface ButtonProps {
  color?: string;
  onClick?: () => void;
  text?: string;
  icon?: React.ReactNode;
}

export default ({ color, text, onClick, icon }: ButtonProps) => (
  <Button onClick={onClick} icon={icon}>
    {text}
  </Button>
);
