import type { ReactNode } from "react";

type CardProps = { children: ReactNode };

function Card({ children }: CardProps) {
  return (
    <div className="border rounded border-gray-200 shadow-sm my-4 p-4">
      {children}
    </div>
  );
}

type CardTitleProps = { children: ReactNode };

export function CardTitle({ children }: CardTitleProps) {
  return <h3 className="mt-4">{children}</h3>;
}

export default Card;
