type Props = {
  alt: string;
  name: string;
  title?: string;
};

function Image({ alt, name, title }: Props) {
  return (
    <div className="relative">
      <img
        alt={alt}
        className="w-full bg-surface-tertiary m-0 h-64 md:h-96 object-cover"
        src={`/${name}@1x.jpg`}
        srcSet={`/${name}@1x.jpg 1x, /${name}@2x.jpg 2x`}
      />

      {title ? (
        <div className="bg-black/75 absolute bottom-0 left-0 p-4">
          <h1 className="text-white text-3xl sm:text-4xl font-display m-0">
            {title}
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default Image;
