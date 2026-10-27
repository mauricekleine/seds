import { useSearchParams, useFormSubmission } from "~/navigation";
import type { FormEventHandler } from "react";
import { useRef } from "react";

import FormGroup from "~/components/ui/form-group";

export const meta = () => ({
  description:
    "Collaborate with SEDS on tech-forward, scalable solutions for rural livelihoods in Andhra Pradesh.",
  title: "SEDS | Collaborate With Us",
});

const Collaborate = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParams] = useSearchParams();
  const { submit, transition } = useFormSubmission("collaborate");

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
    <div className="mx-auto lg:max-w-screen-md px-6 lg:px-0 py-8">
      {searchParams.get("error") ? (
        <div className="bg-red-500 px-4 py-2 text-white mt-4 rounded">
          Sorry — something went wrong. Please try again or email us directly at
          info@sedsngo.org.
        </div>
      ) : null}

      {searchParams.get("success") ? (
        <div className="bg-green-600 px-4 py-2 text-white mt-4 rounded">
          Thank you for reaching out. We will review your proposal and respond
          soon.
        </div>
      ) : null}

      <div className="mb-6">
        <h1 className="font-display text-3xl text-content-primary mb-2">
          Partner & Innovate With Us
        </h1>

        <p className="text-content-secondary">
          Collaborate on tech-forward, scalable solutions for rural livelihoods
          in Andhra Pradesh — from agri-tech pilots to transparent impact
          systems.
        </p>
      </div>

      <form
        className="border px-6 py-4 rounded"
        method="post"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <h3 className="font-display">Tell us about your collaboration idea.</h3>

        <p>
          Share your organization, expertise, and what you hope to build with
          SEDS.
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
          <label className="font-display" htmlFor="organization">
            Organization
          </label>

          <input
            className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
            id="organization"
            name="organization"
            placeholder="Organization"
            required
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <label className="font-display" htmlFor="role">
            Role / discipline
          </label>

          <input
            className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
            id="role"
            name="role"
            placeholder="Engineer, researcher, investor, policy, etc."
            required
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <label className="font-display" htmlFor="focus">
            Focus area
          </label>

          <input
            className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
            id="focus"
            name="focus"
            placeholder="Agri-tech, data systems, fintech, education, climate, etc."
            required
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <label className="font-display" htmlFor="phonenumber">
            <span>Phone number </span>

            <span className="text-content-secondary text-sm">(optional)</span>
          </label>

          <input
            className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
            id="phonenumber"
            name="phonenumber"
            placeholder="Phone number"
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <label className="font-display" htmlFor="message">
            Collaboration idea
          </label>

          <span>
            Briefly describe what you want to build or pilot with SEDS in rural
            Andhra Pradesh.
          </span>

          <textarea
            className="border border-outline rounded-md focus:ring-green-600 focus:border-green-600"
            id="message"
            name="message"
            placeholder="Your collaboration idea"
            required
            rows={6}
          />
        </FormGroup>

        <button
          className="bg-green-600 px-4 py-2 rounded text-white"
          disabled={transition.state === "submitting"}
          type="submit"
        >
          {transition.state === "loading"
            ? "We've received your proposal!"
            : "Submit proposal"}
        </button>
      </form>
    </div>
  );
};

export default Collaborate;
