import { Bomb, Skull, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t-2 border-primary">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary text-lg" style={{ fontFamily: 'Permanent Marker' }}>
            © 2024 TRASHY TRASH CAN'S 🖤 MADE WITH CHAOS
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-125 transition-transform">
              <Flame className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-secondary hover:scale-125 transition-transform">
              <Skull className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent hover:scale-125 transition-transform">
              <Bomb className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}