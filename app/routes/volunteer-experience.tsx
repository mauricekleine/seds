import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { EnvelopeSimple, CaretDown, CaretUp } from "phosphor-react";
import VolunteerTimeline from "~/components/volunteer-timeline";

export const meta: MetaFunction = () => ({
  title: "Volunteer Experience - SEDS",
  description:
    "Discover what it's like to volunteer at SEDS. Explore the 2-week journey from orientation to community immersion in rural Andhra Pradesh.",
});

const faqs = [
  {
    question: "What is the minimum commitment?",
    answer:
      "A minimum of 1 month for general volunteering, and 6 months for teaching positions at the SEDS school.",
  },
  {
    question: "Is accommodation provided?",
    answer:
      "Yes, volunteers stay on the SEDS campus with basic but comfortable accommodation. Meals are provided.",
  },
  {
    question: "Do I need to speak Telugu?",
    answer:
      "No, English is widely spoken at SEDS. Staff will assist with local language communication during village visits.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable clothing suitable for warm weather, sunscreen, any personal medications, and an open mind. Detailed packing guidance is sent after application.",
  },
  {
    question: "How do I apply?",
    answer:
      "Send an email to info@sedsngo.org with your background, areas of interest, and preferred dates. We'll get back to you within a week.",
  },
];

export default function VolunteerExperience() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="not-prose">
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              A volunteer experience grounded in community.
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto m-0">
              Volunteers work alongside local teams on real projects—supporting students, assisting farmers, and contributing to conservation efforts.
            </p>
        </div>
      </section>

      <section className="py-12 bg-surface-primary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <h2 className="font-display text-2xl text-content-primary mb-6">
              2-Week Timeline
            </h2>
            <VolunteerTimeline />
          </div>
        </section>

        <section className="py-12 bg-surface-secondary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <h2 className="font-display text-2xl text-content-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-surface-primary border border-outline rounded-lg"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-content-primary text-sm">
                      {faq.question}
                    </span>
                    {openFaq === i ? (
                      <CaretUp className="w-4 h-4 text-content-tertiary flex-shrink-0" />
                    ) : (
                      <CaretDown className="w-4 h-4 text-content-tertiary flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-content-secondary m-0">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-surface-primary">
          <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
            <h2 className="font-display text-2xl text-content-primary mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-content-secondary mb-6 max-w-lg mx-auto m-0">
              Join over 300 volunteers from around the world who have enriched
              their lives through SEDS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@sedsngo.org?subject=Volunteer%20Application"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors no-underline"
              >
                <EnvelopeSimple className="w-5 h-5" />
                Apply Now
              </a>
              <Link
                to="/volunteers"
                className="inline-flex items-center justify-center bg-surface-tertiary text-content-primary px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-colors no-underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
