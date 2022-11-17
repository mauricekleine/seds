import type { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

function FormGroup({ children }: Props) {
  return <div className="flex flex-col mb-6">{children}</div>;
}

export default FormGroup;
