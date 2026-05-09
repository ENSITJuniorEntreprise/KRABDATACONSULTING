import { motion } from 'motion/react';

export default function Privacy() {
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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Politique de Confidentialité</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4">Collecte des données</h2>
            <p className="text-gray-700 mb-6">
              KRABDATA CONSULTING collecte uniquement les données personnelles que vous nous fournissez
              volontairement via le formulaire de contact. Ces données incluent : nom, prénom, email,
              téléphone, entreprise et votre message.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Utilisation des données</h2>
            <p className="text-gray-700 mb-6">
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous envoyer des informations sur nos services (uniquement si vous y consentez)</li>
              <li>Améliorer nos services</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Conservation des données</h2>
            <p className="text-gray-700 mb-6">
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour
              lesquelles elles ont été collectées, et conformément aux obligations légales en vigueur.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Vos droits</h2>
            <p className="text-gray-700 mb-6">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@krabdata.com" className="text-[#3A5BA0] hover:underline">contact@krabdata.com</a>
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Sécurité</h2>
            <p className="text-gray-700 mb-6">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour
              assurer la sécurité de vos données personnelles et empêcher leur altération, leur perte
              ou l'accès par des tiers non autorisés.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Cookies</h2>
            <p className="text-gray-700 mb-6">
              Notre site peut utiliser des cookies pour améliorer votre expérience de navigation.
              Vous pouvez paramétrer votre navigateur pour refuser les cookies.
            </p>

            <h2 className="text-3xl font-bold text-[#1B2D5B] mb-4 mt-12">Modifications</h2>
            <p className="text-gray-700 mb-6">
              Cette politique de confidentialité peut être mise à jour. Nous vous recommandons de
              consulter régulièrement cette page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
