import { Sparkles } from "lucide-react";

export function ProductPreview() {
  return (
    <section className="py-24 trash-bg">
      <div className="container px-4 mx-auto text-center">
        <h2 className="trash-title text-5xl mb-16 gradient-text flex items-center justify-center gap-4">
          <Sparkles className="h-12 w-12 text-secondary" />
          SNEAK PEEK OF THE CHAOS
          <Sparkles className="h-12 w-12 text-secondary" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=3540&auto=format&fit=crop"
              alt="Punk trash can design"
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-20">
              <p className="text-xl font-bold" style={{ fontFamily: 'Permanent Marker' }}>
                THE PUNK ROCKER 🎸
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-primary/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="https://images.unsplash.com/photo-1567093322503-341d262ad8f9?q=80&w=3540&auto=format&fit=crop"
              alt="Rebel trash can concept"
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-20">
              <p className="text-xl font-bold" style={{ fontFamily: 'Permanent Marker' }}>
                THE REBEL YELL 🤟
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}