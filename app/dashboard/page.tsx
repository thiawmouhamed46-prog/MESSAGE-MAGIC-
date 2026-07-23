'use client'

import { motion } from 'framer-motion'
import { MdDashboard, MdEmail, MdSettings, MdLogout, MdTrendingUp, MdAttachMoney } from 'react-icons/md'
import Link from 'next/link'

export default function DashboardPage() {
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
            { icon: MdTrendingUp, label: 'Analytique', href: '/dashboard/analytics' },
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

        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-warm-dark hover:bg-light-gray rounded-2xl transition">
            <MdLogout className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Topbar */}
        <div className="bg-white border-b border-light-gray p-6">
          <h1 className="text-3xl font-bold text-warm-dark">Bienvenue de retour!</h1>
          <p className="text-warm-dark/60">Voici votre vue d'ensemble</p>
        </div>

        {/* Stats */}
        <div className="p-6">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Emails Traités', value: '0', icon: MdEmail },
              { label: 'Non Lus', value: '0', icon: MdEmail },
              { label: 'Automatisations', value: '0', icon: MdTrendingUp },
              { label: 'Forfait', value: 'Starter', icon: MdAttachMoney },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-premium"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-warm-dark/60 text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-warm-dark">{stat.value}</p>
                    </div>
                    <Icon className="w-10 h-10 text-coral/20" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Empty State */}
          <div className="card-premium text-center py-16">
            <MdEmail className="w-16 h-16 mx-auto mb-4 text-coral/30" />
            <h3 className="text-xl font-bold text-warm-dark mb-2">Aucun email pour le moment</h3>
            <p className="text-warm-dark/60 mb-6">Connectez votre Gmail ou Outlook pour commencer</p>
            <button className="button-coral inline-block">
              Connecter mon email
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
