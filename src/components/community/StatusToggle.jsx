import React from 'react'
import { motion } from 'framer-motion'

const StatusToggle = ({ isActive, onToggle, size = 'default' }) => {
  const sizeClasses = {
    small: 'w-10 h-6',
    default: 'w-12 h-7',
    large: 'w-14 h-8'
  }

  const thumbSizeClasses = {
    small: 'w-4 h-4',
    default: 'w-5 h-5',
    large: 'w-6 h-6'
  }

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium ${isActive ? 'text-gray-400' : 'text-gray-700'}`}>
        Deactivated
      </span>
      
      <motion.button
        onClick={onToggle}
        className={`${sizeClasses[size]} rounded-full p-1 transition-all duration-300 ${
          isActive 
            ? 'bg-blue-500 shadow-lg shadow-blue-500/30' 
            : 'bg-gray-300 border border-gray-400'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`${thumbSizeClasses[size]} bg-white rounded-full shadow-lg`}
          animate={{
            x: isActive ? (size === 'small' ? 16 : size === 'large' ? 24 : 20) : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </motion.button>
      
      <span className={`text-sm font-medium ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
        Activated
      </span>
    </div>
  )
}

export default StatusToggle
