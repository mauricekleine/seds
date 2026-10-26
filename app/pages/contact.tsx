import { useSearchParams, useFormSubmission } from "~/navigation";
import type { FormEventHandler } from "react";
import { useRef } from "react";

import DonorCard from "~/components/donor-card";
import FormGroup from "~/components/ui/form-group";
import VolunteerCard from "~/components/volunteer-card";

export const meta = () => ({
  description:
    "Want us to keep you posted on the latest at SEDS, or you want to get in touch with us. Just leave us a message here. We are always happy to make new friends",
  title: "SEDS | Contact Us",
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParams] = useSearchParams();
  const { submit, transition } = useFormSubmission("contact");

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
          Sorry — something went wrong. Please try again or email us directly at
          info@sedsngo.org.
        </div>
      ) : null}

      {searchParams.get("success") ? (
        <div className="bg-green-600 px-4 py-2 text-white mt-4 rounded">
          Thank you for reaching out. We'll be in touch soon.
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
          <h3 className="font-display">Get in touch.</h3>

          <p>
            Questions about our programs, volunteering, or partnerships? Send a
            message and we'll respond within 3–5 business days.
          </p>

          <FormGroup>
            <label className="font-display" htmlFor="name">
              Your name
            </label>

            <input
              className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
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
              className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
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

              <span className="text-content-secondary text-sm">(optional)</span>
            </label>

            <input
              className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
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
              className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
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
