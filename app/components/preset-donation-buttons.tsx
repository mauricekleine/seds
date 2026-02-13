import { useState } from "react";
import { EnvelopeSimple } from "phosphor-react";

const presets = [500, 2000, 5000, 10000];

type Props = {
  programName: string;
};

function formatINR(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

export default function PresetDonationButtons({ programName }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");

  const amount = selected ?? (custom ? Number(custom) : null);

    return (
      <div className="bg-surface-primary border border-outline rounded-lg p-5">
        <p className="font-semibold text-content-primary text-sm mb-3 m-0">
          Support {programName}
        </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        {presets.map((value) => (
          <button
            key={value}
            onClick={() => {
              setSelected(value);
              setCustom("");
            }}
              className={`py-2 px-3 rounded border text-sm font-medium transition-colors ${
                selected === value
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-surface-primary text-content-secondary border-outline hover:border-green-300"
              }`}

          >
            {formatINR(value)}
          </button>
        ))}
      </div>
      <input
        type="number"
        placeholder="Custom amount (₹)"
        value={custom}
        onChange={(e) => {
          setCustom(e.target.value);
          setSelected(null);
        }}
        className="w-full border border-outline rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        min={100}
      />
      <a
        href={`mailto:info@sedsngo.org?subject=Donation%20for%20${encodeURIComponent(programName)}${amount ? `%20-%20${formatINR(amount)}` : ""}&body=I%20would%20like%20to%20donate%20to%20the%20${encodeURIComponent(programName)}%20program.`}
        className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm text-center no-underline"
      >
        <EnvelopeSimple className="w-4 h-4" />
        {amount ? `Donate ${formatINR(amount)}` : "Contact to Donate"}
      </a>
    </div>
  );
}
