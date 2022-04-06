import { useEffect, useState } from "react";

type Props = {
  alt: string;
  name: string;
  title?: string;
};

function Image({ alt, name, title }: Props) {
  const [imageDimensions, setImageDimensions] = useState(1);

  useEffect(() => {
    if (document.documentElement.clientWidth > 768) {
      setImageDimensions(2);
    }
  }, [name]);

  return (
    <div className="relative">
      <img
        alt={alt}
        className="w-full m-0 max-h-64 md:max-h-96 object-cover"
        height={imageDimensions === 1 ? 320 : 400}
        src={`/${name}@${imageDimensions}x.jpg`}
      />

      {title ? (
        <div className="bg-gray-800 bg-opacity-75 absolute bottom-0 left-0 p-4">
          <h1 className="text-white font-display m-0">{title}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default Image;
