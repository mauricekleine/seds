import { useEffect } from "react";
import ReactCompareImage from "react-compare-image";

import { mediumWidth } from "../theme/media";

const CompareImage = ({ caption, name }) => {
  let imageDimensions;

  useEffect(() => {
    imageDimensions =
      document.documentElement.clientWidth < mediumWidth ? 1 : 2;
  }, []);

  return (
    <>
      {imageDimensions && (
        <ReactCompareImage
          leftImage={`/before-after/${name}-before@${imageDimensions}x.jpg`}
          rightImage={`/before-after/${name}-after@${imageDimensions}x.jpg`}
        />
      )}

      {caption && <small>{caption}</small>}
    </>
  );
};

export default CompareImage;
