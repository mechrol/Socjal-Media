import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

const StatsCard = ({ title, value, change, trend, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass rounded-2xl p-6 glass-hover"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center`}>
          <Icon className="text-white" size={24} />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
          trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
        <p className="text-white/60 text-sm">{title}</p>
      </div>
    </motion.div>
  )
}

export default StatsCard
