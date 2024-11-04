"use client";

import { Trash2, Sparkles, Zap } from "lucide-react";
import { EmailSignupForm } from "@/components/email-signup-form";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center trash-bg overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <Trash2
            key={i}
            className="absolute text-primary trash-spin"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Trash2 className="h-32 w-32 text-primary trash-float" />
            <Sparkles className="absolute top-0 right-0 h-12 w-12 text-secondary animate-pulse" />
            <Zap className="absolute bottom-0 left-0 h-12 w-12 text-accent animate-pulse" />
          </div>
        </div>
        
        <h1 className="trash-title text-6xl md:text-8xl font-bold mb-6 gradient-text">
          TRASH THE RULES!
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 text-primary font-bold max-w-2xl mx-auto" style={{ fontFamily: 'Permanent Marker' }}>
          F*CK BORING BINS! Get ready for the most RIDICULOUS trash cans ever created! 🤘
        </p>
        
        <div className="max-w-md mx-auto transform hover:scale-105 transition-transform">
          <EmailSignupForm />
        </div>
        
        <div className="mt-8 text-xl text-accent animate-pulse">
          WARNING: May cause extreme jealousy from your neighbors
        </div>
      </div>
    </section>
  );
}