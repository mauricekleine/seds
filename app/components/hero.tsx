import { calculateSEDSYears } from "~/utils/seds-years";

type HeroProps = {
  imageName: string;
  imageAlt: string;
};

function Hero({ imageName, imageAlt }: HeroProps) {
  const years = calculateSEDSYears();

  return (
    <section className="relative">
      <img
        alt={imageAlt}
        className="w-full bg-surface-tertiary m-0 h-[400px] md:h-[500px] object-cover"
        src={`/${imageName}@1x.jpg`}
        srcSet={`/${imageName}@1x.jpg 1x, /${imageName}@2x.jpg 2x`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <div className="bg-surface-primary/95 backdrop-blur-sm rounded-lg px-4 py-3 text-center shadow-lg">
          <span
            className="block text-3xl md:text-4xl font-display text-green-700 leading-none"
            data-seds-years
          >
            {years}
          </span>
          <span className="text-xs md:text-sm font-semibold text-content-secondary uppercase tracking-wider">
            Years of Impact
          </span>
        </div>
      </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto lg:max-w-screen-md">

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-display m-0 mb-4 leading-tight">
                Building climate‑resilient livelihoods in rural India.
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl m-0">
                SEDS partners with farming communities in Andhra Pradesh to improve incomes, protect natural resources, and expand access to education.
              </p>
          </div>
        </div>
    </section>
  );
}

export default Hero;
