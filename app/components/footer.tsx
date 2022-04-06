import { EnvelopeSimple, FacebookLogo, MapPin, Phone } from "phosphor-react";

import ProjectLinks from "~/components/project-links";

const Footer = () => (
  <footer className="space-y-4 divide-y divide-gray-100">
    <div />

    <div className="pt-4">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        <div className="flex text-center lg:text-left flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col items-center lg:items-start flex-1">
            <h3 className="font-display flex items-center text-lg">
              <MapPin /> Address
            </h3>

            <address className="not-italic flex space-x-2 justify-center lg:justify-start">
              <div className="flex flex-col">
                <span className="font-semibold">
                  Social Education and Development Society
                </span>

                <span>Anandapuram H.O.</span>

                <span>Somandepalli Mandal</span>

                <span>Anantapur District, 515124</span>

                <span>Andhra Pradesh - INDIA</span>
              </div>
            </address>
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex flex-col md:items-end">
              <h3 className="font-display text-lg">Contact info</h3>

              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="lg:pt-1">
                  <EnvelopeSimple />
                </div>

                <span>info@sedsngo.org</span>
              </div>

              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <div className="lg:pt-1">
                  <Phone />
                </div>

                <span>+91 9440579566</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-display text-lg">Social media</h3>

              <a
                href="https://www.facebook.com/pages/SEDS-Social-Education-and-Development-Society-SEDS/190839020942963"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookLogo className="h-8 w-8" color="#3B5998" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center space-y-4 pt-4">
      <h3 className="font-display text-lg">Our projects</h3>

      <ProjectLinks />
    </div>

    <div className="bg-green-600 text-center text-white py-2 text-sm">
      Copyright {new Date().getFullYear()} - All information on this site is
      part of SEDS
    </div>
  </footer>
);

export default Footer;
