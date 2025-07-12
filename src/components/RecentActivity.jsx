import React from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, UserPlus } from 'lucide-react'

const RecentActivity = () => {
  const activities = [
    {
      type: 'like',
      icon: Heart,
      message: 'Your post got 127 new likes',
      time: '2 minutes ago',
      color: 'text-pink-400'
    },
    {
      type: 'comment',
      icon: MessageCircle,
      message: '15 new comments on your latest post',
      time: '5 minutes ago',
      color: 'text-blue-400'
    },
    {
      type: 'share',
      icon: Share2,
      message: 'Post shared 23 times',
      time: '10 minutes ago',
      color: 'text-green-400'
    },
    {
      type: 'follower',
      icon: UserPlus,
      message: '8 new followers today',
      time: '1 hour ago',
      color: 'text-purple-400'
    },
    {
      type: 'like',
      icon: Heart,
      message: 'Story viewed 1.2K times',
      time: '2 hours ago',
      color: 'text-pink-400'
    }
  ]

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl glass-hover"
            >
              <div className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ${activity.color}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{activity.message}</p>
                <p className="text-white/50 text-xs">{activity.time}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-300"
      >
        View all activity
      </motion.button>
    </div>
  )
}

export default RecentActivity
