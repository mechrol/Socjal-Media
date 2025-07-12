import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CommunitySearch from './community/CommunitySearch'
import CommunityGrid from './community/CommunityGrid'
import CreateCommunityModal from './community/CreateCommunityModal'
import CommunityDetails from './community/CommunityDetails'
import { Plus, Search, Filter, Grid, List } from 'lucide-react'

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedCommunity, setSelectedCommunity] = useState(null)

  const categories = [
    { id: 'all', label: 'All Communities' },
    { id: 'tech', label: 'Technology' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'education', label: 'Education' }
  ]

  if (selectedCommunity) {
    return (
      <CommunityDetails 
        community={selectedCommunity}
        onBack={() => setSelectedCommunity(null)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⚙</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Community</h1>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                6
              </span>
            </div>
            <p className="text-gray-600">Discover and join communities that match your interests</p>
          </div>
          
          <motion.button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} />
            New Community
          </motion.button>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Community Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            
            <motion.button
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </div>
        </div>

        <CommunityGrid 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          viewMode={viewMode}
          onCommunitySelect={setSelectedCommunity}
        />
      </div>

      <AnimatePresence>
        {showCreateModal && (
          <CreateCommunityModal 
            onClose={() => setShowCreateModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Community
