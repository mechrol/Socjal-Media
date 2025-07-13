import React from 'react'
import { motion } from 'framer-motion'
import CommunityCard from './CommunityCard'
import { generateMockCommunities } from '../../utils/mockCommunityData'

const CommunityGrid = ({ 
  searchQuery, 
  selectedCategory, 
  viewMode, 
  onCommunitySelect,
  onCustomizeCommunity 
}) => {
  const communities = generateMockCommunities()

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || community.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleJoinToggle = (communityId) => {
    console.log('Toggle join for community:', communityId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ position: 'relative', zIndex: 1 }}>
      {filteredCommunities.map((community, index) => (
        <motion.div
          key={community.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          style={{ position: 'relative', zIndex: index + 2 }}
        >
          <CommunityCard
            community={community}
            viewMode={viewMode}
            onJoinToggle={handleJoinToggle}
            onSelect={onCommunitySelect}
            onCustomize={onCustomizeCommunity}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default CommunityGrid
