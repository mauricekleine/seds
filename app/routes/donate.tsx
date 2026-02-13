import type { MetaFunction } from "@remix-run/node";
import { EnvelopeSimple, Phone } from "phosphor-react";
import DonationCalculator from "~/components/donation-calculator";

export const meta: MetaFunction = () => ({
  title: "Donate - SEDS",
  description:
    "Support SEDS and help transform rural communities in Andhra Pradesh through your donation.",
});

export default function Donate() {
  return (
    <div className="not-prose">
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              Donate to build lasting change.
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto m-0">
              Your gift supports education, climate‑smart farming, and community‑led conservation in rural Andhra Pradesh.
            </p>
        </div>
        </section>

        <DonationCalculator />

        <section className="py-12 bg-surface-primary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl text-content-primary mb-4">
              How to Donate
            </h2>
              <p className="text-content-secondary leading-relaxed mb-8">
                Choose an amount and see the impact your donation can make. We accept donations via bank transfer and can
                provide tax exemption receipts under Section 80G of the Indian
                Income Tax Act. We publish regular reports so you can see where your support goes.
              </p>

            <div className="space-y-4">
              <a
                href="mailto:info@sedsngo.org?subject=Donation%20Inquiry"
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                <EnvelopeSimple className="w-6 h-6" />
                Email Us to Donate
              </a>

              <a
                href="tel:+919440579566"
                className="flex items-center justify-center gap-3 bg-surface-tertiary text-content-primary px-6 py-4 rounded-lg font-semibold hover:opacity-80 transition-colors text-lg"
              >
                <Phone className="w-6 h-6" />
                Call: +91 9440579566
              </a>
            </div>

            <div className="mt-10 bg-surface-secondary border border-outline rounded-lg p-6 text-left">
              <h3 className="font-display text-lg text-content-primary mb-3">
                Bank Transfer Details
              </h3>
              <dl className="space-y-2 text-sm text-content-secondary">
                <div className="flex justify-between">
                  <dt className="font-semibold text-content-primary">Account Name:</dt>
                  <dd>Social Education and Development Society</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-content-primary">Email:</dt>
                  <dd>info@sedsngo.org</dd>
                </div>
              </dl>
              <p className="text-xs text-content-tertiary mt-4 m-0">
                For complete bank details, please contact us via email or phone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
