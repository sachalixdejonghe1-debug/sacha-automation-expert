import { Code, Lightbulb, Users, MessageSquare, Palette, Target } from 'lucide-react';

const technicalSkills = [
  {
    name: 'n8n',
    category: 'Automatisation',
    level: 'Expert',
    icon: '⚡',
  },
  {
    name: 'Make (Integromat)',
    category: 'Automatisation',
    level: 'Expert',
    icon: '🔄',
  },
  {
    name: 'HubSpot',
    category: 'CRM',
    level: 'Avancé',
    icon: '🎯',
  },
  {
    name: 'Google Analytics',
    category: 'Analytics',
    level: 'Avancé',
    icon: '📊',
  },
  {
    name: 'Meta Ads',
    category: 'Publicité',
    level: 'Avancé',
    icon: '📱',
  },
  {
    name: 'Google Ads',
    category: 'Publicité',
    level: 'Intermédiaire',
    icon: '🔍',
  },
  {
    name: 'Notion',
    category: 'Productivité',
    level: 'Expert',
    icon: '📝',
  },
  {
    name: 'Figma',
    category: 'Design',
    level: 'Intermédiaire',
    icon: '🎨',
  },
  {
    name: 'Canva',
    category: 'Design',
    level: 'Avancé',
    icon: '✨',
  },
  {
    name: 'Zapier',
    category: 'Automatisation',
    level: 'Avancé',
    icon: '⚙️',
  },
  {
    name: 'Airtable',
    category: 'Base de données',
    level: 'Avancé',
    icon: '📋',
  },
  {
    name: 'Mailchimp',
    category: 'Email Marketing',
    level: 'Avancé',
    icon: '✉️',
  },
];

const softSkills = [
  {
    name: 'Gestion de Projet',
    description: 'Planification, coordination et suivi de projets marketing complexes.',
    icon: Target,
  },
  {
    name: 'Communication',
    description: 'Présentation claire des idées et collaboration efficace avec les équipes.',
    icon: MessageSquare,
  },
  {
    name: 'Créativité',
    description: 'Approche innovante pour résoudre les problèmes et créer du contenu impactant.',
    icon: Lightbulb,
  },
  {
    name: 'Travail d\'équipe',
    description: 'Collaboration harmonieuse et contribution positive à la dynamique de groupe.',
    icon: Users,
  },
  {
    name: 'Adaptabilité',
    description: 'Capacité à évoluer rapidement dans un environnement tech en constante mutation.',
    icon: Code,
  },
  {
    name: 'Design Thinking',
    description: 'Approche centrée utilisateur pour concevoir des solutions pertinentes.',
    icon: Palette,
  },
];

const CompetencesSection = () => {
  return (
    <section id="competences" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="glow-orb-accent w-[400px] h-[400px] top-1/2 right-0 opacity-20" />
      <div className="glow-orb-primary w-[300px] h-[300px] top-0 left-1/4 opacity-15" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            <Code size={16} />
            Stack Technique
          </div>
          <h2 className="section-title mb-4">Compétences & Outils</h2>
          <p className="section-subtitle mx-auto">
            Une maîtrise approfondie des outils d'automatisation et de marketing digital,
            combinée à des compétences transversales essentielles.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-sm">
              💻
            </span>
            Compétences Techniques
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="tech-icon flex-col gap-2 p-4 text-center cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full mt-1 ${
                    skill.level === 'Expert'
                      ? 'bg-accent/20 text-accent'
                      : skill.level === 'Avancé'
                      ? 'bg-secondary/20 text-secondary'
                      : 'bg-primary/20 text-primary'
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-sm">
              🧠
            </span>
            Compétences Transversales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="glass-card-hover p-6 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <Icon size={24} className="text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;
