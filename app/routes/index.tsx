import { MetaFunction } from "@remix-run/node";

import DonorCard from "~/components/donor-card";
import Image from "~/components/image";
import VolunteerCard from "~/components/volunteer-card";

export const meta: MetaFunction = () => ({
  description:
    "The Social Education and Development Society (SEDS) is a Non-Governmental Organisation that has been actively involved in socially transforming initiatives and rural development for over 38 years near the town of Penukonda in Andhra Pradesh.",
  title: "SEDS",
});

const Homepage = () => (
  <>
    <Image
      alt="Towards a greener tomorrow"
      name="students"
      title="Towards a greener tomorrow"
    />

    <div>
      <p>
        The Social Education and Development Society (SEDS) is a
        Non-Governmental Organisation that has been actively involved in
        socially transforming initiatives and rural development for over 38
        years near the town of Penukonda in Andhra Pradesh.
      </p>

      <div>
        We recently did an interview with Digital Discourse, check it out here:
        <ul>
          <li>
            <a
              href="https://digitaldiscourseinterviews.blogspot.com/2021/11/interview-ofmanil-joshua-ceo-seds-ngo.html"
              rel="noreferrer"
              target="_blank"
            >
              Interview of Manil Joshua, CEO, Founder Member SEDS NGO Anantapur,
              Andhra Pradesh
            </a>
          </li>

          <li>
            <a
              href="https://digitaldiscoursephotoblogspot.blogspot.com/2021/11/email-interview-mrs.html"
              rel="noreferrer"
              target="_blank"
            >
              Watershed Management in Anantapur - interventions by SEDSNGO
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1">
          <VolunteerCard />
        </div>

        <div className="flex-1">
          <DonorCard />
        </div>
      </div>
    </div>
  </>
);

export default Homepage;
