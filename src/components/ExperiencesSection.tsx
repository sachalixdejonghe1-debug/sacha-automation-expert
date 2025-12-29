import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'Chargé Marketing Digital',
    company: 'Startup Tech',
    location: 'Belgique',
    period: '2024 - Présent',
    type: 'Stage',
    context: 'Startup SaaS B2B en croissance rapide cherchant à optimiser son acquisition client.',
    actions: [
      'Mise en place de workflows d\'automatisation avec n8n',
      'Création de campagnes email nurturing via Make',
      'Analyse et optimisation des funnel de conversion',
      'Reporting hebdomadaire avec dashboards automatisés',
    ],
    results: 'Augmentation de 35% du taux de conversion et réduction de 50% du temps de reporting.',
    skills: ['n8n', 'Make', 'HubSpot', 'Google Analytics'],
  },
  {
    title: 'Assistant Marketing',
    company: 'Agence Digitale',
    location: 'Charleroi',
    period: '2023',
    type: 'Stage',
    context: 'Agence full-service gérant les stratégies digitales de PME régionales.',
    actions: [
      'Gestion de campagnes publicitaires Meta & Google',
      'Création de contenus pour les réseaux sociaux',
      'Suivi des performances et optimisation continue',
      'Veille concurrentielle et benchmark marché',
    ],
    results: 'Gestion autonome de 5 comptes clients avec amélioration moyenne de 20% du ROAS.',
    skills: ['Meta Ads', 'Google Ads', 'Canva', 'SEO'],
  },
  {
    title: 'Community Manager',
    company: 'Association Étudiante',
    location: 'Condorcet',
    period: '2022 - 2023',
    type: 'Bénévole',
    context: 'Association étudiante cherchant à développer sa visibilité et engagement en ligne.',
    actions: [
      'Définition de la stratégie éditoriale',
      'Création et planification de contenus',
      'Animation de la communauté et modération',
      'Organisation d\'événements digitaux',
    ],
    results: '+200% de followers en 6 mois et création d\'une communauté engagée de 1500+ membres.',
    skills: ['Social Media', 'Content', 'Community', 'Event'],
  },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
      {/* Background effects */}
      <div className="glow-orb-secondary w-[300px] h-[300px] bottom-0 left-0 opacity-20" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-4">
            <Briefcase size={16} />
            Expériences Professionnelles
          </div>
          <h2 className="section-title mb-4">Un parcours orienté résultats</h2>
          <p className="section-subtitle mx-auto">
            Des expériences concrètes où j'ai pu appliquer et développer mes compétences
            en marketing digital et automatisation.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="timeline-dot absolute left-0 hidden md:flex">
                    <Briefcase size={18} className="text-primary-foreground" />
                  </div>

                  {/* Card */}
                  <div className="glass-card-hover p-6 md:p-8 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <span className="px-2 py-0.5 text-xs rounded-full bg-accent/20 text-accent font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight size={24} className="text-muted-foreground group-hover:text-primary transition-colors hidden md:block" />
                    </div>

                    {/* Context */}
                    <p className="text-foreground/80 mb-4">{exp.context}</p>

                    {/* Actions */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Actions Clés
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 mb-4">
                      <h4 className="text-sm font-semibold text-accent mb-1">Résultats</h4>
                      <p className="text-sm text-foreground/80">{exp.results}</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
