import { TreeEvergreen, Users, House, CalendarBlank } from "phosphor-react";

type StatProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  animated?: boolean;
};

function Stat({ icon, value, label, animated }: StatProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="text-green-600 mb-2">{icon}</div>
      <span
        className="text-3xl md:text-4xl font-display text-gray-800"
        data-seds-years={animated ? true : undefined}
      >
        {value}
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
            value="46"
            label="Years of Impact"
            animated
          />
          <Stat
            icon={<House className="w-8 h-8" />}
            value="350+"
            label="Villages Reached"
          />
          <Stat
            icon={<TreeEvergreen className="w-8 h-8" />}
            value="2M+"
            label="Trees Planted"
          />
          <Stat
            icon={<Users className="w-8 h-8" />}
            value="50K+"
            label="Lives Impacted"
          />
        </div>
      </div>
    </section>
  );
}

export default ImpactBanner;
