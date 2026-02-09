import { Link } from "@remix-run/react";
import { Handshake, Coins } from "phosphor-react";

function CTASection() {
  return (
    <section className="py-12 bg-green-600">
      <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
            Join Our Mission
          </h2>
          <p className="text-green-100 max-w-xl mx-auto m-0">
            Whether you volunteer your time or support us financially, every
            contribution helps transform rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/volunteers"
            className="group bg-surface-primary rounded-lg p-6 text-center hover:shadow-xl transition-all duration-200"
          >
            <Handshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-display text-xl text-content-primary mb-2">
              Volunteer with Us
            </h3>
            <p className="text-content-secondary text-sm mb-4 m-0">
              Join our community and make a direct impact on rural development
            </p>
            <span className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-green-700 transition-colors">
              Learn More
            </span>
          </Link>

          <a
            href="mailto:sedsngo@gmail.com?subject=Donation%20Inquiry"
            className="group bg-green-700 rounded-lg p-6 text-center hover:bg-green-800 transition-all duration-200"
          >
            <Coins className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="font-display text-xl text-white mb-2">
              Support Our Work
            </h3>
            <p className="text-green-100 text-sm mb-4 m-0">
              Your donation helps us expand our programs and reach more villages
            </p>
            <span className="inline-block bg-white text-green-700 px-6 py-2 rounded-full font-semibold group-hover:bg-green-50 transition-colors">
              Donate Now
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
