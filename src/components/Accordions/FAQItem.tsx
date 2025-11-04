"use client";

import * as React from "react";

type Props = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
      open ? "rotate-180" : "rotate-0"
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function FAQItem({ question, answer, isOpen, onToggle }: Props) {
  const panelId = React.useId();

  return (
    <div
      className="rounded-xl border border-emerald-100 bg-white shadow-sm"
      data-open={isOpen}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-[17px] font-semibold text-emerald-900">
          {question}
        </span>
        <span className="text-slate-500">
          <Chevron open={isOpen} />
        </span>
      </button>

      {/* panel dengan animasi tinggi halus */}
      <div
        id={panelId}
        role="region"
        className={`
          grid overflow-hidden px-5 transition-[grid-template-rows,opacity]
          duration-300 ease-out
          ${isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="min-h-0 text-slate-600">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      </div>
    </div>
  );
}
