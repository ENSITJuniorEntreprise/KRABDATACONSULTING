import { motion } from 'motion/react';
import { Database, Settings, Bot, Code, Cloud, LineChart, Brain, Cpu, FileText, ShoppingCart, UserCheck, Shield, Briefcase, FileCheck, Server, Lock, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('achats');

  const automationByDepartment = [
    {
      id: 'achats',
      name: 'Achats',
      icon: ShoppingCart,
      processes: [
        'Automatisation création/réception bons de commande et factures',
        'Circuit de validation automatisé',
        'Suivi budgétaire temps réel',
      ],
    },
    {
      id: 'rh',
      name: 'RH',
      icon: UserCheck,
      processes: [
        'Digitalisation onboarding',
        'Automatisation congés, notes de frais',
        'Entretiens annuels automatisés',
      ],
    },
    {
      id: 'qse',
      name: 'QSE',
      icon: Shield,
      processes: [
        'Gestion numérique non-conformités',
        'Audits et plans d\'action',
        'Alertes et rappels automatiques',
      ],
    },
    {
      id: 'ventes',
      name: 'Ventes / Commerce',
      icon: LineChart,
      processes: [
        'CRM sur mesure',
        'Automatisation devis, relances',
        'Suivi opportunités',
      ],
    },
    {
      id: 'projets',
      name: 'Affaires / Projets',
      icon: Briefcase,
      processes: [
        'Suivi automatisé avancement',
        'Reporting automatique',
        'Gestion documentaire',
      ],
    },
    {
      id: 'appels',
      name: 'Appels d\'offres',
      icon: FileCheck,
      processes: [
        'Analyse automatique des dossiers',
        'Extraction critères',
        'Scoring et aide à la décision',
      ],
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Nos Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Des solutions sur mesure pour transformer vos données et processus métiers
              en avantages compétitifs concrets.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="data" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#E8CFA5] w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-[#1B2D5B]" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">
                Valorisation des Données (Data & IA)
              </h2>
              <p className="text-xl text-gray-600 mb-6 italic">
                "Vos données ont de la valeur. Nous vous aidons à l'exploiter."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <LineChart className="text-[#3A5BA0] mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2D5B] mb-2">Business Intelligence</h3>
                    <p className="text-gray-700">
                      Création de dashboards interactifs Power BI pour piloter votre activité en temps réel
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Brain className="text-[#3A5BA0] mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2D5B] mb-2">Intelligence Artificielle</h3>
                    <p className="text-gray-700">
                      Modèles prédictifs, NLP, classification automatique, chatbots intelligents
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Cpu className="text-[#3A5BA0] mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2D5B] mb-2">Data Engineering</h3>
                    <p className="text-gray-700">
                      Structuration, nettoyage et mise en qualité de vos données
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <FileText className="text-[#3A5BA0] mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1B2D5B] mb-2">Audit Data</h3>
                    <p className="text-gray-700">
                      Évaluer la maturité data de l'entreprise et définir une feuille de route
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-[#1B2D5B] to-[#3A5BA0] p-8 rounded-lg text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Exemples concrets</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#E8CFA5] rounded-full"></span>
                <span>Dashboard Power BI de suivi de la performance commerciale</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#E8CFA5] rounded-full"></span>
                <span>Modèle IA de prédiction de départ des collaborateurs (RH)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#E8CFA5] rounded-full"></span>
                <span>Analyse automatique de sentiments sur les retours clients</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="digitalisation" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="bg-[#E8CFA5] w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Settings className="text-[#1B2D5B]" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">
              Digitalisation & Automatisation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              "Libérez vos équipes des tâches répétitives. Concentrez-vous sur ce qui compte."
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#1B2D5B] mb-6 text-center">
              Processus automatisés par direction métier
            </h3>

            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {automationByDepartment.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(dept.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === dept.id
                      ? 'bg-[#1B2D5B] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <dept.icon size={20} />
                  <span>{dept.name}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F5F5F5] p-8 rounded-lg"
            >
              {automationByDepartment
                .filter((dept) => dept.id === activeTab)
                .map((dept) => (
                  <div key={dept.id}>
                    <h4 className="text-2xl font-bold text-[#1B2D5B] mb-6 flex items-center">
                      <dept.icon className="mr-3" size={28} />
                      {dept.name}
                    </h4>
                    <ul className="space-y-4">
                      {dept.processes.map((process, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-6 h-6 bg-[#E8CFA5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-[#1B2D5B] font-semibold text-sm">{index + 1}</span>
                          </span>
                          <span className="text-lg text-gray-700">{process}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="web" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="bg-[#E8CFA5] w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code className="text-[#1B2D5B]" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">
              Développement Web & Applicatifs sur mesure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic mb-8">
              "Des outils numériques créés pour vos besoins, pas l'inverse."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1B2D5B] to-[#3A5BA0] p-8 rounded-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Applications web sur mesure</h3>
              <p className="text-gray-200">
                Conception et développement d'applications web performantes, adaptées à vos processus métiers spécifiques
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#E8CFA5] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#1B2D5B]">Portails métiers</h3>
              <p className="text-gray-700">
                Portails fournisseurs, portails collaborateurs, espaces clients personnalisés
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#E8CFA5] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#1B2D5B]">Intranets et extranets</h3>
              <p className="text-gray-700">
                Solutions collaboratives pour améliorer la communication et le partage d'informations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#3A5BA0] to-[#1B2D5B] p-8 rounded-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Intégration systèmes</h3>
              <p className="text-gray-200">
                Connexion avec vos outils existants (ERP, CRM, SIRH...)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="cloud" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="bg-[#E8CFA5] w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Cloud className="text-[#1B2D5B]" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">
              Cloud & Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic mb-8">
              "Scalez votre infrastructure. Sécurisez vos données."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Server, title: 'Migration cloud', desc: 'Azure, AWS, GCP' },
              { icon: Zap, title: 'Architecture cloud-native', desc: 'Solutions modernes et scalables' },
              { icon: Lock, title: 'Sécurisation', desc: 'Gouvernance des données' },
              { icon: LineChart, title: 'Optimisation coûts', desc: 'Maîtrise budgétaire' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="bg-[#1B2D5B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-[#E8CFA5]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1B2D5B] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
