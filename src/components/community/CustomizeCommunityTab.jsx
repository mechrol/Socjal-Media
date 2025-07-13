import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
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
  Monitor,
  Target,
  Lightbulb,
  Brain,
  Trophy,
  Award,
  MessageCircle,
  TrendingUp
} from 'lucide-react'

const CustomizeCommunityTab = ({ community }) => {
  const [activeSection, setActiveSection] = useState('courses')
  const [previewMode, setPreviewMode] = useState('desktop')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const sections = [
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
      name: 'Wellness Mastery',
      lessons: 5,
      status: 'Free',
      type: 'Course',
      description: 'Complete wellness transformation program'
    },
    {
      id: 2,
      name: 'Advanced Techniques',
      lessons: 8,
      status: 'Premium',
      type: 'Course',
      description: 'Advanced strategies and methodologies'
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
    },
    {
      id: 2,
      name: 'Building Healthy Habits',
      type: 'Video',
      status: 'Active',
      createdOn: '15 Feb, 2025',
      description: 'Learn how to create and maintain healthy daily routines...'
    },
    {
      id: 3,
      name: 'Mindfulness Practices',
      type: 'Interactive',
      status: 'Draft',
      createdOn: '18 Feb, 2025',
      description: 'Explore various mindfulness techniques for daily practice...'
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Customize Community</h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={togglePreview}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <Eye size={16} />
            <span>Preview</span>
          </motion.button>
          
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <Save size={16} />
            <span>Save Changes</span>
          </motion.button>
        </div>
      </div>

      {/* Community Info */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-6">
          <img
            src={community.image}
            alt={community.name}
            className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{community.name}</h3>
            <p className="text-gray-600 mb-3">{community.description}</p>
            
            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">2</div>
                <div className="text-xs text-gray-500">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{community.members?.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Members</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">5</div>
                <div className="text-xs text-gray-500">Lessons</div>
              </div>
            </div>
          </div>
          
          {/* Act As Theme */}
          <div className="text-right">
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
              <Target size={14} />
              <span>Act as: {community.actAs || 'Learning Expert'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Lightbulb size={14} />
              <span>Focus: {community.learningFocus || 'Professional Development'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
        <div className="flex items-center gap-1 overflow-x-auto">
          {sections.map(section => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span>{section.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeSection === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Courses Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-gray-900">Courses</h3>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                    {courses.length}
                  </span>
                </div>
                <motion.button
                  onClick={handleCreateCourse}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3">
                {courses.map(course => (
                  <motion.div
                    key={course.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${getCommunityTheme()} rounded-lg flex items-center justify-center`}>
                      <BookOpen className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{course.name}</h4>
                      <p className="text-sm text-gray-500">{course.lessons} Lessons</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      course.status === 'Free' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
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
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-gray-900">Lessons</h3>
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
                    {lessons.length}
                  </span>
                </div>
                <motion.button
                  onClick={handleCreateLesson}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3">
                {lessons.map(lesson => (
                  <motion.div
                    key={lesson.id}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-600 mb-1">{lesson.name}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{lesson.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          lesson.status === 'Active' 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {lesson.type}
                        </span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          lesson.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
                        }`}>
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

        {/* Other sections content */}
        {activeSection !== 'courses' && (
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {sections.find(section => section.id === activeSection)?.icon && 
                  React.createElement(sections.find(section => section.id === activeSection).icon, { size: 24, className: "text-gray-400" })
                }
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {sections.find(section => section.id === activeSection)?.label} Management
              </h3>
              <p className="text-gray-600 mb-6">
                Configure and manage your community's {sections.find(section => section.id === activeSection)?.label.toLowerCase()} here.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>

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
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors text-xl"
                >
                  ×
                </button>
              </div>

              {/* Preview Content */}
              <div className="p-4 bg-gray-50 h-[80vh] overflow-auto">
                <div className={`mx-auto bg-white rounded-lg shadow-sm ${
                  previewMode === 'mobile' ? 'max-w-sm' : 'max-w-4xl'
                }`}>
                  {/* Community Preview */}
                  <div className="p-6">
                    <div className={`bg-gradient-to-r ${getCommunityTheme()} rounded-xl p-6 text-white mb-6`}>
                      <h2 className="text-2xl font-bold mb-2">{community.name}</h2>
                      <p className="text-white/90 mb-4">{community.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span>🎯 Act as {community.actAs || 'Learning Expert'}</span>
                        <span>📚 Learning Organization</span>
                        <span>🚀 Scale Content Creation</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{courses.length}</div>
                        <div className="text-sm text-gray-600">Courses</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{lessons.length}</div>
                        <div className="text-sm text-gray-600">Lessons</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{community.members?.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Members</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Featured Courses</h3>
                      {courses.slice(0, 2).map(course => (
                        <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${getCommunityTheme()} rounded-lg flex items-center justify-center`}>
                              <BookOpen className="text-white" size={20} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{course.name}</h4>
                              <p className="text-sm text-gray-600">{course.description}</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                              Start Learning
                            </button>
                          </div>
                        </div>
                      ))}
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

export default CustomizeCommunityTab
