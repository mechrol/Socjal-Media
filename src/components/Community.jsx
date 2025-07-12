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
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Communities</h1>
          <p className="text-white/70">Discover and join communities that match your interests</p>
        </div>
        
        <motion.button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus size={20} />
          Create Community
        </motion.button>
      </motion.div>

      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <CommunitySearch 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800">
                  {category.label}
                </option>
              ))}
            </select>
            
            <div className="flex items-center gap-2 p-1 bg-white/10 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <List size={18} />
              </button>
            </div>
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
