import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Edit, 
  Eye, 
  Copy, 
  Users, 
  MessageSquare, 
  Settings,
  ExternalLink,
  Palette
} from 'lucide-react'

const CommunityActionDropdown = ({ community, isJoined, onJoinToggle, isOpen, onClose, onActionSelect }) => {
  const handleAction = (action) => {
    console.log(`Action: ${action} for community:`, community.name)
    if (onActionSelect) {
      onActionSelect(action)
    }
    onClose()
  }

  const actions = [
    { id: 'edit', label: 'Edit', icon: Edit, color: 'text-blue-600' },
    { id: 'visit', label: 'Visit', icon: Eye, color: 'text-green-600' },
    { id: 'customize', label: 'Customize Community', icon: Palette, color: 'text-purple-600' },
    { id: 'clone', label: 'Clone', icon: Copy, color: 'text-orange-600' },
    { id: 'members', label: 'AI Member Feed', icon: Users, color: 'text-indigo-600' },
    { id: 'custom-feed', label: 'AI Custom Prompt Feed', icon: MessageSquare, color: 'text-pink-600' }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[220px] max-h-[400px] overflow-y-auto"
          style={{ zIndex: 9999 }}
          onClick={(e) => e.stopPropagation()}
        >
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <motion.button
                key={action.id}
                onClick={() => handleAction(action.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${action.color} border-b border-gray-50 last:border-b-0`}
                whileHover={{ x: 4 }}
              >
                <Icon size={16} />
                <span className="font-medium text-sm text-gray-900 whitespace-nowrap">{action.label}</span>
                {action.id === 'visit' && <ExternalLink size={12} className="ml-auto text-gray-400" />}
              </motion.button>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default CommunityActionDropdown
