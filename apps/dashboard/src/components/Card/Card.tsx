import { CSSProperties, ReactNode } from "react";
import "./Card.css";

interface CardProps {
  className?: string;
  style?: CSSProperties;
  header?: string;
  content?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export const Card = ({
  content,
  header,
  className,
  style,
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`card-component ${className}`}
      style={{
        ...style,
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <h3>{header}</h3>
      <div className="card-details">{content}</div>
    </div>
  );
};
