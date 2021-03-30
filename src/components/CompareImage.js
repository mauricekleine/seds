import { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";

import { mediumWidth } from "../theme/media";

const CompareImage = ({ caption, name }) => {
  let [imageDimensions, setImageDimensions] = useState(1);

  useEffect(() => {
    if (document.documentElement.clientWidth > mediumWidth) {
      setImageDimensions(2);
    }
  }, [name]);

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
