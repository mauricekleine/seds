import {
  ErrorMessage as FormikErrorMessage,
  Field,
  Form,
  Formik
} from "formik";
import Head from "next/head";
import { Component, Fragment } from "react";
import styled from "styled-components";
import { object, string } from "yup";

import { DonorCard, VolunteerCard } from "../components/Cards";
import Container from "../components/Container";
import Flex, { FlexContainer } from "../components/Flex";
import { FormGroup } from "../components/Forms";

const ContactContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.light};
`;

const ErrorMessage = styled(FormikErrorMessage)`
  color: #e3a554;
  font-size: 14px;
`;

const ErrorSpan = styled.span`
  color: #e3a554;
`;

const SubTitle = styled.p`
  margin-bottom: 24px;
  margin-top: 8px;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

export default class Contact extends Component {
  state = {
    hasApiErrors: false,
    hasSubmitted: false
  };

  render() {
    const { hasApiErrors, hasSubmitted } = this.state;

    return (
      <Fragment>
        <Container>
          <Head>
            <title>SEDS - Contact Us</title>
          </Head>

          <FlexContainer parent>
            <Flex flex={1}>
              <VolunteerCard />
            </Flex>

            <Flex flex={1}>
              <DonorCard />
            </Flex>
          </FlexContainer>
        </Container>

        <ContactContainer>
          <Title>Get in touch</Title>
          <SubTitle>We'd love to hear from you</SubTitle>

          <Formik
            initialValues={{
              email: "",
              message: "",
              name: "",
              phonenumber: ""
            }}
            onSubmit={async (
              { email, message, name, phonenumber },
              { setSubmitting }
            ) => {
              try {
                const res = await fetch("/api/contact", {
                  method: "post",
                  headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ email, message, name, phonenumber })
                });

                if (res.status === 200) {
                  this.setState({ hasSubmitted: true });
                } else {
                  this.setState({ hasApiErrors: true });
                }

                setSubmitting(false);
              } catch (err) {
                this.setState({ hasApiErrors: true });
                setSubmitting(false);
              }
            }}
            validationSchema={object().shape({
              email: string().required("Please submit your email address"),
              message: string().required("Please submit a message"),
              name: string().required("Please submit your name"),
              phonenumber: string()
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormGroup>
                  <label>Your name</label>

                  <Field
                    disabled={hasSubmitted}
                    name="name"
                    placeholder="Your name"
                  />
                  <ErrorMessage name="name" component="div" />
                </FormGroup>

                <FormGroup>
                  <label>Your email</label>

                  <Field
                    disabled={hasSubmitted}
                    name="email"
                    placeholder="Your email"
                    type="email"
                  />
                  <ErrorMessage name="email" component="div" />
                </FormGroup>

                <FormGroup>
                  <label>
                    Your phone number <span>optional</span>
                  </label>

                  <Field
                    disabled={hasSubmitted}
                    name="phonenumber"
                    placeholder="Your phone number"
                  />
                  <ErrorMessage name="phonenumber" component="div" />
                </FormGroup>

                <FormGroup>
                  <label>Your message</label>

                  <p>
                    Want us to keep you posted on the latest at SEDS, or you
                    want to get in touch with us. Just leave us a message here.
                    We are always happy to make new friends
                  </p>

                  <Field
                    component="textarea"
                    disabled={hasSubmitted}
                    name="message"
                    placeholder="Your message"
                    rows="5"
                  />
                  <ErrorMessage name="message" component="div" />
                </FormGroup>

                <button
                  disabled={hasSubmitted || isSubmitting}
                  type="submit"
                >
                  {hasSubmitted
                    ? "We've received your message!"
                    : "Send message"}
                </button>

                {hasApiErrors && (
                  <ErrorSpan>Something went wrong, please try again.</ErrorSpan>
                )}
              </Form>
            )}
          </Formik>
        </ContactContainer>
      </Fragment>
    );
  }
}
