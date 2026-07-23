'use client'

import { motion } from 'framer-motion'
import { MdDashboard, MdEmail, MdSettings, MdLogout, MdCheckCircle, MdAttachMoney } from 'react-icons/md'
import Link from 'next/link'

export default function BillingPage() {
  return (
    <div className="flex min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-light-gray p-6">
        <Link href="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
            <MdEmail className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-warm-dark">EmailAnswer</span>
        </Link>

        <nav className="space-y-2">
          {[
            { icon: MdDashboard, label: 'Dashboard', href: '/dashboard' },
            { icon: MdEmail, label: 'Inbox', href: '/dashboard/inbox' },
            { icon: MdAttachMoney, label: 'Facturation', href: '/dashboard/billing' },
            { icon: MdSettings, label: 'Paramètres', href: '/dashboard/settings' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <Link
                key={i}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-warm-dark/70 hover:bg-light-gray transition"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="bg-white border-b border-light-gray p-6">
          <h1 className="text-3xl font-bold text-warm-dark">Facturation & Abonnement</h1>
        </div>

        <div className="p-6 max-w-4xl">
          {/* Current Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-premium mb-8"
          >
            <h2 className="text-2xl font-bold text-warm-dark mb-6">Forfait actuel</h2>
            <div className="flex items-center justify-between p-6 bg-light-gray rounded-2xl">
              <div>
                <h3 className="text-xl font-bold text-warm-dark">Starter</h3>
                <p className="text-warm-dark/60">29€ / mois</p>
              </div>
              <button className="button-coral">
                Changer de forfait
              </button>
            </div>
          </motion.div>

          {/* Upgrade Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-warm-dark mb-6">Forfaits disponibles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Starter',
                  price: '29',
                  features: ['100 emails/jour', 'Tri de base', 'Support email']
                },
                {
                  name: 'Pro',
                  price: '79',
                  features: ['Emails illimités', 'Tri avancé', 'Automatisations', 'Support 24/7']
                },
                {
                  name: 'Enterprise',
                  price: 'Devis',
                  features: ['Tout illimité', 'API', 'Support dédié', 'SLA']
                },
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-premium"
                >
                  <h3 className="text-2xl font-bold text-warm-dark mb-3">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-coral">{plan.price}</span>
                    {plan.price !== 'Devis' && <span className="text-warm-dark/60">/mois</span>}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <MdCheckCircle className="w-5 h-5 text-coral" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="button-coral w-full">
                    Sélectionner
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
