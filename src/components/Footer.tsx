import { Linkedin, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Background effect */}
      <div className="glow-orb-primary w-[300px] h-[300px] bottom-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-primary-foreground">
              S
            </div>
            <div>
              <p className="font-semibold">Sacha</p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} • Tous droits réservés
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sacha@example.com"
              className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Créé avec <Heart size={14} className="text-destructive" fill="currentColor" /> en Belgique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
