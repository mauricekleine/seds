import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

type Props = {
  alt: string;
  name: string;
  title?: string;
};

function Image({ alt, name, title }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageRef.current) {
      return;
    }

    if (imageRef.current.complete) {
      setIsImageLoaded(true);
    }

    if (document.documentElement.clientWidth > 768) {
      imageRef.current.src = `/${name}@2x.jpg`;
    }
  }, []);

  return (
    <div className="relative">
      {isImageLoaded ? null : (
        <div className="animate-pulse w-full bg-gray-100 h-64 md:h-96"></div>
      )}

      <img
        alt={alt}
        className={classNames("w-full m-0 max-h-64 md:max-h-96 object-cover", {
          hidden: !isImageLoaded,
        })}
        onLoad={() => setIsImageLoaded(true)}
        ref={imageRef}
        src={`/${name}@1x.jpg`}
      />

      {title ? (
        <div className="bg-gray-800 bg-opacity-75 absolute bottom-0 left-0 p-4">
          <h1 className="text-white text-3xl sm:text-4xl font-display m-0">
            {title}
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default Image;
