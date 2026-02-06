import CompareImage from "~/components/compare-image";

const comparisons = [
  {
    name: "checkdam",
    caption: "Check dam construction restoring water tables in degraded terrain",
  },
  {
    name: "valley",
    caption: "Valley greening through watershed management and reforestation",
  },
  {
    name: "wasteland",
    caption: "Barren wasteland transformed into productive agricultural land",
  },
];

function BeforeAfterGallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-gray-800 mb-3">
            Transformation in Action
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto m-0">
            Drag the slider to see how watershed restoration has transformed
            Anantapur's landscape
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {comparisons.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
            >
              <CompareImage name={item.name} />
              <p className="text-sm text-gray-600 px-4 py-3 m-0 text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterGallery;
