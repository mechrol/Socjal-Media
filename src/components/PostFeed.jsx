import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PostCard from './PostCard'
import { generateMockPosts } from '../utils/mockData'

const PostFeed = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()

  const loadMorePosts = async () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const newPosts = generateMockPosts(10)
      setPosts(prev => [...prev, ...newPosts])
      setLoading(false)
      
      // Stop loading more after 50 posts for demo
      if (posts.length >= 40) {
        setHasMore(false)
      }
    }, 1000)
  }

  useEffect(() => {
    loadMorePosts()
  }, [])

  useEffect(() => {
    if (inView && hasMore) {
      loadMorePosts()
    }
  }, [inView])

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Social Feed</h1>
          <p className="text-white/70">Your latest posts across all platforms</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Create New Post
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {loading && (
        <div className="flex justify-center py-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
          />
        </div>
      )}

      {hasMore && <div ref={ref} className="h-10" />}

      {!hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <p className="text-white/60">You've reached the end of your feed</p>
        </motion.div>
      )}
    </div>
  )
}

export default PostFeed
