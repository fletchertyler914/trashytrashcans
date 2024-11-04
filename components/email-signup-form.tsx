"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface EmailSignupFormProps {
  variant?: "primary" | "secondary";
}

export function EmailSignupForm({ variant = "primary" }: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "HELL YEAH! 🤘",
      description: "Welcome to the trash revolution! Get ready for some CRAZY updates!",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="DROP YOUR EMAIL HERE! 🔥"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`h-12 text-lg ${
          variant === "secondary" ? "bg-black border-accent" : "border-primary"
        }`}
        required
      />
      <Button
        type="submit"
        size="lg"
        className={`px-8 font-bold text-lg hover:scale-110 transition-transform ${
          variant === "secondary" ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
        }`}
      >
        <Sparkles className="mr-2 h-5 w-5" />
        JOIN NOW!
      </Button>
    </form>
  );
}