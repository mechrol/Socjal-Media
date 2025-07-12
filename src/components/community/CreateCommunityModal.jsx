import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Upload, Palette, Users, Lock, Globe } from 'lucide-react'

const CreateCommunityModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'tech',
    theme: 'modern',
    privacy: 'public',
    image: null
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle community creation logic here
    console.log('Creating community:', formData)
    onClose()
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
            <label className="block text-white font-medium mb-2">Community Name</label>
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
            <label className="block text-white font-medium mb-2">Description</label>
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
                <option value="public" className="bg-gray-800">Public</option>
                <option value="private" className="bg-gray-800">Private</option>
              </select>
            </div>
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
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-white/30 transition-colors">
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
              className="flex-1 py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
