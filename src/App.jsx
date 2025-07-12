import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import TopNavigation from './components/TopNavigation'
import Dashboard from './components/Dashboard'
import PostFeed from './components/PostFeed'
import Analytics from './components/Analytics'
import ContentManager from './components/ContentManager'
import Community from './components/Community'
import Reseller from './components/Reseller'
import Integrations from './components/Integrations'
import { LayoutDashboard, Home, BarChart3, Edit3, Users, Store, Settings } from 'lucide-react'

const navigationItems = [
  { id: 'dashboard', label: 'dashboard', icon: LayoutDashboard },
  { id: 'feed', label: 'postFeed', icon: Home },
  { id: 'analytics', label: 'analytics', icon: BarChart3 },
  { id: 'content', label: 'contentManager', icon: Edit3 },
  { id: 'community', label: 'community', icon: Users },
  { id: 'reseller', label: 'reseller', icon: Store },
  { id: 'integrations', label: 'integrations', icon: Settings },
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
      case 'reseller':
        return <Reseller />
      case 'integrations':
        return <Integrations />
      default:
        return <Dashboard />
    }
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <TopNavigation 
          navigationItems={navigationItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="flex-1 p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
