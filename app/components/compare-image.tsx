import { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";

type Props = {
  caption?: string;
  name: string;
  leftYear?: string;
  rightYear?: string;
};

const CompareImage = ({ caption, name, leftYear, rightYear }: Props) => {
  const [imageDimensions, setImageDimensions] = useState(1);

  useEffect(() => {
    if (document.documentElement.clientWidth > 768) {
      setImageDimensions(2);
    }
  }, [name]);

  return (
    <div role="img" aria-label={`Before and after comparison: ${caption || name}`}>
      <div className="relative">
        <ReactCompareImage
          leftImage={`/before-after/${name}-before@${imageDimensions}x.jpg`}
          leftImageCss={{
            margin: 0,
          }}
          leftImageLabel={leftYear}
          rightImage={`/before-after/${name}-after@${imageDimensions}x.jpg`}
          rightImageCss={{
            margin: 0,
          }}
          rightImageLabel={rightYear}
        />
      </div>

      {caption ? <small>{caption}</small> : null}
    </div>
  );
};

export default CompareImage;
