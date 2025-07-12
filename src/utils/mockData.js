export const generateMockPosts = (count = 10) => {
  const platforms = ['twitter', 'instagram', 'facebook', 'linkedin', 'tiktok', 'youtube']
  const authors = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const sampleContent = [
    "Just launched our new product line! Excited to share this journey with you all. What do you think? 🚀",
    "Behind the scenes of our latest photoshoot. The team worked incredibly hard to make this happen! 📸",
    "Grateful for all the support from our amazing community. You make everything possible! ❤️",
    "Quick tip: Always remember to stay authentic in your content. Your audience can tell the difference! 💡",
    "Weekend vibes are hitting different today. Hope everyone is having a great time! ☀️",
    "Just finished an amazing collaboration with some incredible creators. Can't wait to share the results! 🤝",
    "Throwback to one of our most successful campaigns. Sometimes looking back helps us move forward! 📈",
    "New blog post is live! Sharing some insights about social media trends for 2024. Link in bio! 📝",
    "Coffee and creativity go hand in hand. What's your favorite creative fuel? ☕",
    "Celebrating small wins today. Every step forward counts, no matter how small! 🎉"
  ]

  const images = [
    'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    'https://images.pexels.com/photos/1181724/pexels-photo-1181724.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  ]

  return Array.from({ length: count }, (_, index) => ({
    id: Date.now() + index,
    content: sampleContent[Math.floor(Math.random() * sampleContent.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
    platform: platforms[Math.floor(Math.random() * platforms.length)],
    image: Math.random() > 0.3 ? images[Math.floor(Math.random() * images.length)] : null,
    likes: Math.floor(Math.random() * 5000) + 100,
    comments: Math.floor(Math.random() * 500) + 10,
    shares: Math.floor(Math.random() * 200) + 5,
    views: Math.floor(Math.random() * 10000) + 500,
    createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }))
}
