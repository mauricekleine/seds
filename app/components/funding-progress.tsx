import { useEffect, useRef, useState } from "react";

type Props = {
  current: number;
  goal: number;
  label?: string;
};

export default function FundingProgress({ current, goal, label }: Props) {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(percentage);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={ref} className="mb-6">
        {label && (
          <p className="text-sm font-semibold text-content-primary mb-2 m-0">{label}</p>
        )}
        <div className="flex justify-between text-sm text-content-secondary mb-1">

        <span>
          {"₹" + current.toLocaleString("en-IN")} raised
        </span>
        <span>
          Goal: {"₹" + goal.toLocaleString("en-IN")}
        </span>
      </div>
        <div className="w-full bg-surface-tertiary rounded-full h-3 overflow-hidden">

        <div
          className="bg-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-xs text-green-600 font-semibold mt-1 m-0">
        {percentage}% funded
      </p>
    </div>
  );
}
