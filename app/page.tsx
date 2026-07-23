'use client'

import { motion } from 'framer-motion'
import { MdEmail, MdAutoAwesome, MdTrendingUp, MdShield } from 'react-icons/md'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-light-gray">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
            <MdEmail className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-warm-dark">EmailAnswer</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="text-warm-dark hover:text-coral transition">
            Se connecter
          </Link>
          <button className="button-coral">
            Essayer gratuitement
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="px-8 py-24 text-center max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-6xl font-bold text-warm-dark mb-6 leading-tight"
        >
          L'IA qui transforme votre boîte mail en machine de productivité
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-warm-dark/70 mb-12 leading-relaxed"
        >
          Classez, répondez et automatisez vos emails en quelques secondes.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex justify-center gap-4"
        >
          <button className="button-coral text-lg">
            Essayer gratuitement
          </button>
          <Link href="/dashboard" className="button-secondary text-lg inline-block">
            Voir le dashboard
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="px-8 py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-warm-dark mb-16 text-center">
            Fonctionnalités Principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MdAutoAwesome, title: 'Tri Intelligent', desc: 'Classez automatiquement vos emails' },
              { icon: MdEmail, title: 'Brouillons IA', desc: 'Générez des réponses en un clic' },
              { icon: MdTrendingUp, title: 'Automatisations', desc: 'Créez des workflows personnalisés' },
              { icon: MdShield, title: 'Sécurisé', desc: 'Vos données protégées' },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-premium text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-coral" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-warm-dark/60 text-sm">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-warm-dark mb-16 text-center">
          Plans de Tarification
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '29',
              features: ['Jusqu\'à 100 emails/jour', 'Tri de base', 'Support email']
            },
            {
              name: 'Pro',
              price: '79',
              popular: true,
              features: ['Emails illimités', 'Tri avancé + IA', 'Automatisations', 'Support prioritaire']
            },
            {
              name: 'Enterprise',
              price: 'Sur devis',
              features: ['Tout illimité', 'API personnalisée', 'Équipe dédiée', 'SLA garanti']
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 transition-all ${
                plan.popular
                  ? 'bg-coral text-white shadow-medium scale-105'
                  : 'card-premium'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${ plan.popular ? '' : 'text-coral'}`}>
                  {plan.price}
                </span>
                {plan.price !== 'Sur devis' && <span className={plan.popular ? '' : 'text-warm-dark/60'}>/mois</span>}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={plan.popular ? 'w-full bg-white text-coral font-bold py-3 rounded-2xl hover:bg-light-gray' : 'button-coral w-full'}>
                Commencer
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-dark text-cream px-8 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 EmailAnswer. Tous droits réservés.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-coral transition">Confidentialité</a>
            <a href="#" className="hover:text-coral transition">Conditions</a>
            <a href="#" className="hover:text-coral transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
