import { Quote, Rocket, Heart, Zap } from 'lucide-react';

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background effects */}
      <div className="glow-orb-primary w-[500px] h-[500px] bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Heart size={16} />
            Réflexion Personnelle
          </div>
          <h2 className="section-title mb-4">Vision & Perspectives</h2>
          <p className="section-subtitle mx-auto">
            Trois années de formation intense qui ont façonné ma vision du marketing digital
            et mon approche de l'automatisation.
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 relative">
            <Quote size={48} className="absolute -top-4 -left-4 text-primary/30" />
            <blockquote className="text-xl md:text-2xl font-light text-center leading-relaxed mb-6">
              "L'automatisation n'est pas là pour remplacer la créativité humaine,
              mais pour lui donner les moyens de s'exprimer à grande échelle."
            </blockquote>
            <cite className="block text-center text-muted-foreground">— Ma philosophie</cite>
          </div>
        </div>

        {/* Vision Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Evolution */}
          <div className="glass-card-hover p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6">
              <Rocket size={32} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4">Évolution</h3>
            <p className="text-muted-foreground leading-relaxed">
              D'étudiant curieux à professionnel opérationnel, ces trois années m'ont permis
              de maîtriser l'écosystème du marketing digital et de développer une expertise
              pointue en automatisation des processus.
            </p>
          </div>

          {/* Forces */}
          <div className="glass-card-hover p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-6">
              <Zap size={32} className="text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4">Forces</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ma capacité à faire le pont entre la stratégie marketing et l'exécution technique
              est ma plus grande force. Je comprends les besoins business et je sais les traduire
              en solutions automatisées efficaces.
            </p>
          </div>

          {/* Perspectives */}
          <div className="glass-card-hover p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4">Perspectives</h3>
            <p className="text-muted-foreground leading-relaxed">
              Je vise le secteur Tech/SaaS où l'innovation et l'efficacité sont au cœur des
              préoccupations. Mon objectif : rejoindre une équipe qui partage mes valeurs
              de performance et d'automatisation intelligente.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-center text-xl font-bold mb-8">Mes Valeurs</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Innovation', 'Efficacité', 'Curiosité', 'Collaboration', 'Excellence', 'Adaptabilité'].map(
              (value) => (
                <span
                  key={value}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-foreground font-medium hover:from-primary/20 hover:to-secondary/20 transition-colors cursor-default"
                >
                  {value}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
