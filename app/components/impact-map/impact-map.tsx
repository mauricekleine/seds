import { useState } from "react";
import { mandals } from "./map-data";
import type { Mandal } from "./map-data";
import MandalModal from "./mandal-modal";

type Props = {
  compact?: boolean;
};

export default function ImpactMap({ compact }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedMandal, setSelectedMandal] = useState<Mandal | null>(null);

    return (
      <>
        <div className={compact ? "" : "bg-surface-primary border border-outline rounded-lg shadow-sm p-4 md:p-6"}>

        <svg
          viewBox="50 40 420 380"
          className="w-full max-w-md mx-auto block"
          role="img"
          aria-label="Map of SEDS impact areas across 5 mandals in Anantapur district"
        >
          <title>SEDS Impact Map - Anantapur District</title>
          {mandals.map((mandal) => {
            const isHovered = hoveredId === mandal.id;
            return (
              <g key={mandal.id}>
                <path
                  d={mandal.svgPath}
                  fill={isHovered ? mandal.color : mandal.color + "99"}
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(0 4px 6px rgba(0,0,0,0.2))"
                      : "none",
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                    transformOrigin: "center",
                  }}
                  onMouseEnter={() => setHoveredId(mandal.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedMandal(mandal)}
                  role="button"
                  aria-label={`${mandal.name} - ${mandal.villages} villages. Click for details.`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedMandal(mandal);
                    }
                  }}
                />
                <text
                  x={getCentroid(mandal.svgPath).x}
                  y={getCentroid(mandal.svgPath).y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none select-none"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                >
                  {mandal.name}
                </text>
                <text
                  x={getCentroid(mandal.svgPath).x}
                  y={getCentroid(mandal.svgPath).y + 14}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none select-none"
                  fill="white"
                  fontSize="9"
                  opacity="0.9"
                >
                  {mandal.villages} villages
                </text>
              </g>
            );
          })}
        </svg>

          {!compact && (
            <p className="text-xs text-content-tertiary text-center mt-3 m-0">
              Click on a region to explore SEDS programs and impact data
            </p>
          )}

      </div>

      {selectedMandal && (
        <MandalModal
          mandal={selectedMandal}
          onClose={() => setSelectedMandal(null)}
        />
      )}
    </>
  );
}

function getCentroid(pathData: string): { x: number; y: number } {
  const coords = pathData
    .replace(/[MLZ]/g, "")
    .trim()
    .split(/\s+/)
    .reduce<number[][]>((acc, val, i, arr) => {
      if (i % 2 === 0 && i + 1 < arr.length) {
        acc.push([parseFloat(val), parseFloat(arr[i + 1])]);
      }
      return acc;
    }, []);

  const x = coords.reduce((sum, c) => sum + c[0], 0) / coords.length;
  const y = coords.reduce((sum, c) => sum + c[1], 0) / coords.length;
  return { x, y };
}
