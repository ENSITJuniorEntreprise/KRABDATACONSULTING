import { motion } from 'motion/react';

export default function LegalMentions() {
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Mentions Légales</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4">Éditeur du site</h2>
            <p className="text-gray-700 mb-6">
              <strong>Raison sociale :</strong> KRABDATA CONSULTING<br />
              <strong>Forme juridique :</strong> [À compléter]<br />
              <strong>Capital social :</strong> [À compléter]<br />
              <strong>Siège social :</strong> [Adresse à compléter]<br />
              <strong>RCS :</strong> [À compléter]<br />
              <strong>SIRET :</strong> [À compléter]<br />
              <strong>Email :</strong> contact@krabdata.com
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Directeur de publication</h2>
            <p className="text-gray-700 mb-6">
              [Nom du directeur de publication à compléter]
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Hébergement</h2>
            <p className="text-gray-700 mb-6">
              <strong>Hébergeur :</strong> [À compléter]<br />
              <strong>Adresse :</strong> [À compléter]
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-6">
              L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété
              exclusive de KRABDATA CONSULTING, sauf mentions contraires. Toute reproduction, même partielle,
              est strictement interdite sans autorisation préalable.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Cookies</h2>
            <p className="text-gray-700 mb-6">
              Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des
              statistiques de visite. Vous pouvez à tout moment désactiver les cookies depuis votre navigateur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
