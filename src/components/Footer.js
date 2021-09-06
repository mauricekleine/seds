import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import Container from "./Container";
import Flex, { FlexContainer } from "./Flex";
import Icon from "./Icon";
import Links from "./Links";

const Address = styled.address`
  font-style: normal;
`;

const ContactContainer = styled(Container)`
  border-top: 1px solid ${({ theme: { colors } }) => colors.descriptive};
  padding-top: 16px;
`;

const CopyrightContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.descriptive};
  color: ${({ theme: { colors } }) => colors.light};
  padding: 8px 16px;
  text-align: center;
`;

const ProjectsContainer = styled(Container)`
  margin: 16px 0 24px;
  padding-top: 16px;
  text-align: center;
`;

const Footer = () => (
  <footer>
    <ContactContainer>
      <FlexContainer parent>
        <Flex direction="column" flex={1}>
          <h3>Address</h3>

          <Address>
            <Flex>
              <Flex justifyContent="center" flex={1}>
                <Icon icon={faMapMarker} size="lg" style={{ paddingTop: 4 }} />
              </Flex>

              <Flex direction="column" flex={7}>
                <strong>Social Education and Development Society</strong>
                <span>Anandapuram H.O.</span>
                <span>Somandepalli Mandal</span>
                <span>Anantapur District, 515124</span>
                <span>Andhra Pradesh - INDIA</span>
              </Flex>
            </Flex>
          </Address>
        </Flex>

        <Flex direction="column" flex={1}>
          <h3>Contact info</h3>

          <Flex>
            <Flex justifyContent="center" flex={1}>
              <Icon icon={faEnvelope} size="lg" style={{ paddingTop: 2 }} />
            </Flex>

            <Flex direction="column" flex={7}>
              <span>info@sedsngo.org</span>
            </Flex>
          </Flex>

          <Flex>
            <Flex justifyContent="center" flex={1}>
              <Icon icon={faPhone} size="lg" style={{ paddingTop: 2 }} />
            </Flex>

            <Flex direction="column" flex={7}>
              <span>+91 9440579566</span>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" flex={1}>
          <h3>Social media</h3>

          <a
            href="https://www.facebook.com/pages/SEDS-Social-Education-and-Development-Society-SEDS/190839020942963"
            rel="noreferrer"
            target="_blank"
          >
            <Icon color="#3B5998" icon={faFacebookSquare} size="2x" />
          </a>
        </Flex>
      </FlexContainer>
    </ContactContainer>

    <ProjectsContainer>
      <hr />

      <h3>Our projects</h3>

      <Links />
    </ProjectsContainer>

    <CopyrightContainer>
      Copyright {new Date().getFullYear()} - All information on this site is
      part of SEDS
    </CopyrightContainer>
  </footer>
);

export default Footer;
