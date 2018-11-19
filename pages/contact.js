import styled from "styled-components";

import Container from "../components/Container";
import { FormGroup } from "../components/Forms";

const ContactContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.light};
`;

const SubTitle = styled.p`
  margin-bottom: 24px;
  margin-top: 8px;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

export default () => (
  <ContactContainer>
    <Title>Get in touch</Title>
    <SubTitle>We'd love to hear from you</SubTitle>

    <form>
      <FormGroup>
        <label>Your name</label>

        <input placeholder="Your name" />
      </FormGroup>

      <FormGroup>
        <label>Your email</label>

        <input placeholder="Your email" />
      </FormGroup>

      <FormGroup>
        <label>
          Your phone number <span>optional</span>
        </label>

        <input placeholder="Your phone number" />
      </FormGroup>

      <FormGroup>
        <label>Your message</label>

        <p>
          Want us to keep you posted on the latest at SEDS, or you want to get
          in touch with us. Just leave us a message here. We are always happy to
          make new friends
        </p>

        <textarea rows="5" placeholder="Your message" />
      </FormGroup>

      <button type="submit">Send message</button>
    </form>
  </ContactContainer>
);
