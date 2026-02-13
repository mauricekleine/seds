const partners = [
  { name: "Government of Andhra Pradesh", abbr: "GoAP" },
  { name: "National Bank for Agriculture and Rural Development", abbr: "NABARD" },
  { name: "District Rural Development Agency", abbr: "DRDA" },
  { name: "Watershed Development Fund", abbr: "WDF" },
  { name: "European Union", abbr: "EU" },
  { name: "Swiss Agency for Development and Cooperation", abbr: "SDC" },
];

function PartnersSection() {
  return (
      <section className="py-12 bg-surface-primary border-t border-outline">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
              Our Partners
            </h2>
            <p className="text-content-secondary max-w-xl mx-auto m-0">
              Working together with government agencies and international
              organizations to create lasting change
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.abbr}
                className="flex flex-col items-center justify-center bg-surface-secondary border border-outline rounded-lg p-5 text-center"
              >
                <span className="font-display text-lg text-green-700 mb-1">
                  {partner.abbr}
                </span>
                <span className="text-xs text-content-tertiary leading-snug">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default PartnersSection;
