import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, MoreHorizontal, Eye } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(prev => liked ? prev - 1 : prev + 1)
  }

  const getPlatformColor = (platform) => {
    const colors = {
      twitter: 'from-twitter to-blue-400',
      instagram: 'from-instagram to-pink-400',
      facebook: 'from-facebook to-blue-500',
      linkedin: 'from-linkedin to-blue-600',
      tiktok: 'from-gray-800 to-gray-600',
      youtube: 'from-youtube to-red-500'
    }
    return colors[platform] || 'from-gray-500 to-gray-400'
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass rounded-2xl overflow-hidden glass-hover"
    >
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt="Post content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getPlatformColor(post.platform)} rounded-full text-white text-xs font-medium capitalize`}>
            {post.platform}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium text-sm">{post.author.name}</p>
              <p className="text-white/60 text-xs">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <MoreHorizontal size={20} />
          </motion.button>
        </div>

        <p className="text-white/90 text-sm mb-4 leading-relaxed">{post.content}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors duration-300 ${
                liked ? 'text-pink-400' : 'text-white/60 hover:text-pink-400'
              }`}
            >
              <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-sm font-medium">{likes}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-white/60 hover:text-blue-400 transition-colors duration-300"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">{post.comments}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors duration-300"
            >
              <Share2 size={18} />
              <span className="text-sm font-medium">{post.shares}</span>
            </motion.button>
          </div>

          <div className="flex items-center gap-1 text-white/50 text-xs">
            <Eye size={14} />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PostCard
