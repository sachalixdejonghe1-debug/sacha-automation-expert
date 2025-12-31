import { ArrowRight, Download, Linkedin, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url?: string }, HTMLElement>;
    }
  }
}

const HeroSection = () => {
  useEffect(() => {
    // Dynamically load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.28/build/spline-viewer.js';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow Effects */}
      <div className="glow-orb-primary w-[500px] h-[500px] -top-20 -left-20 animate-pulse-glow" />
      <div className="glow-orb-secondary w-[400px] h-[400px] top-1/3 -right-32 animate-pulse-glow animation-delay-400" />
      <div className="glow-orb-accent w-[300px] h-[300px] bottom-20 left-1/4 animate-pulse-glow animation-delay-600" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 opacity-0 animate-fade-up">
              <Sparkles size={16} />
              Automatisation & Marketing Digital
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
              Boostez votre marketing grâce à{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                l'automatisation intelligente
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up animation-delay-400">
              Futur diplômé en Marketing Digital à la Haute École Condorcet, je combine expertise
              marketing et maîtrise des outils d'automatisation (n8n, Make) pour créer des
              stratégies performantes et scalables.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up animation-delay-600">
              <a href="#" className="btn-glow flex items-center justify-center gap-2 text-lg px-8 py-4">
                <Download size={20} />
                Télécharger mon CV
                <ArrowRight size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <Linkedin size={20} />
                Me suivre sur LinkedIn
              </a>
            </div>
          </div>

          {/* Spline 3D Animation */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Glow behind animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-30 scale-110" />
              
              {/* Spline container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                <spline-viewer 
                  url="https://prod.spline.design/4rNJPFKtLuZZYJ64/scene.splinecode"
                  className="w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center gap-2 animate-float">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-medium">n8n Expert</span>
              </div>
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2 animate-float animation-delay-200">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-sm font-medium">Make Pro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-600">
          <span className="text-muted-foreground text-sm">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
