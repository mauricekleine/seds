import { useEffect, useCallback } from "react";
import { X, MapPin, Quotes } from "phosphor-react";
import type { Mandal } from "./map-data";

type Props = {
  mandal: Mandal;
  onClose: () => void;
};

export default function MandalModal({ mandal, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-label={`${mandal.name} mandal details`}
    >
        <div
          className="bg-surface-primary rounded-lg shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >

        <div className="bg-green-600 text-white p-5 rounded-t-lg flex justify-between items-start">
          <div>
            <h2 className="font-display text-2xl m-0">{mandal.name}</h2>
            <p className="text-green-100 text-sm m-0 mt-1 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {mandal.villages} villages
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <div>
              <h3 className="text-sm font-semibold text-content-primary mb-2">
                Key Statistics
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {mandal.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface-secondary rounded-lg p-3 text-center"
                  >
                    <p className="font-display text-lg text-green-600 m-0">
                      {stat.value}
                    </p>
                    <p className="text-xs text-content-secondary m-0">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-content-primary mb-2">
                Active Programs
              </h3>

            <div className="flex flex-wrap gap-2">
              {mandal.programs.map((program) => (
                <span
                  key={program}
                  className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200"
                >
                  {program}
                </span>
              ))}
            </div>
          </div>

            {mandal.stories.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-content-primary mb-2">
                  Community Voices
                </h3>
                {mandal.stories.map((story, i) => (
                  <div
                    key={i}
                    className="bg-surface-secondary border border-outline rounded-lg p-4"
                  >
                    <Quotes className="w-5 h-5 text-green-600 mb-2" />
                    <p className="text-sm text-content-secondary italic m-0">
                      {story.quote}
                    </p>
                    <p className="text-xs text-content-tertiary mt-2 m-0">
                      — {story.author}
                    </p>
                  </div>
                ))}
              </div>
            )}

        </div>
      </div>
    </div>
  );
}
