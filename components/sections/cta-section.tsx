"use client";

import { Bomb, Zap } from "lucide-react";
import { EmailSignupForm } from "@/components/email-signup-form";

export function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary blur-[100px]" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent blur-[100px]" />
      </div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="flex justify-center gap-4 mb-6">
          <Bomb className="h-16 w-16 text-primary animate-bounce" />
          <Zap className="h-16 w-16 text-accent animate-pulse" />
        </div>
        <h2 className="trash-title text-5xl mb-6 gradient-text">
          READY TO TRASH THE SYSTEM?
        </h2>
        <p className="text-2xl mb-8 text-primary" style={{ fontFamily: 'Permanent Marker' }}>
          JOIN THE TRASH REVOLUTION! 🔥<br />
          Get 10% off when we launch + exclusive access to our most INSANE designs!
        </p>
        <div className="max-w-md mx-auto transform hover:scale-105 transition-transform">
          <EmailSignupForm variant="secondary" />
        </div>
      </div>
    </section>
  );
}