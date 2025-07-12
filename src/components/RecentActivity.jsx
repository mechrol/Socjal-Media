import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../translations'
import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react'

const RecentActivity = () => {
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation(currentLanguage)

  const activities = [
    {
      type: 'like',
      icon: Heart,
      color: 'text-red-400',
      message: 'Your post received 127 new likes',
      time: '2 minutes ago'
    },
    {
      type: 'comment',
      icon: MessageCircle,
      color: 'text-blue-400',
      message: 'New comment on your latest post',
      time: '5 minutes ago'
    },
    {
      type: 'share',
      icon: Share2,
      color: 'text-green-400',
      message: 'Your content was shared 23 times',
      time: '10 minutes ago'
    },
    {
      type: 'trending',
      icon: TrendingUp,
      color: 'text-purple-400',
      message: 'Your post is trending in your niche',
      time: '15 minutes ago'
    }
  ]

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">{t('recentActivity')}</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className={`p-2 rounded-lg bg-white/10 ${activity.color}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{activity.message}</p>
                <p className="text-white/60 text-xs mt-1">{activity.time}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentActivity
