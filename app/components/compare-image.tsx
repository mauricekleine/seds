import { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";

type Props = {
  caption?: string;
  name: string;
};

const CompareImage = ({ caption, name }: Props) => {
  const [imageDimensions, setImageDimensions] = useState(1);

  useEffect(() => {
    if (document.documentElement.clientWidth > 768) {
      setImageDimensions(2);
    }
  }, [name]);

  return (
    <>
      {imageDimensions ? (
        <ReactCompareImage
          leftImage={`/before-after/${name}-before@${imageDimensions}x.jpg`}
          leftImageCss={{
            margin: 0,
          }}
          rightImage={`/before-after/${name}-after@${imageDimensions}x.jpg`}
          rightImageCss={{
            margin: 0,
          }}
        />
      ) : null}

      {caption ? <small>{caption}</small> : null}
    </>
  );
};

export default CompareImage;
