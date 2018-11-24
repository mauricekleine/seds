import { Component, Fragment } from "react";
import ReactCompareImage from "react-compare-image";

import { mediumWidth } from "../theme/media";

export default class CompareImage extends Component {
  state = { imageDimensions: 0 };
  componentDidMount() {
    this.setState({
      imageDimensions:
        document.documentElement.clientWidth < mediumWidth ? 1 : 2
    });
  }

  render() {
    const { caption, name } = this.props;
    const { imageDimensions } = this.state;

    return (
      <Fragment>
        {imageDimensions && (
          <ReactCompareImage
            leftImage={`/static/before-after/${name}-before@${imageDimensions}x.jpg`}
            rightImage={`/static/before-after/${name}-after@${imageDimensions}x.jpg`}
          />
        )}

        {caption && <small>{caption}</small>}
      </Fragment>
    );
  }
}
