import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Upload, Palette, Users, Lock, Globe, Link, Clock } from 'lucide-react'

const CreateCommunityModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    communityUrl: '',
    category: 'tech',
    theme: 'modern',
    privacy: 'public',
    timezone: 'UTC',
    image: null
  })

  const [urlError, setUrlError] = useState('')

  const categories = [
    { id: 'tech', label: 'Technology' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'education', label: 'Education' }
  ]

  const themes = [
    { id: 'modern', label: 'Modern', colors: 'from-blue-500 to-purple-500' },
    { id: 'warm', label: 'Warm', colors: 'from-orange-500 to-red-500' },
    { id: 'nature', label: 'Nature', colors: 'from-green-500 to-emerald-500' },
    { id: 'elegant', label: 'Elegant', colors: 'from-gray-500 to-slate-500' },
    { id: 'vibrant', label: 'Vibrant', colors: 'from-pink-500 to-yellow-500' }
  ]

  const timezones = [
    { value: 'UTC', label: 'UTC (Coordinated Universal Time)' },
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/London', label: 'Greenwich Mean Time (GMT)' },
    { value: 'Europe/Paris', label: 'Central European Time (CET)' },
    { value: 'Europe/Berlin', label: 'Central European Time (CET)' },
    { value: 'Europe/Rome', label: 'Central European Time (CET)' },
    { value: 'Europe/Madrid', label: 'Central European Time (CET)' },
    { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
    { value: 'Asia/Shanghai', label: 'China Standard Time (CST)' },
    { value: 'Asia/Kolkata', label: 'India Standard Time (IST)' },
    { value: 'Asia/Dubai', label: 'Gulf Standard Time (GST)' },
    { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' },
    { value: 'Australia/Melbourne', label: 'Australian Eastern Time (AET)' },
    { value: 'Pacific/Auckland', label: 'New Zealand Standard Time (NZST)' },
    { value: 'America/Toronto', label: 'Eastern Time (Canada)' },
    { value: 'America/Vancouver', label: 'Pacific Time (Canada)' },
    { value: 'America/Sao_Paulo', label: 'Brasília Time (BRT)' },
    { value: 'America/Mexico_City', label: 'Central Time (Mexico)' },
    { value: 'Africa/Cairo', label: 'Eastern European Time (EET)' },
    { value: 'Africa/Johannesburg', label: 'South Africa Standard Time (SAST)' },
    { value: 'Asia/Singapore', label: 'Singapore Standard Time (SGT)' },
    { value: 'Asia/Hong_Kong', label: 'Hong Kong Time (HKT)' }
  ]

  const validateUrl = (url) => {
    if (!url) {
      setUrlError('Community URL is required')
      return false
    }
    
    // Basic URL validation - alphanumeric, hyphens, underscores only
    const urlPattern = /^[a-zA-Z0-9-_]+$/
    if (!urlPattern.test(url)) {
      setUrlError('URL can only contain letters, numbers, hyphens, and underscores')
      return false
    }
    
    if (url.length < 3) {
      setUrlError('URL must be at least 3 characters long')
      return false
    }
    
    if (url.length > 50) {
      setUrlError('URL must be less than 50 characters')
      return false
    }
    
    setUrlError('')
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateUrl(formData.communityUrl)) {
      return
    }
    
    // Handle community creation logic here
    console.log('Creating community:', formData)
    onClose()
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Validate URL in real-time
    if (field === 'communityUrl') {
      validateUrl(value)
    }
  }

  const handleUrlChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/[^a-zA-Z0-9-_]/g, '')
    handleInputChange('communityUrl', value)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Create New Community</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">
              Community Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter community name..."
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              Community URL <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-white/60">
                <Link size={18} />
                <span className="text-sm">community.app/</span>
              </div>
              <input
                type="text"
                value={formData.communityUrl}
                onChange={handleUrlChange}
                className={`w-full pl-32 pr-4 py-3 bg-white/10 border rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 transition-all ${
                  urlError 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-white/20 focus:ring-purple-500'
                }`}
                placeholder="your-community-url"
                required
              />
            </div>
            {urlError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {urlError}
              </motion.p>
            )}
            <p className="text-white/50 text-sm mt-2">
              This will be your community's unique URL. Only letters, numbers, hyphens, and underscores allowed.
            </p>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
              placeholder="Describe your community..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-gray-800">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Privacy</label>
              <select
                value={formData.privacy}
                onChange={(e) => handleInputChange('privacy', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="public" className="bg-gray-800">
                  <Globe className="inline mr-2" size={16} />
                  Public
                </option>
                <option value="private" className="bg-gray-800">
                  <Lock className="inline mr-2" size={16} />
                  Private
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              <Clock className="inline mr-2" size={18} />
              Time Zone
            </label>
            <select
              value={formData.timezone}
              onChange={(e) => handleInputChange('timezone', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {timezones.map(timezone => (
                <option key={timezone.value} value={timezone.value} className="bg-gray-800">
                  {timezone.label}
                </option>
              ))}
            </select>
            <p className="text-white/50 text-sm mt-2">
              This will be used for scheduling events and displaying activity times.
            </p>
          </div>

          <div>
            <label className="block text-white font-medium mb-3">Theme</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {themes.map(theme => (
                <motion.button
                  key={theme.id}
                  type="button"
                  onClick={() => handleInputChange('theme', theme.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.theme === theme.id
                      ? 'border-white/50 bg-white/10'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-full h-8 rounded-lg bg-gradient-to-r ${theme.colors} mb-2`} />
                  <span className="text-white text-sm font-medium">{theme.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Community Image</label>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/30 transition-colors cursor-pointer">
              <Upload className="mx-auto text-white/60 mb-4" size={48} />
              <p className="text-white/60 mb-2">Click to upload or drag and drop</p>
              <p className="text-white/40 text-sm">PNG, JPG up to 10MB</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleInputChange('image', e.target.files[0])}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="flex-1 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: urlError ? 1 : 1.02 }}
              whileTap={{ scale: urlError ? 1 : 0.98 }}
              disabled={!!urlError}
            >
              Create Community
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default CreateCommunityModal
