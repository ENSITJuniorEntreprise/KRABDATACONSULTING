import { motion } from 'motion/react';
import { ShoppingCart, Briefcase, LineChart, UserCheck, Shield, CheckCircle2 } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      id: 1,
      title: 'Automatisation du circuit bons de commande / factures',
      department: 'Achats',
      icon: ShoppingCart,
      context:
        'PME industrielle avec un volume important de commandes fournisseurs (200+/mois). Processus manuel entraînant des erreurs de saisie et des délais de traitement importants.',
      solution: [
        'Développement d\'une solution d\'automatisation de création et réception des bons de commande',
        'Mise en place d\'un circuit de validation automatisé selon les seuils budgétaires',
        'Intégration avec le système ERP existant',
        'Dashboard Power BI de suivi budgétaire temps réel',
      ],
      results: [
        '75% de réduction du temps de traitement',
        '90% de réduction des erreurs de saisie',
        'Visibilité budgétaire en temps réel',
        'ROI atteint en 8 mois',
      ],
      technologies: ['Power Automate', 'Power BI', 'SharePoint', 'ERP Integration'],
    },
    {
      id: 2,
      title: 'Analyse automatique des appels d\'offres',
      department: 'Affaires',
      icon: Briefcase,
      context:
        'Bureau d\'études recevant 30+ appels d\'offres par mois. Analyse manuelle chronophage empêchant la réponse à tous les AO pertinents.',
      solution: [
        'Développement d\'un système d\'analyse automatique des dossiers AO',
        'Extraction automatique des critères techniques et financiers',
        'Scoring automatisé basé sur les capacités de l\'entreprise',
        'Aide à la décision Go/No Go',
      ],
      results: [
        '60% de gain de temps sur l\'analyse initiale',
        '+40% d\'AO traités',
        'Taux de succès amélioré de 25%',
        'Meilleure allocation des ressources',
      ],
      technologies: ['Python', 'NLP', 'Azure AI', 'Power Apps'],
    },
    {
      id: 3,
      title: 'Dashboard Power BI de pilotage commercial',
      department: 'Ventes',
      icon: LineChart,
      context:
        'Entreprise de services avec équipe commerciale de 15 personnes. Reporting manuel hebdomadaire nécessitant 1 jour de travail et données souvent obsolètes.',
      solution: [
        'Création d\'un dashboard Power BI interactif consolidant toutes les sources',
        'Connexion au CRM, facturation et outils de suivi',
        'Indicateurs temps réel : pipeline, taux de conversion, CA prévisionnel',
        'Vues personnalisées par commercial et par secteur',
      ],
      results: [
        'Données actualisées en temps réel',
        '100% de gain de temps sur le reporting',
        'Amélioration de la visibilité sur le pipeline',
        'Décisions commerciales plus rapides et éclairées',
      ],
      technologies: ['Power BI', 'CRM Integration', 'SQL Server', 'Power Query'],
    },
    {
      id: 4,
      title: 'Digitalisation du processus d\'onboarding RH',
      department: 'RH',
      icon: UserCheck,
      context:
        'ETI avec 50+ recrutements annuels. Processus d\'intégration papier complexe impliquant 7 services différents et nécessitant 3 semaines de suivi manuel.',
      solution: [
        'Plateforme web de gestion du parcours d\'onboarding',
        'Workflows automatisés pour chaque étape (matériel, accès, formation)',
        'Notifications automatiques aux services concernés',
        'Portail collaborateur pour suivi de progression',
      ],
      results: [
        'Délai d\'intégration réduit de 3 semaines à 5 jours',
        'Satisfaction des nouveaux collaborateurs +45%',
        'Réduction de 80% du temps RH consacré au suivi',
        'Zéro oubli dans le processus',
      ],
      technologies: ['React', 'Node.js', 'Power Automate', 'Azure AD'],
    },
    {
      id: 5,
      title: 'Application sur mesure de gestion des non-conformités',
      department: 'QSE',
      icon: Shield,
      context:
        'Industriel certifié ISO avec gestion des NC sur tableur Excel. Difficultés de suivi, de traçabilité et de reporting pour les audits.',
      solution: [
        'Application web de gestion complète des non-conformités',
        'Workflow d\'analyse, traitement et suivi des actions correctives',
        'Alertes automatiques pour les échéances',
        'Tableau de bord de pilotage QSE et exports pour audits',
      ],
      results: [
        'Traçabilité complète de toutes les NC',
        'Délai moyen de traitement réduit de 40%',
        'Préparation des audits facilitée (gain de 2 jours)',
        'Conformité ISO maintenue avec excellence',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Power BI'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1B2D5B] to-[#3A5BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">Cas d'usage & Réalisations</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à transformer leurs processus
              et à créer de la valeur mesurable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'} rounded-2xl shadow-xl overflow-hidden`}
              >
                <div className="grid md:grid-cols-3">
                  <div className="bg-gradient-to-br from-[#1B2D5B] to-[#3A5BA0] p-8 text-white flex flex-col justify-between">
                    <div>
                      <div className="bg-[#E8CFA5] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <useCase.icon className="text-[#1B2D5B]" size={32} />
                      </div>
                      <div className="inline-block bg-[#E8CFA5] text-[#1B2D5B] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        {useCase.department}
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{useCase.title}</h2>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-[#E8CFA5]">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {useCase.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#1B2D5B] mb-3 flex items-center">
                        <span className="w-8 h-8 bg-[#E8CFA5] rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                          1
                        </span>
                        Contexte
                      </h3>
                      <p className="text-gray-700 ml-11">{useCase.context}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#1B2D5B] mb-3 flex items-center">
                        <span className="w-8 h-8 bg-[#E8CFA5] rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                          2
                        </span>
                        Solution mise en place
                      </h3>
                      <ul className="space-y-2 ml-11">
                        {useCase.solution.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="text-[#3A5BA0] mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#1B2D5B] mb-3 flex items-center">
                        <span className="w-8 h-8 bg-[#E8CFA5] rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                          3
                        </span>
                        Résultats obtenus
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4 ml-11">
                        {useCase.results.map((result, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-[#E8CFA5] to-[#E8CFA5]/70 p-4 rounded-lg">
                            <p className="text-[#1B2D5B] font-semibold">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8CFA5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-6">
              Votre projet pourrait être le prochain
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Chaque entreprise a ses spécificités. Discutons de vos besoins pour créer
              une solution sur mesure qui génère de la valeur.
            </p>
            <a
              href="/contact"
              className="bg-[#1B2D5B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3A5BA0] transition-colors duration-200 inline-block"
            >
              Parlons de votre projet
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
