import { Quotes } from "phosphor-react";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
      <div className="bg-surface-primary rounded-lg p-6 shadow-sm border border-outline">
        <Quotes className="w-8 h-8 text-green-600 mb-4" weight="fill" />
        <blockquote className="text-content-secondary mb-4 leading-relaxed italic m-0 not-italic">
          "{quote}"
        </blockquote>
        <div className="border-t border-outline pt-4">
          <p className="font-semibold text-content-primary m-0">{author}</p>
          <p className="text-sm text-content-tertiary m-0">{role}</p>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
      <section className="py-12 bg-surface-primary">
        <div className="container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-content-primary mb-3">
              Voices from the Field
            </h2>
            <p className="text-content-secondary max-w-xl mx-auto m-0">
              Hear from volunteers and community members about our impact
            </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Testimonial
            quote="Working with SEDS opened my eyes to the power of community-driven development. The watershed management programs have transformed entire villages."
            author="International Volunteer"
            role="Environmental Science Student"
          />
          <Testimonial
            quote="SEDS has been instrumental in bringing sustainable farming practices to our region. Our yields have improved while caring for the environment."
            author="Local Farmer"
            role="Anantapur District"
          />
          <Testimonial
            quote="Before the self-help group, I had no way to save or access credit. Now our group manages its own funds, and I was able to start a small tailoring business."
            author="Village Woman"
            role="Self-Help Group Member, Somandepalli"
          />
          <Testimonial
            quote="The check dams built by SEDS have recharged our wells. For the first time in years, we have water through the dry season. It has changed everything for our village."
            author="Village Elder"
            role="Watershed Beneficiary, Anantapur"
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
