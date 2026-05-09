import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

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
            <h1 className="text-5xl md:text-6xl font-black mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Un projet ? Une question ? Notre équipe est à votre écoute pour discuter
              de vos besoins et vous accompagner dans votre transformation numérique.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#1B2D5B] mb-8">Envoyez-nous un message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                  <p className="text-green-700">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="data-ia">Data & IA</option>
                      <option value="digitalisation">Digitalisation</option>
                      <option value="automatisation">Automatisation</option>
                      <option value="web">Développement Web</option>
                      <option value="cloud">Cloud & Infrastructure</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5BA0] focus:border-transparent outline-none transition resize-none"
                      placeholder="Décrivez votre projet ou votre besoin..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1B2D5B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3A5BA0] transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Envoyer le message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#1B2D5B] mb-8">Nos Coordonnées</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#E8CFA5] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#1B2D5B]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:contact@krabdata.com" className="text-[#3A5BA0] hover:underline">
                        contact@krabdata.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#E8CFA5] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#1B2D5B]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <p className="text-gray-700">+33 X XX XX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#E8CFA5] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#1B2D5B]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
                      <p className="text-gray-700">France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1B2D5B] to-[#3A5BA0] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-200">
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>Samedi - Dimanche : Fermé</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-200">
                    Réponse sous 24h ouvrées
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#1B2D5B] mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-[#3A5BA0] flex-shrink-0" size={20} />
                    <span className="text-gray-700">Expertise technique reconnue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-[#3A5BA0] flex-shrink-0" size={20} />
                    <span className="text-gray-700">Approche pragmatique et mesurable</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-[#3A5BA0] flex-shrink-0" size={20} />
                    <span className="text-gray-700">Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="text-[#3A5BA0] flex-shrink-0" size={20} />
                    <span className="text-gray-700">ROI rapide et concret</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
