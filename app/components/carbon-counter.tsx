import { Leaf, GlobeHemisphereWest, Fire, House } from "phosphor-react";
import AnimatedCounter from "~/components/animated-counter";

const metrics = [
  {
    icon: <GlobeHemisphereWest className="w-8 h-8" />,
    target: 15000,
    suffix: "+",
    label: "Tonnes CO2 Offset",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    target: 2500000,
    suffix: "+",
    label: "Trees Planted Since 1980",
  },
  {
    icon: <Fire className="w-8 h-8" />,
    target: 5000,
    suffix: "",
    label: "Improved Cookstoves",
  },
  {
    icon: <House className="w-8 h-8" />,
    target: 3500,
    suffix: "+",
    label: "Households Benefited",
  },
];

export default function CarbonCounter() {
  return (
    <section className="py-12 bg-gradient-to-br from-green-600 to-green-800">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
            Environmental Impact
          </h2>
          <p className="text-green-100 max-w-xl mx-auto m-0">
            Our CDM and reforestation programs are making a measurable
            difference in the fight against climate change
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <div className="text-green-200 mb-2 flex justify-center">
                {metric.icon}
              </div>
              <p className="font-display text-2xl md:text-3xl text-white m-0">
                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                  duration={2500}
                />
              </p>
              <p className="text-green-200 text-xs mt-1 m-0">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
