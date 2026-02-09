import { Link } from "@remix-run/react";
import { GraduationCap, Leaf, Sun, Drop } from "phosphor-react";

type ProgramCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
};

function ProgramCard({ icon, title, description, href, color }: ProgramCardProps) {
  return (
      <Link
        to={href}
        className="group block bg-surface-primary border border-outline rounded-lg p-6 hover:shadow-lg hover:border-green-500 transition-all duration-200"
      >
        <div className={`${color} mb-4`}>{icon}</div>
        <h3 className="font-display text-lg text-content-primary mb-2 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-content-secondary m-0 leading-relaxed">{description}</p>

    </Link>
  );
}

function ProgramsSection() {
  return (
      <section className="py-12 bg-surface-secondary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
              Our Programs
            </h2>
            <p className="text-content-secondary max-w-xl mx-auto m-0">
              Four decades of sustainable development through education, environment,
              and community empowerment
            </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProgramCard
            icon={<GraduationCap className="w-10 h-10" />}
            title="Children's Education"
            description="Supporting rural children with quality education, scholarships, and school infrastructure development."
            href="/education"
            color="text-blue-600"
          />
          <ProgramCard
            icon={<Sun className="w-10 h-10" />}
            title="Clean Development Mechanism"
            description="Implementing clean energy solutions and carbon reduction projects for sustainable communities."
            href="/clean-development-mechanism"
            color="text-amber-600"
          />
          <ProgramCard
            icon={<Leaf className="w-10 h-10" />}
            title="Low Carbon Farming"
            description="Promoting sustainable agriculture practices that reduce emissions while improving yields."
            href="/low-carbon-farming"
            color="text-green-600"
          />
          <ProgramCard
            icon={<Drop className="w-10 h-10" />}
            title="Natural Resource Management"
            description="Watershed development, water conservation, and reforestation for ecological restoration."
            href="/natural-resource-management"
            color="text-cyan-600"
          />
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
