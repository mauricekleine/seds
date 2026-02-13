import { Heart } from "phosphor-react";

function StickyDonateButton() {
  return (
    <a
      href="mailto:info@sedsngo.org?subject=Donation%20Inquiry"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
    >
      <Heart className="w-5 h-5" weight="fill" />
      <span className="hidden sm:inline">Donate Now</span>
      <span className="sm:hidden">Donate</span>
    </a>
  );
}

export default StickyDonateButton;
