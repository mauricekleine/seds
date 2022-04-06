import { ActionFunction, MetaFunction, json } from "@remix-run/node";
import { useTransition } from "@remix-run/react";
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
    process.env.MAILCHIMP_API_KEY
  );

  const form = await request.formData();

  const email = form.get("email");
  const message = form.get("message");
  const name = form.get("name");
  const phonenumber = form.get("phonenumber");

  const isValid = await schema.isValid({
    email,
    message,
    name,
    phonenumber,
  });

  if (!isValid) {
    return json("Form not submitted correctly.", { status: 400 });
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
          <td>Name</td>
          <td>${name}</td>
        </tr>

        <tr>
          <td>Email</td>
          <td>${email}</td>
        </tr>

        ${
          phonenumber &&
          `<tr>
          <td>Phonenumber</td>
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
    const response = await mailchimp.messages.send({ message: mail });

    return json("Email sent");
  } catch (err) {
    return json("Something went wrong", { status: 500 });
  }
};

export const meta: MetaFunction = () => ({
  description:
    "Want us to keep you posted on the latest at SEDS, or you want to get in touch with us. Just leave us a message here. We are always happy to make new friends",
  title: "SEDS | Contact Us",
});

const Contact = () => {
  const transition = useTransition();

  return (
    <>
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
        <form className="border px-6 py-4 rounded" method="post">
          <h3 className="font-display">Get in touch</h3>

          <p>We&apos;d love to hear from you</p>

          <FormGroup>
            <label className="font-display" htmlFor="name">
              Your name
            </label>

            <input id="name" name="name" placeholder="Your name" type="text" />
          </FormGroup>

          <FormGroup>
            <label className="font-display" htmlFor="email">
              Your email
            </label>

            <input
              id="email"
              name="email"
              placeholder="Your email"
              type="email"
            />
          </FormGroup>

          <FormGroup>
            <label className="font-display" htmlFor="phonenumber">
              Your phone number{" "}
              <span className="text-gray-700 text-sm">(optional)</span>
            </label>

            <input
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
              id="message"
              name="message"
              placeholder="Your message"
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

          {/* {hasApiErrors && (
            <span className="text-red-500 text-sm">
              Something went wrong, please try again.
            </span>
          )} */}
        </form>
      </div>
    </>
  );
};

export default Contact;
