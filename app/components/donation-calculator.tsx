import { useState } from "react";
import {
  Tree,
  GraduationCap,
  Handshake,
  Drop,
  Student,
  GlobeHemisphereWest,
  EnvelopeSimple,
} from "phosphor-react";

const impactTiers = [
  {
    min: 500,
    icon: <Tree className="w-8 h-8" />,
    label: "Plant 1 tree",
    description: "Help reforest degraded land in Anantapur district",
  },
  {
    min: 2000,
    icon: <GraduationCap className="w-8 h-8" />,
    label: "1 month of child education",
    description: "Support a child's schooling at the SEDS campus school",
  },
  {
    min: 5000,
    icon: <Handshake className="w-8 h-8" />,
    label: "Train 1 woman in vocational skills",
    description: "Empower a woman with sustainable livelihood training",
  },
  {
    min: 10000,
    icon: <Drop className="w-8 h-8" />,
    label: "Contribute to 1 check dam",
    description: "Help restore water tables in drought-prone terrain",
  },
  {
    min: 25000,
    icon: <Student className="w-8 h-8" />,
    label: "Sponsor a child for 1 year",
    description: "Cover education, hostel, and meals for a full year",
  },
  {
    min: 50000,
    icon: <GlobeHemisphereWest className="w-8 h-8" />,
    label: "Fund watershed restoration",
    description: "Transform barren land into a thriving ecosystem",
  },
];

function getActiveTier(amount: number) {
  let tier = impactTiers[0];
  for (const t of impactTiers) {
    if (amount >= t.min) tier = t;
  }
  return tier;
}

function formatINR(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

export default function DonationCalculator() {
  const [amount, setAmount] = useState(5000);
  const activeTier = getActiveTier(amount);

  return (
      <section className="py-12 bg-surface-secondary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
              See Your Impact
            </h2>
            <p className="text-content-secondary max-w-xl mx-auto m-0">
              Move the slider to see how your donation can make a difference
            </p>
          </div>

          <div className="bg-surface-primary border border-outline rounded-lg shadow-sm p-6 md:p-8">
          <div className="text-center mb-6">
            <span className="text-4xl md:text-5xl font-display text-green-600">
              {formatINR(amount)}
            </span>
          </div>

          <input
            type="range"
            min={500}
            max={50000}
            step={500}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-surface-tertiary rounded-lg appearance-none cursor-pointer accent-green-600 mb-2"
            aria-label="Donation amount"
          />
          <div className="flex justify-between text-xs text-content-tertiary mb-8">
            <span>{formatINR(500)}</span>
            <span>{formatINR(50000)}</span>
          </div>

          <div className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5 mb-6">
            <div className="text-green-600 flex-shrink-0 mt-0.5">
              {activeTier.icon}
            </div>
            <div>
              <p className="font-semibold text-content-primary text-lg m-0">
                {activeTier.label}
              </p>
              <p className="text-content-secondary text-sm m-0 mt-1">
                {activeTier.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {impactTiers.map((tier) => (
              <button
                key={tier.min}
                onClick={() => setAmount(tier.min)}
                className={`text-xs py-2 px-1 rounded border transition-colors ${
                  amount >= tier.min
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-surface-primary text-content-secondary border-outline hover:border-green-300"
                }`}
              >
                {formatINR(tier.min)}
              </button>
            ))}
          </div>

          <a
            href="mailto:info@sedsngo.org?subject=Donation%20Inquiry%20-%20₹&body=I%20would%20like%20to%20donate%20to%20SEDS."
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center no-underline"
          >
            <EnvelopeSimple className="w-5 h-5" />
            Donate {formatINR(amount)}
          </a>
        </div>
      </div>
    </section>
  );
}
