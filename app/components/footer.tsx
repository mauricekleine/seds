import { EnvelopeSimple, FacebookLogo, MapPin, Phone } from "phosphor-react";
import { useState } from "react";

import ProjectLinks from "~/components/project-links";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // For now, show success — Mailchimp integration can be added later
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
      <h3 className="font-display text-lg text-content-primary mb-2">
        Stay Updated
      </h3>
      <p className="text-sm text-content-secondary mb-4 m-0">
        Get occasional updates on our work and impact stories.
      </p>
      {status === "success" ? (
        <p className="text-green-700 dark:text-green-400 font-semibold text-sm m-0">
          Thank you for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-3 py-2 border border-outline rounded-md text-sm bg-surface-primary text-content-primary focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

const Footer = () => (
  <footer className="space-y-4 divide-y divide-outline">
    <div />

    <div className="pt-4">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        {/* Address + Contact logo (with tagline)
            - Mobile/tablet: centered above
            - Wide screens: placed on the side to fit the whole address/contact block
        */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          <div className="flex justify-center lg:justify-start pb-4 lg:pb-0 lg:flex-none">
            <img
              src="/logos/seds_lockup_primary_transparent.png"
              alt="SEDS — Towards a Greener Tomorrow"
              className="w-[260px] sm:w-[320px] lg:w-[300px] xl:w-[320px] 2xl:w-[340px] h-auto object-contain"
            />
          </div>

          <div className="flex text-center lg:text-left flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4 flex-1">
            <div className="flex flex-col items-center lg:items-start flex-1">
              <h3 className="font-display flex items-center text-lg text-content-primary">
                <MapPin /> Address
              </h3>

              <address className="not-italic flex space-x-2 justify-center lg:justify-start text-content-secondary">
                <div className="flex flex-col">
                  <span className="font-semibold text-content-primary">
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
              <div className="flex flex-col lg:items-end">
                <h3 className="font-display text-lg text-content-primary">
                  Contact info
                </h3>

                <div className="flex items-center space-x-2 justify-center lg:justify-start text-content-secondary">
                  <div className="lg:pt-1">
                    <EnvelopeSimple />
                  </div>

                  <span>info@sedsngo.org</span>
                </div>

                <div className="flex items-center space-x-2 justify-center lg:justify-start text-content-secondary">
                  <div className="lg:pt-1">
                    <Phone />
                  </div>

                  <span>+91 9440579566</span>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end">
                <h3 className="font-display text-lg text-content-primary">
                  Social media
                </h3>

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

        <div className="mt-8">
          <NewsletterSignup />
        </div>
      </div>
    </div>

    <div className="relative text-center space-y-4 pt-4 overflow-hidden">
      <img
        src="/logos/seds_lockup_no_tagline_transparent.png"
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none h-[80%] w-auto max-w-[10rem] object-contain"
      />
      <div className="relative">
        <h3 className="font-display text-lg text-content-primary">Our projects</h3>

        <ProjectLinks />
      </div>
    </div>

    {/* Copyright bar with responsive watermarks */}
    <div className="bg-green-600 text-white py-3 text-sm relative overflow-hidden">
      {/* Watermark emblems — hidden on very small screens, visible from sm up */}
      <img
        src="/logos/seds_emblem_transparent.png"
        alt=""
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-7 sm:w-7 opacity-20 sm:opacity-30 hidden sm:block"
      />
      <img
        src="/logos/seds_emblem_transparent.png"
        alt=""
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-7 sm:w-7 opacity-20 sm:opacity-30 hidden sm:block"
      />
      <p className="text-center m-0 px-4 sm:px-12">
        Copyright {new Date().getFullYear()} - All information on this site is
        part of SEDS
      </p>
    </div>
  </footer>
);

export default Footer;
