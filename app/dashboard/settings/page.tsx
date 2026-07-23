'use client'

import { motion } from 'framer-motion'
import { MdDashboard, MdEmail, MdSettings, MdLogout, MdToggleOn } from 'react-icons/md'
import Link from 'next/link'

export default function SettingsPage() {
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
          <h1 className="text-3xl font-bold text-warm-dark">Paramètres</h1>
        </div>

        <div className="p-6 max-w-3xl">
          {/* Account Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-premium mb-6"
          >
            <h2 className="text-2xl font-bold text-warm-dark mb-6">Compte</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-light-gray">
                <div>
                  <p className="font-medium text-warm-dark">Email</p>
                  <p className="text-sm text-warm-dark/60">user@example.com</p>
                </div>
                <button className="text-coral hover:underline">Modifier</button>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-light-gray">
                <div>
                  <p className="font-medium text-warm-dark">Mot de passe</p>
                  <p className="text-sm text-warm-dark/60">Changé il y a 3 mois</p>
                </div>
                <button className="text-coral hover:underline">Modifier</button>
              </div>
            </div>
          </motion.div>

          {/* Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-premium"
          >
            <h2 className="text-2xl font-bold text-warm-dark mb-6">Préférences</h2>
            <div className="space-y-4">
              {[
                { label: 'Notifications par email', enabled: true },
                { label: 'Résumé hebdomadaire', enabled: true },
                { label: 'Suggestions intelligentes', enabled: false },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-light-gray last:border-0">
                  <p className="font-medium text-warm-dark">{pref.label}</p>
                  <button className={`w-12 h-6 rounded-full transition ${
                    pref.enabled ? 'bg-coral' : 'bg-light-gray'
                  }`}>
                    <div className={`w-5 h-5 rounded-full bg-white transition ${
                      pref.enabled ? 'ml-6' : 'ml-0.5'
                    }`}></div>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
