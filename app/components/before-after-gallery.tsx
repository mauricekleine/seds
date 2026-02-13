import { useState, useCallback, useEffect } from "react";
import CompareImage from "~/components/compare-image";

const comparisons = [
  {
    name: "checkdam",
    caption: "Check dam construction restoring water tables in degraded terrain",
    leftYear: "Early 1980s",
    rightYear: "Late 1990s",
    narrative:
      "Barren terrain transformed into a thriving ecosystem through systematic check dam construction",
  },
  {
    name: "valley",
    caption: "Valley greening through watershed management and reforestation",
    leftYear: "Before 1985",
    rightYear: "After 2000",
    narrative:
      "Decades of reforestation turned dry valleys into lush green landscapes",
  },
  {
    name: "wasteland",
    caption: "Barren wasteland transformed into productive agricultural land",
    leftYear: "Before Intervention",
    rightYear: "After Restoration",
    narrative:
      "Wasteland reclamation bringing life back to degraded soil through watershed management",
  },
];

function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i > 0 ? i - 1 : comparisons.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i < comparisons.length - 1 ? i + 1 : 0));
      } else if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const current = comparisons[activeIndex];

  return (
    <>
      <section className="py-12 bg-surface-secondary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
              Transformation in Action
            </h2>
            <p className="text-content-secondary max-w-xl mx-auto m-0">
              Drag the slider to see how watershed restoration has transformed
              Anantapur's landscape. Use arrow keys to navigate.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {comparisons.map((item, index) => (
              <div
                key={item.name}
                className="bg-surface-primary rounded-lg overflow-hidden shadow-sm border border-outline"
              >
                <CompareImage
                  name={item.name}
                  leftYear={item.leftYear}
                  rightYear={item.rightYear}
                />
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-content-primary m-0">
                    {item.caption}
                  </p>
                  <p className="text-xs text-content-tertiary m-0 mt-1">
                    {item.narrative}
                  </p>
                  <button
                    onClick={() => {
                      setActiveIndex(index);
                      setIsFullscreen(true);
                    }}
                    className="text-xs text-green-600 hover:text-green-700 mt-2 font-medium"
                  >
                    View fullscreen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
          role="dialog"
          aria-label="Fullscreen image comparison"
        >
          <div
            className="w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 px-2">
              <p className="text-white text-sm m-0">{current.caption}</p>
              <button
                onClick={() => setIsFullscreen(false)}
                className="text-white hover:text-white/70 text-2xl leading-none"
                aria-label="Close fullscreen"
              >
                &times;
              </button>
            </div>
            <CompareImage
              name={current.name}
              leftYear={current.leftYear}
              rightYear={current.rightYear}
            />
            <div className="flex justify-center gap-2 mt-4">
              {comparisons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === activeIndex ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`View comparison ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BeforeAfterGallery;
