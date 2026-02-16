const partners = [
  { name: "HEKS", abbr: "HEKS", country: "Switzerland", years: "1982–1990" },
  { name: "Oxfam", abbr: "OXFAM", country: "England", years: "1982–1994" },
  { name: "CASA", abbr: "CASA", country: "India", years: "1986, 1991–1995" },
  { name: "CARD", abbr: "CARD", country: "Australia", years: "1989" },
  { name: "HIDA", abbr: "HIDA", country: "Canada", years: "1987–1996" },
  { name: "Sight Savers", abbr: "Sight Savers", country: "London", years: "1992" },
  { name: "JOFIC", abbr: "JOFIC", country: "Japan", years: "1988–2009" },
  { name: "DRDA", abbr: "DRDA", country: "Anantapur", years: "1992" },
  { name: "CAPART", abbr: "CAPART", country: "New Delhi", years: "1991–1992" },
  { name: "EZE", abbr: "EZE", country: "Germany", years: "1994–2004" },
  { name: "SIMAVI", abbr: "SIMAVI", country: "Netherlands", years: "1993–1994, 1998" },
  { name: "DPAP", abbr: "DPAP", country: "India", years: "1993–1995" },
  { name: "AFPRO", abbr: "AFPRO", country: "India", years: "1996" },
  { name: "Water-AID", abbr: "Water-AID", country: "London", years: "1997–1998" },
  { name: "ICEF/MYRADA", abbr: "ICEF/MYRADA", country: "India", years: "1999–2001" },
  { name: "APRLP", abbr: "APRLP", country: "India", years: "2002" },
  { name: "EED", abbr: "EED", country: "Germany", years: "2002–2013" },
  { name: "ICCO", abbr: "ICCO", country: "Netherlands", years: "2002–2011" },
  { name: "Bread for the World", abbr: "BftW", country: "Germany", years: "2011–2021" },
  { name: "IKI-IKI", abbr: "IKI-IKI", country: "Japan", years: "2010–2025" },
];

const marqueePartners = [...partners, ...partners];

function PartnersSection() {
  return (
    <section className="py-12 bg-surface-primary border-t border-outline">
      <div className="container mx-auto lg:max-w-screen-lg px-8 lg:px-0">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
            Our Partners
          </h2>
          <p className="text-content-secondary max-w-xl mx-auto m-0">
            Working together with government agencies and international
            organizations to create lasting change
          </p>
        </div>

        <div className="partners-marquee">
          <div className="partners-track" aria-label="Funding partners">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.abbr}-${index}`}
                  className="flex flex-col items-center justify-center bg-surface-secondary border border-outline rounded-lg p-4 text-center shrink-0 w-40 sm:w-44 lg:w-48"
                >
                  <span className="font-display text-base text-green-700 mb-1">
                    {partner.abbr}
                  </span>
                  <span className="text-xs text-content-tertiary leading-snug">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-content-tertiary leading-snug">
                    {partner.country}
                  </span>
                  <span className="text-[10px] text-content-tertiary leading-snug">
                    {partner.years}
                  </span>
                </div>
              ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
