import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Plus, 
  ChevronDown,
  Users,
  UserCheck,
  Store,
  Calendar,
  DollarSign,
  TrendingUp
} from 'lucide-react'
import ResellerDropdown from './reseller/ResellerDropdown'

const Reseller = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResellerDropdown, setShowResellerDropdown] = useState(false)
  const [selectedResellerTab, setSelectedResellerTab] = useState('Manage Client')

  const resellerStats = [
    {
      title: 'Total Clients',
      value: '24',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Active Team Members',
      value: '8',
      change: '+3',
      icon: UserCheck,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Monthly Revenue',
      value: '$12,450',
      change: '+18%',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Growth Rate',
      value: '23%',
      change: '+5%',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const clients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      email: 'contact@techcorp.com',
      status: 'Active',
      plan: 'Premium',
      revenue: '$2,400',
      joinDate: '15 Jan, 2024',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Digital Marketing Pro',
      email: 'hello@digitalmp.com',
      status: 'Active',
      plan: 'Business',
      revenue: '$1,800',
      joinDate: '22 Jan, 2024',
      avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Creative Studio',
      email: 'info@creativestudio.com',
      status: 'Pending',
      plan: 'Starter',
      revenue: '$950',
      joinDate: '28 Jan, 2024',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Account Manager',
      email: 'sarah@company.com',
      clients: 8,
      performance: '95%',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Sales Representative',
      email: 'mike@company.com',
      clients: 6,
      performance: '88%',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Customer Success',
      email: 'emily@company.com',
      clients: 12,
      performance: '92%',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const renderContent = () => {
    switch (selectedResellerTab) {
      case 'Manage Client':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Client Management</h3>
                <p className="text-gray-600 text-sm mt-1">Manage your client accounts and subscriptions</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full object-cover" src={client.avatar} alt={client.name} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{client.name}</div>
                              <div className="text-sm text-gray-500">{client.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            client.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.plan}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.revenue}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.joinDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      case 'Team Member':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Team Management</h3>
                <p className="text-gray-600 text-sm mt-1">Manage your team members and their performance</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clients</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img className="h-10 w-10 rounded-full object-cover" src={member.avatar} alt={member.name} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{member.name}</div>
                              <div className="text-sm text-gray-500">{member.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.clients}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{member.performance}</div>
                            <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: member.performance }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      case 'Reseller':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reseller Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resellerStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl border border-gray-200 p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                          <p className="text-green-600 text-sm font-medium mt-1">{stat.change}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Reseller Management</h1>
          <p className="text-white/70 mt-1">Manage your reseller network and team</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
            />
          </div>

          {/* Reseller Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setShowResellerDropdown(!showResellerDropdown)}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Store size={18} />
              <span>{selectedResellerTab}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${showResellerDropdown ? 'rotate-180' : ''}`} />
            </motion.button>

            <ResellerDropdown
              isOpen={showResellerDropdown}
              onClose={() => setShowResellerDropdown(false)}
              selectedTab={selectedResellerTab}
              onTabSelect={setSelectedResellerTab}
            />
          </div>

          {/* Add New Button */}
          <motion.button
            className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add New</span>
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={selectedResellerTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  )
}

export default Reseller
