import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, UserCheck, Store } from 'lucide-react'

const ResellerDropdown = ({ isOpen, onClose, selectedTab, onTabSelect }) => {
  const dropdownRef = useRef(null)

  const tabs = [
    {
      id: 'Manage Client',
      label: 'Manage Client',
      icon: Users,
      color: 'text-gray-700 hover:text-blue-600'
    },
    {
      id: 'Team Member',
      label: 'Team Member',
      icon: UserCheck,
      color: 'text-gray-700 hover:text-green-600'
    },
    {
      id: 'Reseller',
      label: 'Reseller',
      icon: Store,
      color: 'text-gray-700 hover:text-purple-600'
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

  const handleTabClick = (tabId) => {
    onTabSelect(tabId)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-full mt-2 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden min-w-[180px] z-50"
        >
          <div className="p-2">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon
              const isSelected = selectedTab === tab.id
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                    isSelected 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <IconComponent 
                    size={16} 
                    className={`transition-colors duration-200 ${
                      isSelected ? 'text-blue-600' : tab.color
                    }`}
                  />
                  <span className={`font-medium text-sm ${
                    isSelected ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {tab.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResellerDropdown
