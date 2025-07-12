import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Star, Crown } from 'lucide-react'

const CommunityCard = ({ community, viewMode }) => {
  const themeClasses = {
    modern: 'from-blue-500/20 to-purple-500/20 border-blue-500/30',
    warm: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
    nature: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    elegant: 'from-gray-500/20 to-slate-500/20 border-gray-500/30',
    vibrant: 'from-pink-500/20 to-yellow-500/20 border-pink-500/30'
  }

  const badgeColors = {
    tech: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    design: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    business: 'bg-green-500/20 text-green-300 border-green-500/30',
    lifestyle: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    education: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        className={`glass rounded-xl p-6 bg-gradient-to-r ${themeClasses[community.theme]} border hover:shadow-xl transition-all duration-300`}
        whileHover={{ y: -2 }}
      >
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={community.image}
              alt={community.name}
              className="w-16 h-16 rounded-xl object-cover"
            />
            {community.isPremium && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <Crown size={12} className="text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white">{community.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${badgeColors[community.category]}`}>
                {community.category}
              </span>
            </div>
            <p className="text-white/70 mb-3">{community.description}</p>
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span className="text-sm">{community.members.toLocaleString()} members</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span className="text-sm">{community.posts} posts</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span className="text-sm">{community.rating}</span>
              </div>
            </div>
          </div>
          
          <motion.button
            className="px-6 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {community.isJoined ? 'Joined' : 'Join'}
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`glass rounded-xl overflow-hidden bg-gradient-to-br ${themeClasses[community.theme]} border hover:shadow-xl transition-all duration-300`}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-48 object-cover"
        />
        {community.isPremium && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <Crown size={16} className="text-white" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${badgeColors[community.category]}`}>
            {community.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
        <p className="text-white/70 mb-4 line-clamp-2">{community.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{community.members.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} />
              <span>{community.posts}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} />
              <span>{community.rating}</span>
            </div>
          </div>
        </div>
        
        <motion.button
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
            community.isJoined
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {community.isJoined ? 'Joined' : 'Join Community'}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default CommunityCard
