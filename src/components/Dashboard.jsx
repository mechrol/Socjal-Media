import React from 'react'
import { motion } from 'framer-motion'
import StatsCard from './StatsCard'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import { TrendingUp, Users, Heart, MessageCircle, Share2, Eye } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Followers',
      value: '124.5K',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Engagement Rate',
      value: '8.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Total Posts',
      value: '1,247',
      change: '+45',
      trend: 'up',
      icon: MessageCircle,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Reach',
      value: '89.3K',
      change: '+18.7%',
      trend: 'up',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Alex!</h1>
          <p className="text-white/70">Here's what's happening with your social media today.</p>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center"
        >
          <TrendingUp className="text-white" size={24} />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <QuickActions />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <RecentActivity />
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
