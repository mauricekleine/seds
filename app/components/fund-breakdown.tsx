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
        <p className="text-sm font-semibold text-gray-800 mb-3 m-0">{title}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            <div className="text-green-600 flex-shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm m-0">
                {item.amount}
              </p>
              <p className="text-xs text-gray-600 m-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
