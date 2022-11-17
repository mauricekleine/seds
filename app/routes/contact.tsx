import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useSearchParams, useSubmit, useTransition } from "@remix-run/react";
import type { FormEventHandler } from "react";
import { useRef } from "react";
import { object, string } from "yup";

import DonorCard from "~/components/donor-card";
import FormGroup from "~/components/ui/form-group";
import VolunteerCard from "~/components/volunteer-card";

const schema = object().shape({
  email: string().required("Please submit your email address"),
  message: string().required("Please submit a message"),
  name: string().required("Please submit your name"),
  phonenumber: string(),
});

export const action: ActionFunction = async ({ request }) => {
  const mailchimp = require("@mailchimp/mailchimp_transactional")(
    process.env.MANDRILL_API_KEY
  );

  const form = await request.formData();

  const email = form.get("email");
  const message = form.get("message");
  const name = form.get("name");
  const phonenumber = form.get("phonenumber");
  const token = form.get("token");

  const isValid = await schema.isValid({
    email,
    message,
    name,
    phonenumber,
  });

  if (!isValid) {
    return redirect("/contact?error=true");
  }

  if (process.env.NODE_ENV === "production") {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?response=${token}&secret=${process.env.RECAPTCHA_SECRET_KEY}`,
      {
        method: "POST",
      }
    );

    const recaptchaData: { success: boolean } = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return redirect("/contact?error=true");
    }
  }

  const mail = {
    to: [
      { email: "info@sedsngo.org", type: "to" },
      { email, name, type: "cc" },
    ],
    from_email: "info@sedsngo.org",
    from_name: "SEDS Contact Form",
    subject: `New message from ${name} <${email}>`,
    text: message,
    html: `
    <div>
      <h3>Details</h3>

      <table>
        <tr>
          <td>Name:</td>
          <td>${name}</td>
        </tr>

        <tr>
          <td>Email:</td>
          <td>${email}</td>
        </tr>

        ${
          phonenumber &&
          `<tr>
          <td>Phone number:</td>
          <td>${phonenumber}</td>
        </tr>`
        }
      </table>
    
      <h3>Message</h3>

      <p>${message}</p>
    </div>
  `,
  };

  try {
    await mailchimp.messages.send({ message: mail });

    return redirect("/contact?success=true");
  } catch (err) {
    return redirect("/contact?error=true");
  }
};

export const meta: MetaFunction = () => ({
  description:
    "Want us to keep you posted on the latest at SEDS, or you want to get in touch with us. Just leave us a message here. We are always happy to make new friends",
  title: "SEDS | Contact Us",
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const transition = useTransition();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (!form) {
      return;
    }

    // @ts-ignore
    if (!window.hasOwnProperty("grecaptcha")) {
      return submit(event.currentTarget);
    }

    // @ts-ignore
    window.grecaptcha.ready(() => {
      // @ts-ignore
      window.grecaptcha
        .execute("6LdRqWAfAAAAAIn3HEtC2rKXT9JD-1k4bysQF93O", {
          action: "submit",
        })
        .then((token: string) => {
          const formData = new FormData(form);
          formData.set("token", token);

          submit(formData, { method: "post" });
          window.scrollTo({ top: 0 });
        });
    });
  };

  return (
    <>
      {searchParams.get("error") ? (
        <div className="bg-red-500 px-4 py-2 text-white mt-4 rounded">
          Something went wrong, please try again.
        </div>
      ) : null}

      {searchParams.get("success") ? (
        <div className="bg-green-600 px-4 py-2 text-white mt-4 rounded">
          Thank you for your message, we'll get back to you soon!
        </div>
      ) : null}

      <div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <VolunteerCard />
          </div>

          <div className="flex-1">
            <DonorCard />
          </div>
        </div>
      </div>

      <div>
        <form
          className="border px-6 py-4 rounded"
          method="post"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <h3 className="font-display">Get in touch</h3>

          <p>We&apos;d love to hear from you</p>

          <FormGroup>
            <label className="font-display" htmlFor="name">
              Your name
            </label>

            <input
              className="border border-gray-400 rounded-md focus:ring-green-600 focus:border-green-600"
              id="name"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <label className="font-display" htmlFor="email">
              Your email
            </label>

            <input
              className="border border-gray-400 rounded-md focus:ring-green-600 focus:border-green-600"
              id="email"
              name="email"
              placeholder="Your email"
              required
              type="email"
            />
          </FormGroup>

          <FormGroup>
            <label className="font-display" htmlFor="phonenumber">
              <span>Your phone number </span>

              <span className="text-gray-700 text-sm">(optional)</span>
            </label>

            <input
              className="border border-gray-400 rounded-md focus:ring-green-600 focus:border-green-600"
              id="phonenumber"
              name="phonenumber"
              placeholder="Your phone number"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <label className="font-display" htmlFor="message">
              Your message
            </label>

            <span>
              Want us to keep you posted on the latest at SEDS, or you want to
              get in touch with us. Just leave us a message here. We are always
              happy to make new friends.
            </span>

            <textarea
              className="border border-gray-400 rounded-md focus:ring-green-600 focus:border-green-600"
              id="message"
              name="message"
              placeholder="Your message"
              required
              rows={5}
            />
          </FormGroup>

          <button
            className="bg-green-600 px-4 py-2 rounded text-white"
            disabled={transition.state === "submitting"}
            type="submit"
          >
            {transition.state === "loading"
              ? "We've received your message!"
              : "Send message"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
