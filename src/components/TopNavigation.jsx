import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Menu,
  Play,
  BookOpen,
  Crown,
  Globe,
  Users,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Sidebar,
  History,
  Bookmark,
  CreditCard,
  Camera,
  Upload,
  X
} from 'lucide-react'

const TopNavigation = ({ navigationItems, activeTab, setActiveTab }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [showAvatarUpload, setShowAvatarUpload] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [currentAvatar, setCurrentAvatar] = useState("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop")
  const fileInputRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' }
  ]

  const handleLanguageClick = () => {
    setShowLanguageMenu(true)
  }

  const handleBackToMain = () => {
    setShowLanguageMenu(false)
  }

  const handleAvatarClick = () => {
    setShowAvatarUpload(true)
  }

  const handleBackToProfile = () => {
    setShowAvatarUpload(false)
    setAvatarPreview(null)
  }

  const handleFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarPreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarSave = () => {
    if (avatarPreview) {
      setCurrentAvatar(avatarPreview)
      setAvatarPreview(null)
      setShowAvatarUpload(false)
    }
  }

  const handleAvatarCancel = () => {
    setAvatarPreview(null)
    setShowAvatarUpload(false)
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass border-b border-white/10 sticky top-0 z-50"
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">SocialHub</h1>
              <p className="text-white/60 text-sm">Dashboard</p>
            </div>
          </motion.div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <motion.button 
              className="p-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={20} />
            </motion.button>

            {/* Notifications */}
            <motion.button 
              className="relative p-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden p-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={20} />
            </motion.button>

            {/* User Profile */}
            <div className="relative">
              <motion.button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={currentAvatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden md:block text-left">
                  <p className="text-white font-medium text-sm">Janusz Krawczak</p>
                  <p className="text-white/60 text-xs">Administrator</p>
                </div>
              </motion.button>

              {/* User Dropdown */}
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50"
                >
                  {!showLanguageMenu && !showAvatarUpload ? (
                    <>
                      {/* User Info Header */}
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img 
                              src={currentAvatar}
                              alt="Profile"
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <motion.button
                              onClick={handleAvatarClick}
                              className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Camera size={12} />
                            </motion.button>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Janusz Krawczak</h3>
                            <p className="text-gray-500 text-sm">januszjankra@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      {/* Free Credits */}
                      <div className="p-4 bg-blue-50 border-b border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium">Free Credits</span>
                          <CreditCard className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '73.5%' }}></div>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">735/1000</span>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <User size={16} />
                          <span className="font-medium text-sm">Profiles</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <Play size={16} />
                          <span className="font-medium text-sm">Video tutorials</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <BookOpen size={16} />
                          <span className="font-medium text-sm">Knowledgebase</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <Crown size={16} />
                          <span className="font-medium text-sm">Template Club</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <Globe size={16} />
                          <span className="font-medium text-sm">Agency Website</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <Users size={16} />
                          <span className="font-medium text-sm">DFY Tribe</span>
                        </motion.button>
                        
                        <motion.button 
                          onClick={handleLanguageClick}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-3">
                            <Globe size={16} />
                            <span className="font-medium text-sm">Language</span>
                          </div>
                          <ChevronRight size={14} />
                        </motion.button>
                        
                        <hr className="my-2 border-gray-100" />
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <LogOut size={16} />
                          <span className="font-medium text-sm">Sign Out</span>
                        </motion.button>
                        
                        <hr className="my-2 border-gray-100" />
                        
                        {/* Additional Options */}
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <MessageSquare size={16} />
                          <span className="font-medium text-sm">Prześlij opinię</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <Sidebar size={16} />
                          <span className="font-medium text-sm">Panele boczne</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <History size={16} />
                          <span className="font-medium text-sm">Historia</span>
                        </motion.button>
                        
                        <motion.button 
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <Bookmark size={16} />
                          <span className="font-medium text-sm">Zapisane</span>
                        </motion.button>
                      </div>
                    </>
                  ) : showLanguageMenu ? (
                    /* Language Selection Menu */
                    <div className="p-2">
                      {/* Back Button */}
                      <motion.button 
                        onClick={handleBackToMain}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 mb-2"
                        whileHover={{ x: -4 }}
                      >
                        <ChevronLeft size={16} />
                        <span className="font-medium text-sm">Back</span>
                      </motion.button>
                      
                      <hr className="mb-2 border-gray-100" />
                      
                      {/* Language Options */}
                      {languages.map((language) => (
                        <motion.button
                          key={language.code}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                          whileHover={{ x: 4 }}
                          onClick={() => {
                            // Handle language selection
                            setShowLanguageMenu(false)
                            setShowUserMenu(false)
                          }}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium text-sm">{language.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    /* Avatar Upload Menu */
                    <div className="p-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.button 
                          onClick={handleBackToProfile}
                          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                          whileHover={{ x: -4 }}
                        >
                          <ChevronLeft size={16} />
                          <span className="font-medium text-sm">Back</span>
                        </motion.button>
                        <h3 className="font-semibold text-gray-900">Change Avatar</h3>
                        <div className="w-6"></div>
                      </div>

                      {/* Current/Preview Avatar */}
                      <div className="flex flex-col items-center mb-6">
                        <div className="relative mb-4">
                          <img 
                            src={avatarPreview || currentAvatar}
                            alt="Avatar Preview"
                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                          />
                          {avatarPreview && (
                            <motion.button
                              onClick={() => setAvatarPreview(null)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <X size={12} />
                            </motion.button>
                          )}
                        </div>

                        {/* Upload Button */}
                        <motion.button
                          onClick={handleFileSelect}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Upload size={16} />
                          <span className="font-medium text-sm">Choose Photo</span>
                        </motion.button>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        <p className="text-gray-500 text-xs mt-2 text-center">
                          Recommended: Square image, at least 200x200px
                        </p>
                      </div>

                      {/* Action Buttons */}
                      {avatarPreview && (
                        <div className="flex gap-3">
                          <motion.button
                            onClick={handleAvatarCancel}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="font-medium text-sm">Cancel</span>
                          </motion.button>
                          <motion.button
                            onClick={handleAvatarSave}
                            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="font-medium text-sm">Save</span>
                          </motion.button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 ${
                    activeTab === item.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default TopNavigation
