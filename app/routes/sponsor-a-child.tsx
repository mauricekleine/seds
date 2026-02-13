import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import {
  GraduationCap,
  Heart,
  Star,
  EnvelopeSimple,
  Books,
  CookingPot,
  TShirt,
  FirstAid,
} from "phosphor-react";

export const meta: MetaFunction = () => ({
  title: "Sponsor a Child - SEDS",
  description:
    "Sponsor a child at the SEDS campus school in Anantapur. Your sponsorship provides education, meals, and a safe learning environment for children from rural villages.",
});

const sponsorshipTiers = [
  {
    id: "education",
    name: "Education Sponsor",
    amount: 2500,
    period: "per month",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "green",
    description: "Cover school fees, textbooks, and supplies for one child",
    includes: ["School tuition fees", "Textbooks and notebooks", "School uniform", "Stationery and supplies"],
  },
  {
    id: "full",
    name: "Full Sponsor",
    amount: 5000,
    period: "per month",
    icon: <Heart className="w-6 h-6" />,
    color: "blue",
    description: "Provide complete education, hostel stay, and daily meals",
    includes: [
      "Everything in Education Sponsor",
      "Hostel accommodation",
      "Three meals daily",
      "Health check-ups",
      "Extracurricular activities",
    ],
  },
  {
    id: "annual",
    name: "Annual Sponsor",
    amount: 25000,
    period: "per year",
    icon: <Star className="w-6 h-6" />,
    color: "amber",
    description: "One-time annual sponsorship covering a child's education for the year",
    includes: [
      "Full year of school fees",
      "All learning materials",
      "Exam fees",
      "Annual field trip",
      "Progress reports sent to sponsor",
    ],
  },
];

const childProfiles = [
  {
    name: "Lakshmi R.",
    age: 9,
    grade: "Class 4",
    interest: "Science and drawing",
    story:
      "Lakshmi comes from a farming family in Roddam mandal. She loves science experiments and dreams of becoming a doctor.",
  },
  {
    name: "Ravi K.",
    age: 11,
    grade: "Class 6",
    interest: "Mathematics and cricket",
    story:
      "Ravi's parents are daily wage workers. He excels at mathematics and hopes to become an engineer to help his village.",
  },
  {
    name: "Priya S.",
    age: 8,
    grade: "Class 3",
    interest: "Reading and singing",
    story:
      "Priya is from Chilamathur mandal. She is a voracious reader and participates in every school cultural program.",
  },
  {
    name: "Arjun M.",
    age: 10,
    grade: "Class 5",
    interest: "Environmental studies and gardening",
    story:
      "Arjun helps tend the school garden and is passionate about trees. He wants to work in watershed restoration like the SEDS team.",
  },
  {
    name: "Divya P.",
    age: 12,
    grade: "Class 7",
    interest: "English and debate",
    story:
      "Divya has been at the SEDS school for 4 years. She leads the school debate team and mentors younger students.",
  },
  {
    name: "Kiran T.",
    age: 7,
    grade: "Class 2",
    interest: "Art and storytelling",
    story:
      "Kiran is the youngest in his family. His colorful drawings brighten the school hallways and he loves listening to folk tales.",
  },
];

function formatINR(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

const whatSponsorshipProvides = [
  {
    icon: <Books className="w-5 h-5" />,
    label: "Quality Education",
    detail: "English-medium schooling with environmental focus",
  },
  {
    icon: <CookingPot className="w-5 h-5" />,
    label: "Nutritious Meals",
    detail: "Three balanced meals daily at the hostel",
  },
  {
    icon: <TShirt className="w-5 h-5" />,
    label: "School Supplies",
    detail: "Uniforms, textbooks, and stationery",
  },
  {
    icon: <FirstAid className="w-5 h-5" />,
    label: "Health Care",
    detail: "Regular check-ups and basic medical care",
  },
];

export default function SponsorAChild() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="not-prose">
      {/* Hero */}
      <section className="bg-green-600 py-12">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
              Sponsor a child's education.
            </h1>
            <p className="text-green-100 max-w-2xl mx-auto m-0">
              Your sponsorship helps cover school fees, learning materials, and ongoing support so a child can stay in school and succeed.
            </p>
        </div>
      </section>

      {/* What sponsorship provides */}
      <section className="py-12 bg-surface-primary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <h2 className="font-display text-2xl text-content-primary mb-6 text-center">
              What Your Sponsorship Provides
            </h2>
            <p className="text-content-secondary text-center mb-6 m-0">
              You'll receive regular updates on progress and the impact of your support.
            </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whatSponsorshipProvides.map((item) => (
              <div
                key={item.label}
                className="text-center p-4 bg-surface-secondary rounded-lg"
              >
                <div className="text-green-600 flex justify-center mb-2">
                  {item.icon}
                </div>
                <p className="font-semibold text-content-primary text-sm m-0">
                    {item.label}
                  </p>
                  <p className="text-content-tertiary text-xs m-0 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-12 bg-surface-secondary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <h2 className="font-display text-2xl text-content-primary mb-2 text-center">
            Choose a Sponsorship Plan
          </h2>
          <p className="text-content-secondary text-center mb-8 m-0">
            Select the level of support that works for you
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    isSelected
                        ? "border-green-600 bg-green-50 dark:bg-green-900/20 shadow-md"
                        : "border-outline bg-surface-primary hover:border-green-300"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                        className={`${
                          isSelected ? "text-green-600" : "text-content-tertiary"
                        }`}
                    >
                      {tier.icon}
                    </div>
                    <h3 className="font-display text-lg text-content-primary m-0">
                      {tier.name}
                    </h3>
                    </div>
                    <div className="mb-3">
                      <span className="text-2xl font-display text-green-600">
                        {formatINR(tier.amount)}
                      </span>
                      <span className="text-content-tertiary text-sm ml-1">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-content-secondary text-sm m-0 mb-4">
                      {tier.description}
                    </p>
                    <ul className="space-y-1.5 m-0 p-0 list-none">
                      {tier.includes.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-content-secondary flex items-start gap-2"
                        >
                        <span className="text-green-500 mt-0.5">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {selectedTier && (
            <div className="mt-8 text-center">
              <a
                href={`mailto:info@sedsngo.org?subject=Child%20Sponsorship%20Inquiry%20-%20${encodeURIComponent(
                  sponsorshipTiers.find((t) => t.id === selectedTier)?.name ?? ""
                )}&body=I%20would%20like%20to%20sponsor%20a%20child%20through%20the%20${encodeURIComponent(
                  sponsorshipTiers.find((t) => t.id === selectedTier)?.name ?? ""
                )}%20plan%20(${encodeURIComponent(
                  formatINR(
                    sponsorshipTiers.find((t) => t.id === selectedTier)?.amount ?? 0
                  )
                )}%20${encodeURIComponent(
                  sponsorshipTiers.find((t) => t.id === selectedTier)?.period ?? ""
                )}).`}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors no-underline"
              >
                <EnvelopeSimple className="w-5 h-5" />
              Start Sponsoring Today
            </a>
              <p className="text-content-tertiary text-sm mt-3 m-0">
              We publish regular reports so you can see where your support goes.
            </p>
            </div>
          )}
        </div>
      </section>

      {/* Child Profiles */}
      <section className="py-12 bg-surface-primary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <h2 className="font-display text-2xl text-content-primary mb-2 text-center">
            Meet the Children
          </h2>
          <p className="text-content-secondary text-center mb-8 m-0">
            These are some of the children at the SEDS campus school awaiting sponsorship
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {childProfiles.map((child) => (
              <div
                key={child.name}
                className="bg-surface-secondary rounded-lg p-5 border border-outline"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                    <span className="text-green-700 dark:text-green-400 font-display text-lg">
                      {child.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-display text-base text-content-primary m-0">
                    {child.name}
                  </h3>
                  <p className="text-xs text-content-tertiary m-0 mt-0.5">
                    Age {child.age} &middot; {child.grade}
                  </p>
                  <p className="text-xs text-green-600 m-0 mt-1">
                    Interests: {child.interest}
                  </p>
                  <p className="text-sm text-content-secondary m-0 mt-3 leading-relaxed">
                  {child.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-surface-secondary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <h2 className="font-display text-2xl text-content-primary mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-xl mx-auto">
            {[
              {
                q: "How do I know my sponsorship is making a difference?",
                a: "Sponsors receive termly progress reports including academic performance, attendance, and a personal note from the child.",
              },
              {
                q: "Can I visit the child I sponsor?",
                a: "Yes! Sponsors are welcome to visit the SEDS campus and meet their sponsored child. Please contact us to arrange a visit.",
              },
              {
                q: "Is my donation tax-deductible?",
                a: "Yes, SEDS provides tax exemption receipts under Section 80G of the Indian Income Tax Act.",
              },
              {
                q: "Can I sponsor more than one child?",
                a: "Absolutely. Many of our sponsors support multiple children. Contact us to learn more.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-surface-primary border border-outline rounded-lg p-5"
                >
                  <p className="font-semibold text-content-primary text-sm m-0">{q}</p>
                  <p className="text-content-secondary text-sm m-0 mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-green-600">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0 text-center">
          <h2 className="font-display text-2xl text-white mb-3">
            Change a Child's Life Today
          </h2>
          <p className="text-green-100 mb-6 m-0 max-w-lg mx-auto">
            For as little as {formatINR(2500)} per month, you can give a child from rural Anantapur the education they deserve.
          </p>
          <a
            href="mailto:info@sedsngo.org?subject=Child%20Sponsorship%20Inquiry&body=I%20would%20like%20to%20learn%20more%20about%20sponsoring%20a%20child%20at%20SEDS."
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors no-underline"
          >
            <EnvelopeSimple className="w-5 h-5" />
            Contact Us to Sponsor
          </a>
        </div>
      </section>
    </div>
  );
}
