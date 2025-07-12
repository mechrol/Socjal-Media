import React from 'react'
import { motion } from 'framer-motion'
import { User, Settings, LogOut } from 'lucide-react'

const Sidebar = ({ navigationItems, activeTab, setActiveTab }) => {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 p-6 glass m-4 rounded-2xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl">SocialHub</h1>
          <p className="text-white/60 text-sm">Dashboard</p>
        </div>
      </div>

      <nav className="space-y-2 mb-8">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          )
        })}
      </nav>

      <div className="space-y-2">
        <motion.button 
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </motion.button>
        
        <motion.button 
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </motion.button>
      </div>

      <div className="mt-8 p-4 glass rounded-xl">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-medium text-sm">Alex Johnson</p>
            <p className="text-white/60 text-xs">Social Manager</p>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar
