import { Link } from 'react-router-dom';
import { Database, Settings, Bot, Code, Cloud, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span className="text-5xl font-bold text-[#1B2D5B]">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const services = [
    {
      icon: Database,
      title: 'Data & IA',
      description: 'Valorisez vos données avec le BI, l\'IA et l\'analyse prédictive',
      link: '/services#data',
    },
    {
      icon: Settings,
      title: 'Digitalisation',
      description: 'Numérisez et optimisez vos processus métiers',
      link: '/services#digitalisation',
    },
    {
      icon: Bot,
      title: 'Automatisation',
      description: 'Automatisez les tâches répétitives pour gagner en productivité',
      link: '/services#automatisation',
    },
    {
      icon: Code,
      title: 'Web & Applicatifs',
      description: 'Applications sur mesure et solutions web performantes',
      link: '/services#web',
    },
    {
      icon: Cloud,
      title: 'Cloud',
      description: 'Migrez et optimisez vos infrastructures dans le cloud',
      link: '/services#cloud',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#1B2D5B] to-[#3A5BA0] text-white min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#3A5BA0] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[#1B2D5B] opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Transformez vos données<br />en levier de performance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              KRABDATA CONSULTING accompagne les entreprises dans leur transformation numérique
              en apportant de la valeur concrète à partir de leurs données.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-[#E8CFA5] text-[#1B2D5B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4b889] transition-colors duration-200 inline-flex items-center justify-center"
              >
                Découvrir nos services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#E8CFA5] text-[#E8CFA5] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E8CFA5] hover:text-[#1B2D5B] transition-colors duration-200"
              >
                Nous contacter
              </Link>
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
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nous ne faisons pas que du conseil, nous créons de la valeur mesurable. Notre approche
              pragmatique vous permet de gagner en efficacité, en fiabilité et en compétitivité grâce
              à la valorisation de vos données et l'automatisation de vos processus métiers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-4">Nos Domaines d'Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 block h-full group"
                >
                  <div className="bg-[#E8CFA5] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-[#1B2D5B]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B2D5B] mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                  <div className="mt-4 flex items-center text-[#3A5BA0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    En savoir plus <ArrowRight className="ml-2" size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-[#E8CFA5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-[#1B2D5B]" size={36} />
              </div>
              <Counter end={50} suffix="+" />
              <p className="text-xl text-gray-700 mt-2">Projets réalisés</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-[#E8CFA5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#1B2D5B]" size={36} />
              </div>
              <Counter end={30} suffix="+" />
              <p className="text-xl text-gray-700 mt-2">Clients satisfaits</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-[#E8CFA5] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-[#1B2D5B]" size={36} />
              </div>
              <Counter end={100} suffix="%" />
              <p className="text-xl text-gray-700 mt-2">Satisfaction client</p>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-[#1B2D5B] mb-6">Un projet ? Parlons-en.</h2>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez comment nous pouvons vous aider à transformer vos processus métiers
              et valoriser vos données.
            </p>
            <Link
              to="/contact"
              className="bg-[#1B2D5B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3A5BA0] transition-colors duration-200 inline-block"
            >
              Prendre contact
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
