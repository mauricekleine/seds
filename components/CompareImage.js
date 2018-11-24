import ReactCompareImage from "react-compare-image";

export default ({ name }) => (
  <ReactCompareImage
    leftImage={`/static/before-after/${name}-before.jpg`}
    rightImage={`/static/before-after/${name}-after.jpg`}
  />
);
