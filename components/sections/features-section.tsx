import { Bomb, Skull, Flame, Zap } from "lucide-react";

const features = [
  {
    icon: <Flame className="h-12 w-12" />,
    title: "LOUD AF DESIGNS",
    description: "These ain't your grandma's trash cans! Unless your grandma is a punk rocker! 🤘",
  },
  {
    icon: <Skull className="h-12 w-12" />,
    title: "DEATH TO BORING",
    description: "Why blend in when you were born to STAND OUT? Make your garbage GLORIOUS!",
  },
  {
    icon: <Bomb className="h-12 w-12" />,
    title: "REBEL APPROVED",
    description: "Each design screams 'I DON'T FOLLOW YOUR RULES!' Perfect for HOA nightmares!",
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "SHOCK VALUE",
    description: "Watch Karen's jaw drop when she sees your new statement piece! 😈",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="trash-title text-5xl text-center mb-16 gradient-text">
          WHY BE NORMAL? 🤮
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-black border-2 border-primary neon-border transform hover:scale-105 transition-transform"
            >
              <div className="mb-4 text-primary animate-pulse">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-secondary" style={{ fontFamily: 'Permanent Marker' }}>
                {feature.title}
              </h3>
              <p className="text-xl text-primary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}