import { useState } from 'react';
import { Mail, Linkedin, Download, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé avec succès ! Je vous répondrai rapidement.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="glow-orb-secondary w-[400px] h-[400px] top-0 left-0 opacity-20" />
      <div className="glow-orb-primary w-[300px] h-[300px] bottom-0 right-1/4 opacity-20" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-4">
            <Mail size={16} />
            Contact
          </div>
          <h2 className="section-title mb-4">Travaillons Ensemble</h2>
          <p className="section-subtitle mx-auto">
            Vous avez un projet d'automatisation marketing ? Vous cherchez un profil hybride
            tech/marketing ? Échangeons !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
            <p className="text-muted-foreground mb-8">
              Je suis actuellement à la recherche d'une opportunité dans le secteur Tech/SaaS
              où je pourrai mettre à profit mes compétences en marketing digital et automatisation.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:sacha@example.com"
                className="flex items-center gap-4 p-4 glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">sacha@example.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Linkedin size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-muted-foreground text-sm">linkedin.com/in/sacha</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass-card">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-muted-foreground text-sm">Belgique - Disponible en remote</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="#" className="btn-glow flex items-center justify-center gap-2 w-full text-lg py-4">
              <Download size={20} />
              Télécharger mon CV
            </a>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button type="submit" className="btn-glow flex items-center justify-center gap-2 w-full py-4">
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
