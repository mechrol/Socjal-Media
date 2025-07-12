import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Plus, 
  Settings,
  Check,
  ExternalLink,
  Zap,
  Globe,
  Smartphone,
  Mail,
  MessageSquare,
  BarChart3,
  Camera,
  Calendar,
  CreditCard,
  Database,
  Shield
} from 'lucide-react'

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Social Media', 'Analytics', 'Communication', 'Payment', 'Security']

  const integrations = [
    {
      id: 1,
      name: 'Facebook',
      description: 'Connect your Facebook pages and manage posts directly from the dashboard',
      category: 'Social Media',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      connected: true,
      popular: true
    },
    {
      id: 2,
      name: 'Instagram',
      description: 'Schedule and publish Instagram posts and stories',
      category: 'Social Media',
      icon: Camera,
      color: 'from-pink-500 to-purple-600',
      connected: true,
      popular: true
    },
    {
      id: 3,
      name: 'Twitter',
      description: 'Manage your Twitter account and schedule tweets',
      category: 'Social Media',
      icon: MessageSquare,
      color: 'from-blue-400 to-blue-500',
      connected: false,
      popular: true
    },
    {
      id: 4,
      name: 'Google Analytics',
      description: 'Track website performance and user behavior',
      category: 'Analytics',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      connected: true,
      popular: true
    },
    {
      id: 5,
      name: 'Slack',
      description: 'Get notifications and updates in your Slack workspace',
      category: 'Communication',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      connected: false,
      popular: false
    },
    {
      id: 6,
      name: 'Mailchimp',
      description: 'Sync your email marketing campaigns and subscriber lists',
      category: 'Communication',
      icon: Mail,
      color: 'from-yellow-500 to-orange-500',
      connected: true,
      popular: false
    },
    {
      id: 7,
      name: 'Stripe',
      description: 'Process payments and manage billing for your services',
      category: 'Payment',
      icon: CreditCard,
      color: 'from-indigo-500 to-purple-600',
      connected: false,
      popular: true
    },
    {
      id: 8,
      name: 'Zapier',
      description: 'Automate workflows between different apps and services',
      category: 'Analytics',
      icon: Zap,
      color: 'from-orange-400 to-orange-500',
      connected: false,
      popular: false
    },
    {
      id: 9,
      name: 'Google Calendar',
      description: 'Sync your content calendar with Google Calendar',
      category: 'Communication',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
      connected: true,
      popular: false
    },
    {
      id: 10,
      name: 'Webhook',
      description: 'Send real-time data to external applications',
      category: 'Analytics',
      icon: Database,
      color: 'from-gray-500 to-gray-600',
      connected: false,
      popular: false
    },
    {
      id: 11,
      name: 'Two-Factor Auth',
      description: 'Enhanced security with two-factor authentication',
      category: 'Security',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      connected: true,
      popular: true
    },
    {
      id: 12,
      name: 'LinkedIn',
      description: 'Manage your LinkedIn company page and professional content',
      category: 'Social Media',
      icon: Globe,
      color: 'from-blue-600 to-blue-700',
      connected: false,
      popular: true
    }
  ]

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const connectedCount = integrations.filter(integration => integration.connected).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Integrations</h1>
          <p className="text-white/70 mt-1">Connect your favorite tools and services</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm w-64"
            />
          </div>

          {/* Add Custom Integration */}
          <motion.button
            className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Custom Integration</span>
          </motion.button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Connected</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{connectedCount}</p>
              <p className="text-green-600 text-sm font-medium mt-1">Active integrations</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Available</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{integrations.length - connectedCount}</p>
              <p className="text-blue-600 text-sm font-medium mt-1">Ready to connect</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Categories</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{categories.length - 1}</p>
              <p className="text-purple-600 text-sm font-medium mt-1">Integration types</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((integration, index) => {
          const IconComponent = integration.icon
          return (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${integration.color} flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                      {integration.popular && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{integration.category}</p>
                  </div>
                </div>
                
                {integration.connected && (
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {integration.description}
              </p>

              <div className="flex items-center gap-2">
                {integration.connected ? (
                  <>
                    <motion.button
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Configure
                    </motion.button>
                    <motion.button
                      className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Connect
                  </motion.button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {filteredIntegrations.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No integrations found</h3>
          <p className="text-gray-600">Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  )
}

export default Integrations
