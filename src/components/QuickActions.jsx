import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../translations'
import { Plus, Calendar, BarChart3, Settings } from 'lucide-react'

const QuickActions = () => {
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage)

  const actions = [
    {
      title: t('createPost'),
      icon: Plus,
      color: 'from-blue-500 to-cyan-500',
      description: 'Create a new social media post'
    },
    {
      title: t('scheduleContent'),
      icon: Calendar,
      color: 'from-purple-500 to-indigo-500',
      description: 'Schedule content for later'
    },
    {
      title: t('viewAnalytics'),
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      description: 'View detailed analytics'
    },
    {
      title: t('manageAccounts'),
      icon: Settings,
      color: 'from-pink-500 to-rose-500',
      description: 'Manage social accounts'
    }
  ]

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">{t('quickActions')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-left group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-1">{action.title}</h3>
              <p className="text-white/60 text-sm">{action.description}</p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActions
