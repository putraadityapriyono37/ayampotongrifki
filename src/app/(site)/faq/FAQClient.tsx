"use client";

import * as React from "react";
import FAQItem from "@/components/Accordions/FAQItem";

type Faq = { q: string; a: React.ReactNode };

export default function FAQClient({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section className="mx-auto max-w-4xl px-5 pb-14">
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <FAQItem
            key={f.q}
            question={f.q}
            answer={f.a}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}
