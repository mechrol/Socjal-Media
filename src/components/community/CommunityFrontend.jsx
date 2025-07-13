import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  Star,
  Trophy,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Brain,
  Zap,
  Heart,
  Share2,
  Bell,
  Settings
} from 'lucide-react'

const CommunityFrontend = ({ community, onBack }) => {
  const [activeSection, setActiveSection] = useState('feed')

  const sidebarItems = [
    { id: 'feed', label: 'Feed', icon: MessageCircle },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'courses', label: 'Courses / Products', icon: BookOpen },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'rewards', label: 'Rewards', icon: Award }
  ]

  const getCommunityTheme = () => {
    const themes = {
      'health-wellness': 'from-green-500 to-emerald-500',
      'subscription-services': 'from-purple-500 to-pink-500',
      'entrepreneurship': 'from-blue-500 to-indigo-500',
      'business': 'from-orange-500 to-red-500'
    }
    return themes[community.category] || 'from-gray-500 to-slate-500'
  }

  const getActAsTheme = () => {
    return {
      title: community.actAs || 'Learning Expert',
      description: community.learningFocus || 'Professional Development & Skill Enhancement',
      icon: Brain,
      color: 'text-purple-600'
    }
  }

  const actAsTheme = getActAsTheme()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getCommunityTheme()} text-white`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </motion.button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img
                src={community.image}
                alt={community.name}
                className="w-20 h-20 rounded-xl object-cover border-4 border-white/20"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">{community.name}</h1>
                <p className="text-white/90 mb-4 max-w-2xl">{community.description}</p>
                
                {/* Act As Theme */}
                <div className="flex items-center gap-4 text-sm bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Target size={16} />
                    <span className="font-medium">Act as: {actAsTheme.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lightbulb size={16} />
                    <span>Focus: {actAsTheme.description}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Share2 size={20} />
              </motion.button>
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Bell size={20} />
              </motion.button>
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <Settings size={20} />
              </motion.button>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold">{community.members?.toLocaleString()}</div>
              <div className="text-white/80 text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{community.posts}</div>
              <div className="text-white/80 text-sm">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{community.rating}</div>
              <div className="text-white/80 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${getCommunityTheme()} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <actAsTheme.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{actAsTheme.title}</h3>
                <p className="text-sm text-gray-600">Learning Organization</p>
              </div>

              <div className="space-y-2">
                {sidebarItems.map(item => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* My Points Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="text-yellow-500" size={18} />
                My Points
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full ml-auto">5</span>
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Make a post to get</span>
                  <span className="font-medium text-blue-600">1 Points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Comment on a post to get</span>
                  <span className="font-medium text-blue-600">1 Points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Like a comment or post to get</span>
                  <span className="font-medium text-blue-600">1 Points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mark complete a lesson to get</span>
                  <span className="font-medium text-purple-600">10 Points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Viral share of referral link</span>
                  <span className="font-medium text-purple-600">10 Points</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="font-medium text-gray-900 mb-2">Referral Link</h5>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="https://kontrakt.aitribes.app/ft/eXDMm"
                    readOnly
                    className="flex-1 px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg"
                  />
                  <motion.button
                    className="px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Copy
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Earn 10 points for every new sign up to the community through your referral link
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'feed' && (
                <div className="space-y-6">
                  {/* Post Creation */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <input
                        type="text"
                        placeholder={`What are you thinking about? Janusz`}
                        className="flex-1 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <MessageCircle size={16} />
                        Text
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <BookOpen size={16} />
                        Photo
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Calendar size={16} />
                        Audio
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Star size={16} />
                        Video
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <TrendingUp size={16} />
                        Poll
                      </button>
                    </div>
                  </div>

                  {/* Sample Post */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">Janusz</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Admin</span>
                        </div>
                        <span className="text-sm text-gray-500">5 days ago</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700 mb-3">
                        Demo password for logging into the Game - Decision Tree is - admin369
                      </p>
                      <p className="text-gray-700 mb-3">
                        Do not share this password with anyone. You can promote the link to the game and 
                        to this community available on the right side of the menu, the so-called Referral Link
                      </p>
                      <p className="text-gray-700">
                        Hasło demo do logowania do Gry - Drzewo decyzyjne to - admin369
                      </p>
                    </div>

                    {/* Featured Game/Content */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">DRZEWO DECYZYJNE</h4>
                          <p className="text-white/90 text-sm">STRATEGIC GAME</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm mb-4">
                        Rozwijaj swoje umiejętności strategicznego myślenia poprzez wyzwania rozwiązywania 
                        czynników w różnych scenariuszach biznesowych i osobistych
                      </p>
                      <motion.button
                        className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        Play Game
                      </motion.button>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Heart size={16} />
                        Like
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <MessageCircle size={16} />
                        Comment
                      </button>
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Share2 size={16} />
                        Share
                      </button>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Timeline</h3>
                    <p className="text-gray-600 text-sm mb-4">Latest activities</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">06:36 AM</span>
                        <span className="text-gray-900">Janusz added a new post</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">04:15 PM</span>
                        <span className="text-gray-900">Janusz added a new post</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other sections placeholder */}
              {activeSection !== 'feed' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {sidebarItems.find(item => item.id === activeSection)?.icon && 
                        React.createElement(sidebarItems.find(item => item.id === activeSection).icon, { size: 24, className: "text-gray-400" })
                      }
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {sidebarItems.find(item => item.id === activeSection)?.label}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      This section is being developed for the {actAsTheme.title} learning experience.
                    </p>
                    <motion.button
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      Coming Soon
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityFrontend
