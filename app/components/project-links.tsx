import { NavLink } from "@remix-run/react";
import classNames from "classnames";

type ProjectLinkProps = {
  children: string;
  to: string;
};

function ProjectLink({ children, to }: ProjectLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          "hover:underline after:ml-2 after:border-b-[6px] after:inline-block after:border-b-transparent after:rounded-sm after:border-t-[6px] after:border-t-transparent after:border-l-[6px] after:border-l-green-600",
          { underline: isActive }
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

function ProjectLinks() {
  return (
    <div className="flex flex-col space-y-3">
      <ProjectLink to="/education">Children&apos;s education</ProjectLink>

      <ProjectLink to="/clean-development-mechanism">
        Clean development mechanism
      </ProjectLink>

      <ProjectLink to="/low-carbon-farming">Low carbon farming</ProjectLink>

      <ProjectLink to="/natural-resource-management">
        Natural resource management
      </ProjectLink>
    </div>
  );
}

export default ProjectLinks;
