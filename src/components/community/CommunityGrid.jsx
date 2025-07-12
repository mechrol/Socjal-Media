import React from 'react'
import { motion } from 'framer-motion'
import CommunityCard from './CommunityCard'
import { generateMockCommunities } from '../../utils/mockCommunityData'

const CommunityGrid = ({ searchQuery, selectedCategory, viewMode, onCommunitySelect }) => {
  const communities = generateMockCommunities()

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || community.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (filteredCommunities.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-white/60 text-lg mb-2">No communities found</div>
        <div className="text-white/40">Try adjusting your search or filters</div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}
    >
      {filteredCommunities.map((community) => (
        <motion.div
          key={community.id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
          onClick={() => onCommunitySelect(community)}
        >
          <CommunityCard 
            community={community} 
            viewMode={viewMode}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CommunityGrid
