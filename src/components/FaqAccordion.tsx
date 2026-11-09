"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types/schema";

interface FaqAccordionProps {
  faqs: FAQItem[];
}

/** Acordeón real (AGENTS.md §1) — nunca texto siempre expandido. */
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium"
            >
              {faq.question}
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
