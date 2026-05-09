import { motion } from 'motion/react';
import { Target, Lightbulb, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Pragmatisme',
      description: 'Des solutions concrètes, pas du jargon. Nous privilégions l\'action et les résultats mesurables.',
      color: 'from-[#1B2D5B] to-[#3A5BA0]',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Chaque projet doit créer de la valeur mesurable. Nous ne facturons que ce qui apporte un bénéfice réel.',
      color: 'from-[#3A5BA0] to-[#1B2D5B]',
    },
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Un accompagnement personnalisé, pas du consulting de masse. Nous prenons le temps de comprendre vos enjeux.',
      color: 'from-[#1B2D5B] to-[#3A5BA0]',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à la pointe des technologies pour vous offrir les meilleures solutions du marché.',
      color: 'from-[#3A5BA0] to-[#1B2D5B]',
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">À propos de KRABDATA</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Cabinet de conseil spécialisé dans la valorisation des données et
              l'automatisation des processus métiers
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-6">Notre Histoire</h2>
            <div className="text-lg text-gray-700 space-y-4 text-left">
              <p>
                KRABDATA CONSULTING est né d'un constat simple : les entreprises disposent de volumes
                de données toujours plus importants, mais peinent à en extraire de la valeur concrète.
                Parallèlement, de nombreux processus métiers restent manuels et chronophages, freinant
                la productivité et l'innovation.
              </p>
              <p>
                Notre mission est d'accompagner les entreprises dans leur transformation numérique
                en apportant une expertise technique pointue et une approche pragmatique. Nous ne
                faisons pas que du conseil théorique : nous créons des solutions qui génèrent un
                impact mesurable et un retour sur investissement rapide.
              </p>
              <p>
                Le crabe qui symbolise notre marque représente notre capacité à saisir, analyser et
                valoriser les données sous tous les angles, tout en maintenant une prise solide sur
                les réalités opérationnelles de nos clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">Notre Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Devenir le partenaire de référence des PME et ETI dans leur transformation numérique,
              en alliant expertise technique, compréhension métier et impact mesurable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#1B2D5B] to-[#3A5BA0] text-white p-12 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">Notre Approche</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-black text-[#E8CFA5] mb-4">1</div>
                <h4 className="text-xl font-semibold mb-2">Comprendre</h4>
                <p className="text-gray-200">
                  Analyse approfondie de vos processus et identification des opportunités
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-[#E8CFA5] mb-4">2</div>
                <h4 className="text-xl font-semibold mb-2">Créer</h4>
                <p className="text-gray-200">
                  Développement de solutions sur mesure adaptées à vos besoins spécifiques
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-[#E8CFA5] mb-4">3</div>
                <h4 className="text-xl font-semibold mb-2">Accompagner</h4>
                <p className="text-gray-200">
                  Formation, support et amélioration continue pour garantir le succès
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et décisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className={`bg-gradient-to-br ${value.color} p-8 text-white h-full`}>
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-100">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E8CFA5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-6">Notre Engagement</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                Nous nous engageons à ne travailler que sur des projets où nous sommes convaincus
                de pouvoir créer de la valeur. Chaque euro investi dans nos services doit générer
                un retour mesurable pour votre entreprise.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-2xl font-semibold text-[#1B2D5B]">
                  "Votre succès est notre seul indicateur de performance"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-6">Prêt à démarrer ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discutons de vos enjeux et voyons ensemble comment nous pouvons vous aider
              à atteindre vos objectifs.
            </p>
            <a
              href="/contact"
              className="bg-[#1B2D5B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3A5BA0] transition-colors duration-200 inline-block"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
