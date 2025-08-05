"use client";

import Container from "../global/container";
import { useState } from "react";

const FAQS = [
  {
    q: "What exactly is ViralGenie?",
    a: "ViralGenie is an AI 24/7 growth coach specifically built for small founders. It gives daily viral post ideas, platform specific content & daily strategies, so you can grow and get more users."
  },
  {
    q: "Who is this for?",
    a: "ViralGenie is specifically built for small founders, solopreneurs, Indie hackers, struggling with marketing and user acquisition. No audience? No problem. Just bring your product, It will get you customers."
  },
  {
    q: "How is it different from ChatGPT & other AI tools?",
    a: "It is NOT another AI post generator giving you generic content. ViralGenie is your personal Growth Coach with a decade of experience — it studies your business, builds a strategy, creates a 30-day content plan, and evolves with your results."
  },
  {
    q: "Will it actually help me grow?",
    a: "It will save you 10+ hours a week. Most users go from spending hours on content to just 30 minutes per day, so you can focus on building, not guesswork."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time. After cancellation, you'll retain access to the product until the end of your billing cycle."
  },
  {
    q: "I have another question?",
    a: "We are here to help! You can reach us at support@viralgenie.io for anything. We typically respond within 12 hours on weekdays."
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
    return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-center mb-10">Still Have Questions?</h2>
        <div className="flex flex-col gap-4 max-w-xl mx-auto w-full">
          {FAQS.map((item, idx) => (
            <div key={idx} className="rounded-xl bg-background/80 border border-border/50">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-base md:text-lg font-medium text-foreground focus:outline-none"
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                <span>{item.q}</span>
                <span className="ml-4 text-xl">{open === idx ? "×" : "+"}</span>
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-muted-foreground text-sm md:text-base animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
