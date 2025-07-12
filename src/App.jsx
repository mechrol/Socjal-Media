import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import PostFeed from './components/PostFeed'
import Analytics from './components/Analytics'
import ContentManager from './components/ContentManager'
import Community from './components/Community'
import { LayoutDashboard, Home, BarChart3, Edit3, Users } from 'lucide-react'

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'feed', label: 'Post Feed', icon: Home },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'content', label: 'Content Manager', icon: Edit3 },
  { id: 'community', label: 'Community', icon: Users },
]

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'feed':
        return <PostFeed />
      case 'analytics':
        return <Analytics />
      case 'content':
        return <ContentManager />
      case 'community':
        return <Community />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar 
        navigationItems={navigationItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <main className="flex-1 p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
