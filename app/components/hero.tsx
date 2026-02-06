type HeroProps = {
  imageName: string;
  imageAlt: string;
};

function Hero({ imageName, imageAlt }: HeroProps) {
  return (
    <section className="relative">
      <img
        alt={imageAlt}
        className="w-full bg-gray-100 m-0 h-[400px] md:h-[500px] object-cover"
        src={`/${imageName}@1x.jpg`}
        srcSet={`/${imageName}@1x.jpg 1x, /${imageName}@2x.jpg 2x`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="container mx-auto lg:max-w-screen-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-display m-0 mb-4 leading-tight">
            Towards a Greener Tomorrow
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl m-0">
            Transforming rural communities through sustainable development since 1980
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
