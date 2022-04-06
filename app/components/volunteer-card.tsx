import { Link } from "@remix-run/react";
import { Handshake } from "phosphor-react";

import Card, { CardTitle } from "~/components/ui/card";

function VolunteerCard() {
  return (
    <Card>
      <CardTitle>
        <Handshake className="p-0 m-0 inline-block text-green-600 h-8 w-8" />

        <span className="ml-2">Volunteers &amp; Interns</span>
      </CardTitle>

      <p>
        We welcome volunteers from around the World to participate in our social
        development programmes.
      </p>

      <Link to="/volunteers">Come join us!</Link>
    </Card>
  );
}

export default VolunteerCard;
