import { faHandHoldingUsd, faHandshake } from "@fortawesome/free-solid-svg-icons";

import Card, { CardTitle } from "../components/Card";
import Icon from "../components/Icon";

export default () => (
  <div>
    <h1>Towards a greener tomorrow</h1>

    <p>
      The Social Education and Development Society (SEDS) is a Non-Governmental
      Organisation that has been actively involved in socially transforming
      initiatives and rural development for over 38 years near the town of
      Penukonda in Andhra Pradesh.SEDS - Towards a greener tomorrow.
    </p>

    <Card>
      <Icon icon={faHandshake} size="2x" transform={{ rotate: -32 }}/>

      <CardTitle>Volunteers & Interns</CardTitle>

      <p>
        We welcome volunteers from around the World to participate in our social
        development programmes.
      </p>

      <a>Come join us!</a>
    </Card>

    <Card>
      <Icon icon={faHandHoldingUsd} size="2x"/>

      <CardTitle>Donors</CardTitle>

      <p>
        Help us to implement projects in watershed management and reforestation.
      </p>

      <a>Support us!</a>
    </Card>
  </div>
);
