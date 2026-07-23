'use client'

import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { SiMicrosoft } from 'react-icons/si'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center mx-auto mb-4">
            <MdEmail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-warm-dark">EmailAnswer</h1>
          <p className="text-warm-dark/60 mt-2">Créez votre compte gratuit</p>
        </div>

        <div className="card-premium space-y-4">
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-light-gray rounded-2xl font-medium hover:bg-light-gray transition">
            <FcGoogle className="w-5 h-5" />
            S'inscrire avec Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-light-gray rounded-2xl font-medium hover:bg-light-gray transition">
            <SiMicrosoft className="w-5 h-5" />
            S'inscrire avec Microsoft
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-light-gray"></div>
            <span className="text-warm-dark/50 text-sm">ou</span>
            <div className="h-px flex-1 bg-light-gray"></div>
          </div>

          <input
            type="text"
            placeholder="Nom complet"
            className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-2xl placeholder-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-coral"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-2xl placeholder-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-coral"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-2xl placeholder-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-coral"
          />

          <button className="button-coral w-full">
            Créer mon compte
          </button>
        </div>

        <p className="text-center text-warm-dark/60 mt-6">
          Vous avez un compte? <Link href="/auth/login" className="text-coral font-medium hover:underline">Se connecter</Link>
        </p>
      </motion.div>
    </div>
  )
}
