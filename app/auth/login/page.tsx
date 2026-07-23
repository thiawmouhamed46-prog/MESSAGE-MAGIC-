'use client'

import { motion } from 'framer-motion'
import { MdEmail, MdLogin } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { SiMicrosoft } from 'react-icons/si'
import Link from 'next/link'

export default function LoginPage() {
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
          <p className="text-warm-dark/60 mt-2">Connectez-vous à votre compte</p>
        </div>

        <div className="card-premium space-y-4">
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-light-gray rounded-2xl font-medium hover:bg-light-gray transition">
            <FcGoogle className="w-5 h-5" />
            Continuer avec Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border-2 border-light-gray rounded-2xl font-medium hover:bg-light-gray transition">
            <SiMicrosoft className="w-5 h-5" />
            Continuer avec Microsoft
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-light-gray"></div>
            <span className="text-warm-dark/50 text-sm">ou</span>
            <div className="h-px flex-1 bg-light-gray"></div>
          </div>

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

          <button className="button-coral w-full flex items-center justify-center gap-2">
            <MdLogin className="w-5 h-5" />
            Se connecter
          </button>
        </div>

        <p className="text-center text-warm-dark/60 mt-6">
          Pas de compte? <Link href="/auth/signup" className="text-coral font-medium hover:underline">S'inscrire</Link>
        </p>
      </motion.div>
    </div>
  )
}
