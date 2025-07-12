import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Calendar, Image, BarChart3, Users, Settings } from 'lucide-react'

const QuickActions = () => {
  const actions = [
    { icon: Plus, label: 'Create Post', color: 'from-blue-500 to-cyan-500' },
    { icon: Calendar, label: 'Schedule', color: 'from-purple-500 to-indigo-500' },
    { icon: Image, label: 'Media Library', color: 'from-pink-500 to-rose-500' },
    { icon: BarChart3, label: 'Analytics', color: 'from-green-500 to-emerald-500' },
    { icon: Users, label: 'Audience', color: 'from-orange-500 to-red-500' },
    { icon: Settings, label: 'Settings', color: 'from-gray-500 to-slate-500' },
  ]

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-xl p-4 glass-hover group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white" size={20} />
              </div>
              <p className="text-white/80 text-sm font-medium">{action.label}</p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActions
