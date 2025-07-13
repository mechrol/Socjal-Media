import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, MessageCircle, Star, Crown, Settings, Share2, Bell, Plus } from 'lucide-react'
import CommunityActionDropdown from './CommunityActionDropdown'
import CustomizeCommunityTab from './CustomizeCommunityTab'

const CommunityDetails = ({ community, onBack }) => {
  const [activeTab, setActiveTab] = useState('posts')
  const [isJoined, setIsJoined] = useState(community.isJoined)

  const tabs = [
    { id: 'posts', label: 'Posts' },
    { id: 'members', label: 'Members' },
    { id: 'events', label: 'Events' },
    { id: 'customize', label: 'Customize' },
    { id: 'about', label: 'About' }
  ]

  const themeClasses = {
    modern: 'from-blue-500/20 to-purple-500/20 border-blue-500/30',
    warm: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
    nature: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    elegant: 'from-gray-500/20 to-slate-500/20 border-gray-500/30',
    vibrant: 'from-pink-500/20 to-yellow-500/20 border-pink-500/30'
  }

  const handleJoinToggle = () => {
    setIsJoined(!isJoined)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ArrowLeft size={20} />
          Back to Communities
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-64">
            <img
              src={community.image}
              alt={community.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {community.isPremium && (
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-yellow-500 rounded-full">
                <Crown size={16} className="text-white" />
                <span className="text-white text-sm font-medium">Premium</span>
              </div>
            )}

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{community.name}</h1>
                  <p className="text-white/90 mb-4">{community.description}</p>
                  <div className="flex items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span>{community.members.toLocaleString()} members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={18} />
                      <span>{community.posts} posts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={18} />
                      <span>{community.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <motion.button
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 size={20} />
                  </motion.button>
                  
                  <motion.button
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Bell size={20} />
                  </motion.button>
                  
                  <CommunityActionDropdown
                    community={{ ...community, isJoined }}
                    isJoined={isJoined}
                    onJoinToggle={handleJoinToggle}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {isJoined && activeTab !== 'customize' && (
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={18} />
                New Post
              </motion.button>
            )}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'posts' && (
              <div className="space-y-4">
                <div className="text-center py-12 text-gray-500">
                  <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No posts yet. Be the first to share something!</p>
                </div>
              </div>
            )}
            
            {activeTab === 'members' && (
              <div className="space-y-4">
                <div className="text-center py-12 text-gray-500">
                  <Users size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Member list will be displayed here</p>
                </div>
              </div>
            )}
            
            {activeTab === 'events' && (
              <div className="space-y-4">
                <div className="text-center py-12 text-gray-500">
                  <p>Upcoming events will be shown here</p>
                </div>
              </div>
            )}

            {activeTab === 'customize' && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <CustomizeCommunityTab community={community} />
              </div>
            )}
            
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">About this community</h3>
                  <p className="text-gray-600 leading-relaxed">{community.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Stats</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">{community.members.toLocaleString()}</div>
                      <div className="text-gray-600 text-sm">Members</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">{community.posts}</div>
                      <div className="text-gray-600 text-sm">Posts</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">{community.rating}</div>
                      <div className="text-gray-600 text-sm">Rating</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">24/7</div>
                      <div className="text-gray-600 text-sm">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CommunityDetails
