import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  Settings, 
  Palette, 
  Layout, 
  Users, 
  BookOpen, 
  Calendar,
  DollarSign,
  Eye,
  Save,
  Upload,
  Plus,
  Trash2,
  Edit3,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react'

const CustomizeCommunity = ({ community, onBack }) => {
  const [activeTab, setActiveTab] = useState('courses')
  const [previewMode, setPreviewMode] = useState('desktop')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const tabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'products', label: 'Products', icon: Layout },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'blog', label: 'Blog', icon: Edit3 },
    { id: 'sales', label: 'Sales', icon: DollarSign }
  ]

  const courses = [
    {
      id: 1,
      name: 'Wellness',
      lessons: 5,
      status: 'Free',
      type: 'Course',
      description: 'Complete wellness transformation program'
    }
  ]

  const lessons = [
    {
      id: 1,
      name: 'Understanding the Wellness Life Wheel',
      type: 'Content',
      status: 'Active',
      createdOn: '13 Feb, 2025',
      description: 'The Wellness Life Wheel is a visual representation of key wellness areas...'
    }
  ]

  const handleCreateCourse = () => {
    console.log('Creating new course for:', community.name)
  }

  const handleCreateLesson = () => {
    console.log('Creating new lesson for:', community.name)
  }

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen)
  }

  const getCommunityTheme = () => {
    const themes = {
      'health-wellness': 'from-green-500 to-emerald-500',
      'subscription-services': 'from-purple-500 to-pink-500',
      'entrepreneurship': 'from-blue-500 to-indigo-500',
      'business': 'from-orange-500 to-red-500'
    }
    return themes[community.category] || 'from-gray-500 to-slate-500'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Community</span>
            </motion.button>
            
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-bold text-gray-900">Customize Community</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={togglePreview}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <Eye size={16} />
              <span>Visit</span>
            </motion.button>
            
            <div className="relative">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span>Settings</span>
                <Settings size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Info Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center gap-6">
          <img
            src={community.image}
            alt={community.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{community.name}</h2>
            <p className="text-gray-600 mb-3">{community.description}</p>
            
            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-500">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-500">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-500">Groups</div>
              </div>
            </div>
          </div>
          
          {/* Member Avatars */}
          <div className="flex -space-x-2">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="Member"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="Member"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex items-center gap-1">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Courses Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-900">Courses</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      2
                    </span>
                  </div>
                  <motion.button
                    onClick={handleCreateCourse}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Plus size={16} />
                    Create Course
                  </motion.button>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search by Course Name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-3">
                  {courses.map(course => (
                    <motion.div
                      key={course.id}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{course.name}</h4>
                        <p className="text-sm text-gray-500">{course.lessons} Lessons</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        {course.status}
                      </span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Edit3 size={16} />
                        </motion.button>
                        <motion.button
                          className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Eye size={16} />
                        </motion.button>
                        <motion.button
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Lessons Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-900">Lessons</h3>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                      5
                    </span>
                  </div>
                  <motion.button
                    onClick={handleCreateLesson}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Plus size={16} />
                    Create Lesson
                  </motion.button>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search by Lesson Name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-3">
                  {lessons.map(lesson => (
                    <motion.div
                      key={lesson.id}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-600 mb-1">{lesson.name}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{lesson.description}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {lesson.type}
                          </span>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{lesson.createdOn}</span>
                        <div className="flex items-center gap-2">
                          <motion.button
                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Edit3 size={14} />
                          </motion.button>
                          <motion.button
                            className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Eye size={14} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== 'courses' && (
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {tabs.find(tab => tab.id === activeTab)?.icon && 
                    React.createElement(tabs.find(tab => tab.id === activeTab).icon, { size: 24, className: "text-gray-400" })
                  }
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tabs.find(tab => tab.id === activeTab)?.label} Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Configure and manage your community's {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} here.
                </p>
                <motion.button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={togglePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Preview Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-gray-900">Community Preview</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewMode('desktop')}
                      className={`p-2 rounded-lg transition-colors ${
                        previewMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Monitor size={16} />
                    </button>
                    <button
                      onClick={() => setPreviewMode('mobile')}
                      className={`p-2 rounded-lg transition-colors ${
                        previewMode === 'mobile' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Smartphone size={16} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={togglePreview}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Preview Content */}
              <div className="p-4 bg-gray-50 h-[80vh] overflow-auto">
                <div className={`mx-auto bg-white rounded-lg shadow-sm ${
                  previewMode === 'mobile' ? 'max-w-sm' : 'max-w-4xl'
                }`}>
                  {/* Community Front-end Preview */}
                  <div className="p-6">
                    <div className={`bg-gradient-to-r ${getCommunityTheme()} rounded-xl p-6 text-white mb-6`}>
                      <h2 className="text-2xl font-bold mb-2">{community.name}</h2>
                      <p className="text-white/90 mb-4">{community.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span>🎯 Act as {community.name.split(' ')[0]}</span>
                        <span>📚 Learning Organization</span>
                        <span>🚀 Scale Content Creation</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">2</div>
                        <div className="text-sm text-gray-600">Courses</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">5</div>
                        <div className="text-sm text-gray-600">Lessons</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-sm text-gray-600">Members</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Featured Course</h3>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${getCommunityTheme()} rounded-lg flex items-center justify-center`}>
                            <BookOpen className="text-white" size={20} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">Wellness Mastery</h4>
                            <p className="text-sm text-gray-600">Complete transformation program</p>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                            Start Learning
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomizeCommunity
