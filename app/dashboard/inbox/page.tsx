'use client'

import { motion } from 'framer-motion'
import { MdDashboard, MdEmail, MdSettings, MdLogout, MdSearch, MdFilterList } from 'react-icons/md'
import Link from 'next/link'

export default function InboxPage() {
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
          <h1 className="text-3xl font-bold text-warm-dark mb-4">Inbox</h1>
          <div className="flex gap-4">
            <div className="flex-1 flex items-center gap-3 bg-light-gray px-4 rounded-2xl">
              <MdSearch className="w-5 h-5 text-warm-dark/60" />
              <input
                type="text"
                placeholder="Rechercher des emails..."
                className="flex-1 bg-transparent py-3 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 bg-light-gray rounded-2xl hover:bg-coral/10 transition">
              <MdFilterList className="w-5 h-5" />
              Filtrer
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="card-premium text-center py-16">
            <MdEmail className="w-16 h-16 mx-auto mb-4 text-coral/30" />
            <h3 className="text-xl font-bold text-warm-dark mb-2">Inbox vide</h3>
            <p className="text-warm-dark/60">Connectez votre compte email pour voir vos messages</p>
          </div>
        </div>
      </main>
    </div>
  )
}
