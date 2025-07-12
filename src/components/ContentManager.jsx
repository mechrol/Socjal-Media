import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Calendar, Image, Video, FileText, Search, Filter, MoreHorizontal } from 'lucide-react'

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'all', label: 'All Content', count: 24 },
    { id: 'published', label: 'Published', count: 18 },
    { id: 'scheduled', label: 'Scheduled', count: 4 },
    { id: 'drafts', label: 'Drafts', count: 2 },
  ]

  const content = [
    {
      id: 1,
      title: 'Summer Collection Launch',
      type: 'image',
      platform: 'instagram',
      status: 'published',
      scheduledFor: '2024-01-15T10:00:00Z',
      engagement: { likes: 1250, comments: 89, shares: 45 },
      thumbnail: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Behind the Scenes Video',
      type: 'video',
      platform: 'tiktok',
      status: 'scheduled',
      scheduledFor: '2024-01-16T15:30:00Z',
      engagement: { likes: 0, comments: 0, shares: 0 },
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Product Announcement',
      type: 'text',
      platform: 'twitter',
      status: 'draft',
      scheduledFor: null,
      engagement: { likes: 0, comments: 0, shares: 0 },
      thumbnail: null
    },
    {
      id: 4,
      title: 'Customer Testimonial',
      type: 'image',
      platform: 'facebook',
      status: 'published',
      scheduledFor: '2024-01-14T12:00:00Z',
      engagement: { likes: 890, comments: 34, shares: 67 },
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Weekly Newsletter',
      type: 'text',
      platform: 'linkedin',
      status: 'scheduled',
      scheduledFor: '2024-01-17T09:00:00Z',
      engagement: { likes: 0, comments: 0, shares: 0 },
      thumbnail: null
    },
    {
      id: 6,
      title: 'Tutorial Video',
      type: 'video',
      platform: 'youtube',
      status: 'published',
      scheduledFor: '2024-01-13T14:00:00Z',
      engagement: { likes: 2340, comments: 156, shares: 234 },
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-500/20 text-green-400'
      case 'scheduled': return 'bg-blue-500/20 text-blue-400'
      case 'draft': return 'bg-yellow-500/20 text-yellow-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'image': return Image
      case 'video': return Video
      case 'text': return FileText
      default: return FileText
    }
  }

  const getPlatformColor = (platform) => {
    const colors = {
      instagram: 'text-instagram',
      twitter: 'text-twitter',
      facebook: 'text-facebook',
      linkedin: 'text-linkedin',
      tiktok: 'text-black',
      youtube: 'text-youtube'
    }
    return colors[platform] || 'text-gray-400'
  }

  const filteredContent = content.filter(item => {
    const matchesTab = activeTab === 'all' || item.status === activeTab
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Content Manager</h1>
          <p className="text-white/70">Manage your posts, schedules, and drafts</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Plus size={20} />
          Create Content
        </motion.button>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Content Types</h2>
            
            <div className="space-y-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium capitalize">{tab.label}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{tab.count}</span>
                </motion.button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Calendar size={18} />
                <span className="font-medium">Schedule Calendar</span>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-3 glass rounded-xl text-white hover:bg-white/20 transition-all duration-300"
              >
                <Filter size={18} />
                Filter
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredContent.map((item, index) => {
                  const TypeIcon = getTypeIcon(item.type)
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="glass rounded-xl overflow-hidden glass-hover"
                    >
                      {item.thumbnail && (
                        <div className="h-32 overflow-hidden">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <TypeIcon size={16} className="text-white/60" />
                            <span className={`text-sm font-medium capitalize ${getPlatformColor(item.platform)}`}>
                              {item.platform}
                            </span>
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/60 hover:text-white transition-colors duration-300"
                          >
                            <MoreHorizontal size={16} />
                          </motion.button>
                        </div>

                        <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{item.title}</h3>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                          
                          {item.scheduledFor && (
                            <span className="text-white/50 text-xs">
                              {new Date(item.scheduledFor).toLocaleDateString()}
                            </span>
                          )}
                        </div>

                        {item.status === 'published' && (
                          <div className="flex items-center gap-4 text-xs text-white/60">
                            <span>❤️ {item.engagement.likes}</span>
                            <span>💬 {item.engagement.comments}</span>
                            <span>🔄 {item.engagement.shares}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {filteredContent.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-white/60 mb-4">No content found</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium"
                >
                  Create Your First Post
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentManager
