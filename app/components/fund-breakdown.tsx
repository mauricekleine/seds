import type { ReactNode } from "react";

type BreakdownItem = {
  icon: ReactNode;
  amount: string;
  description: string;
};

type Props = {
  items: BreakdownItem[];
  title?: string;
};

export default function FundBreakdown({ items, title }: Props) {
  return (
    <div className="mb-6">
        {title && (
          <p className="text-sm font-semibold text-content-primary mb-3 m-0">{title}</p>
        )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-surface-secondary border border-outline rounded-lg p-3"
          >
            <div className="text-green-600 flex-shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-content-primary text-sm m-0">
                {item.amount}
              </p>
              <p className="text-xs text-content-secondary m-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
