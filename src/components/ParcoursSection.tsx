import { GraduationCap, Target, Zap, TrendingUp, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Projet SLAxelle',
    subtitle: 'Automatisation LinkedIn',
    context: 'Développement d\'une solution d\'automatisation pour optimiser la prospection et l\'engagement sur LinkedIn.',
    objective: 'Réduire de 70% le temps passé sur les tâches répétitives tout en augmentant la qualité des interactions.',
    achievements: [
      'Création de workflows n8n automatisés',
      'Intégration avec CRM et outils d\'analyse',
      'Personnalisation des messages à grande échelle',
    ],
    results: '+150% d\'engagement • -70% temps de prospection',
    tags: ['n8n', 'LinkedIn', 'CRM'],
  },
  {
    title: 'Campagne Multi-Canal',
    subtitle: 'Marketing Automation',
    context: 'Mise en place d\'une stratégie de marketing automation pour une startup tech.',
    objective: 'Créer un écosystème de nurturing automatisé pour convertir les leads en clients.',
    achievements: [
      'Séquences email personnalisées via Make',
      'Scoring lead automatique',
      'Dashboard analytics temps réel',
    ],
    results: '+40% taux de conversion • 200+ leads qualifiés',
    tags: ['Make', 'Email', 'Analytics'],
  },
  {
    title: 'Data Dashboard',
    subtitle: 'Analytics & Reporting',
    context: 'Création d\'un tableau de bord centralisé pour le suivi des KPIs marketing.',
    objective: 'Permettre une prise de décision data-driven en temps réel.',
    achievements: [
      'Intégration de 5+ sources de données',
      'Visualisations interactives',
      'Alertes automatiques sur anomalies',
    ],
    results: 'Décisions 3x plus rapides • ROI +25%',
    tags: ['Data', 'Visualisation', 'API'],
  },
];

const ParcoursSection = () => {
  return (
    <section id="parcours" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="glow-orb-primary w-[400px] h-[400px] top-0 right-0 opacity-20" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <GraduationCap size={16} />
            Parcours Académique
          </div>
          <h2 className="section-title mb-4">Formation & Projets Clés</h2>
          <p className="section-subtitle mx-auto">
            Un cursus axé sur l'excellence en marketing digital à la Haute École Condorcet,
            enrichi par des projets concrets et innovants.
          </p>
        </div>

        {/* Academic Info */}
        <div className="glass-card-hover p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shrink-0">
              <GraduationCap size={40} className="text-primary-foreground" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Haute École Condorcet</h3>
              <p className="text-muted-foreground mb-2">
                Bachelier en Marketing Digital & E-Business • 2022 - 2025
              </p>
              <p className="text-foreground/80">
                Spécialisation en automatisation marketing, stratégie digitale et analyse de données.
                Projets concrets en partenariat avec des entreprises tech.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card-hover p-6 flex flex-col group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>
                <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Context & Objective */}
              <div className="space-y-3 mb-4 flex-1">
                <div className="flex items-start gap-2">
                  <Target size={16} className="text-primary mt-1 shrink-0" />
                  <p className="text-sm text-foreground/80">{project.context}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Zap size={16} className="text-secondary mt-1 shrink-0" />
                  <p className="text-sm text-foreground/80">{project.objective}</p>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2 mb-4">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Results */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/30 mb-4">
                <TrendingUp size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">{project.results}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 border border-primary/30 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParcoursSection;
