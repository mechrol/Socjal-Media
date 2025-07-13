import React from 'react'
import { motion } from 'framer-motion'

const StatusToggle = ({ isActive, onToggle, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-10 h-6',
    medium: 'w-12 h-7',
    large: 'w-14 h-8'
  }

  const thumbSizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  }

  return (
    <motion.button
      onClick={onToggle}
      className={`relative ${sizeClasses[size]} rounded-full transition-colors duration-300 ${
        isActive ? 'bg-green-500' : 'bg-gray-300'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`absolute top-1 ${thumbSizeClasses[size]} bg-white rounded-full shadow-sm`}
        animate={{
          x: isActive ? (size === 'small' ? 16 : size === 'medium' ? 20 : 24) : 4
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  )
}

export default StatusToggle
