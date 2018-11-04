import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default styled(FontAwesomeIcon)`
  color: ${({ theme: { colors } }) => colors.descriptive};
`;
