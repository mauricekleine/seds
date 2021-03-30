import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  color: ${({ color, theme: { colors } }) => color || colors.descriptive};
`;

export default Icon;
