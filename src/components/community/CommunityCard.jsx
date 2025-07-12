import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Star, Crown, ChevronDown } from 'lucide-react'
import CommunityActionDropdown from './CommunityActionDropdown'
import StatusToggle from './StatusToggle'

const CommunityCard = ({ community, viewMode, onJoinToggle }) => {
  const [isActive, setIsActive] = useState(community.isActive || true)
  const [showActions, setShowActions] = useState(false)

  const categoryColors = {
    tech: 'text-blue-400',
    design: 'text-purple-400',
    business: 'text-green-400',
    lifestyle: 'text-pink-400',
    education: 'text-yellow-400',
    'subscription-services': 'text-indigo-400',
    'health-wellness': 'text-emerald-400',
    entrepreneurship: 'text-orange-400'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const getCategoryLabel = (category) => {
    const labels = {
      tech: 'Technology',
      design: 'Design',
      business: 'Business',
      lifestyle: 'Health and Wellness',
      education: 'Education',
      'subscription-services': 'Subscription Services',
      'health-wellness': 'Health and Wellness',
      entrepreneurship: 'Entrepreneurship'
    }
    return labels[category] || category
  }

  // Apply gray styling when deactivated
  const cardClasses = isActive 
    ? "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    : "bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 opacity-75"

  const textClasses = isActive 
    ? "text-gray-900"
    : "text-gray-500"

  const categoryTextClasses = isActive 
    ? categoryColors[community.category] || 'text-gray-500'
    : 'text-gray-400'

  const descriptionClasses = isActive 
    ? "text-gray-600"
    : "text-gray-400"

  const dateClasses = isActive 
    ? "text-gray-500"
    : "text-gray-400"

  const statsClasses = isActive 
    ? "text-gray-500"
    : "text-gray-400"

  return (
    <motion.div
      className={cardClasses}
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header with premium badge */}
      {community.isPremium && (
        <div className={`${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'} px-4 py-2`}>
          <div className="flex items-center gap-2 text-white text-sm font-medium">
            <Crown size={16} />
            <span>PATRON</span>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="p-6">
        {/* Community image */}
        <div className="relative mb-4">
          <img
            src={community.image}
            alt={community.name}
            className={`w-full h-32 object-cover rounded-xl ${!isActive ? 'grayscale' : ''}`}
          />
        </div>

        {/* Community info */}
        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-2 ${textClasses}`}>{community.name}</h3>
          <p className={`text-sm font-medium mb-3 ${categoryTextClasses}`}>
            {getCategoryLabel(community.category)}
          </p>
          
          {community.description && (
            <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${descriptionClasses}`}>
              {community.description}
            </p>
          )}
        </div>

        {/* Date and controls */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm ${dateClasses}`}>
            {formatDate(community.createdAt || '2025-02-28')}
          </span>
          
          <div className="flex items-center gap-4">
            <StatusToggle 
              isActive={isActive}
              onToggle={() => setIsActive(!isActive)}
              size="small"
            />
            
            <div className="relative">
              <motion.button
                onClick={() => setShowActions(!showActions)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-gray-400 text-white hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Actions
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${showActions ? 'rotate-180' : ''}`}
                />
              </motion.button>

              {showActions && (
                <div className="absolute top-full right-0 mt-2 z-50">
                  <CommunityActionDropdown
                    community={community}
                    isJoined={true}
                    onJoinToggle={() => onJoinToggle(community.id)}
                    isOpen={showActions}
                    onClose={() => setShowActions(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        {(community.members || community.posts || community.rating) && (
          <div className={`flex items-center gap-4 text-sm pt-4 border-t ${isActive ? 'border-gray-100' : 'border-gray-200'} ${statsClasses}`}>
            {community.members && (
              <div className="flex items-center gap-1">
                <Users size={14} />
                <span>{community.members.toLocaleString()}</span>
              </div>
            )}
            {community.posts && (
              <div className="flex items-center gap-1">
                <MessageCircle size={14} />
                <span>{community.posts}</span>
              </div>
            )}
            {community.rating && (
              <div className="flex items-center gap-1">
                <Star size={14} />
                <span>{community.rating}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default CommunityCard
