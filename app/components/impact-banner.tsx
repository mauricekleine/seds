import { Users, House, CalendarBlank, MapPin } from "phosphor-react";
import AnimatedCounter from "~/components/animated-counter";
import { calculateSEDSYears } from "~/utils/seds-years";

type StatProps = {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
};

function Stat({ icon, label, children }: StatProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="text-green-600 mb-2">{icon}</div>
      <span className="text-3xl md:text-4xl font-display text-gray-800">
        {children}
      </span>
      <span className="text-sm text-gray-600 mt-1">{label}</span>
    </div>
  );
}

function ImpactBanner() {
  return (
    <section className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto lg:max-w-screen-md">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          <Stat
            icon={<CalendarBlank className="w-8 h-8" />}
            label="Years of Impact"
          >
            <AnimatedCounter target={calculateSEDSYears()} />
          </Stat>
          <Stat
            icon={<House className="w-8 h-8" />}
            label="Villages Reached"
          >
            <AnimatedCounter target={350} suffix="+" />
          </Stat>
          <Stat
            icon={<Users className="w-8 h-8" />}
            label="Women Supported"
          >
            <AnimatedCounter target={12000} suffix="+" />
          </Stat>
          <Stat
            icon={<MapPin className="w-8 h-8" />}
            label="Mandals Covered"
          >
            <AnimatedCounter target={5} />
          </Stat>
        </div>
      </div>
    </section>
  );
}

export default ImpactBanner;
