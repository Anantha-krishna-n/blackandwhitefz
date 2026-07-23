"use client";
import React from 'react';
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Artistic Installations",
    description: "Site-specific structural art that responds to its environment. We merge sculpture with architectural rigorousness to create immersive spatial narratives for cultural institutions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUt7o0p7gU2hpu57lNlz6n6A6UQEkwcHgzhJt3kn6Sif1AVhmFYlCgj6oadx9w0hMqEM3kZTJ60UrWw9NDl4ZVYPCGxMSS-tdH9K52wYoTK3zaVfBwXPwXUdUhJ8Xrs-0Aje7vgaidSd91xNXWKx7biVX6J6Edzyh99cQpGGVxkwPRQLFxBF1fvn0fQjlQd0bNQg2Crfnr011bCwQ8NeyfT_8gYMkiThorWusZngMggD1b0bJmFgo"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Artistic Installations"
        />
      </div>
    ),
  },
  {
    title: "Exhibition Booths",
    description: "Temporary architecture that commands attention. We design modular, high-impact brand spaces for global fairs, focusing on distinct material palettes and precise lighting.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBl1mCrnrEi8YWT3DonMeY188Xt4PDm-1jgqfQwmAMuysaOWFae6WXFApvzjkhJ6W-0-ZOsx0ZQy7tvkX_eGNRdv6RBvtp66bqJjVTeoY_nKXtlm_6Mq-9Y-NgKSEcBpVq26Q5EtomSo0OeFCgzk4GmdonFE5DLKn-13AnjuW9iMIaKPOmsBbtz-dmucJitosIqHHN14YQHrml3SqQVoVpREICI0MDwalqYkOtd7jQh_iTfbx522I"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Exhibition Booths"
        />
      </div>
    ),
  },
  {
    title: "Interior Design",
    description: "Permanent spatial interventions. Translating our temporary architectural language into lasting environments for retail, hospitality, and private clients.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm1faiwqP15STVjOkVBBGe9_-DTaBsxgZyjhQ9ccrcwQgCmHDNa-7L0wzJBP2mPzz6ySwV8YIDZoayWsZuVoWyafUznEMc9pURcdleIQbR8Q_CCW4enkemKDDe6pDEhcwfT2lmxOEbzfNfIFuWK_vXb5ZJwR6PBySLox3Ac-8dVikQd0WT8jmvSOsFNDXfyvuX35Uu5nSbonSbPM93HeJQ8JyTY-wMlXqwWQo8qAQQcoLcJjjElaI"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Interior Design"
        />
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section>
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center px-8 pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-semibold">
          Our Expertise
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-2xl">
          What We Do
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed">
          From immersive installations to precision-crafted exhibition booths and lasting interiors — we design spaces that leave an impression.
        </p>
      </div>

      <StickyScroll content={content} />
    </section>
  );
}
