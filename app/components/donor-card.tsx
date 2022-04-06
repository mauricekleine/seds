import { Coins } from "phosphor-react";

import Card, { CardTitle } from "~/components/ui/card";

function DonorCard() {
  return (
    <Card>
      <CardTitle>
        <Coins className="p-0 m-0 inline-block text-green-600 h-8 w-8" />

        <span className="ml-2">Donors</span>
      </CardTitle>

      <p>
        Help us to implement projects in watershed management and reforestation.
      </p>

      <span>Support us!</span>
    </Card>
  );
}

export default DonorCard;
