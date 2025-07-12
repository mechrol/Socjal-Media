import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Edit3, 
  ExternalLink, 
  Palette, 
  Copy, 
  Users, 
  MessageSquare,
  X
} from 'lucide-react'

const CommunityActionDropdown = ({ community, isJoined, onJoinToggle, isOpen, onClose }) => {
  const dropdownRef = useRef(null)

  const actions = [
    {
      id: 'edit',
      label: 'Edit',
      icon: Edit3,
      color: 'text-gray-700 hover:text-blue-600'
    },
    {
      id: 'visit',
      label: 'Visit',
      icon: ExternalLink,
      color: 'text-gray-700 hover:text-green-600'
    },
    {
      id: 'customize',
      label: 'Customize Community',
      icon: Palette,
      color: 'text-gray-700 hover:text-purple-600'
    },
    {
      id: 'clone',
      label: 'Clone',
      icon: Copy,
      color: 'text-gray-700 hover:text-orange-600'
    },
    {
      id: 'ai-member-feed',
      label: 'AI Member Feed',
      icon: Users,
      color: 'text-gray-700 hover:text-pink-600'
    },
    {
      id: 'ai-custom-prompt',
      label: 'AI Custom Prompt Feed',
      icon: MessageSquare,
      color: 'text-gray-700 hover:text-cyan-600'
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  const handleActionClick = (actionId) => {
    console.log(`Action clicked: ${actionId} for community: ${community.name}`)
    onClose()
    
    // Handle specific actions
    switch (actionId) {
      case 'edit':
        // Open edit modal
        break
      case 'visit':
        // Navigate to community page
        break
      case 'customize':
        // Open customization panel
        break
      case 'clone':
        // Open clone dialog
        break
      case 'ai-member-feed':
        // Open AI member feed
        break
      case 'ai-custom-prompt':
        // Open AI custom prompt feed
        break
      default:
        break
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden min-w-[220px]"
    >
      <div className="p-2">
        {actions.map((action, index) => {
          const IconComponent = action.icon
          return (
            <motion.button
              key={action.id}
              onClick={() => handleActionClick(action.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
            >
              <IconComponent 
                size={16} 
                className={`${action.color} transition-colors duration-200`}
              />
              <span className="text-gray-700 font-medium text-sm">
                {action.label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

export default CommunityActionDropdown
