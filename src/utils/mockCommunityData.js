export const generateMockCommunities = () => {
  const communities = [
    {
      id: 1,
      name: 'PATRON',
      description: 'Premium subscription services for exclusive content and benefits.',
      category: 'subscription-services',
      theme: 'modern',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      members: 15420,
      posts: 2847,
      rating: 4.8,
      isJoined: true,
      isPremium: true,
      isActive: true,
      createdAt: '2025-02-28'
    },
    {
      id: 2,
      name: 'Homohumanicus',
      description: 'A community focused on human wellness, mindfulness, and personal development.',
      category: 'health-wellness',
      theme: 'nature',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      members: 8930,
      posts: 1654,
      rating: 4.9,
      isJoined: false,
      isPremium: false,
      isActive: true,
      createdAt: '2025-02-13'
    },
    {
      id: 3,
      name: 'Ziołolecznictwo',
      description: 'Traditional herbal medicine and natural healing practices community.',
      category: 'health-wellness',
      theme: 'nature',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      members: 12750,
      posts: 3421,
      rating: 4.7,
      isJoined: true,
      isPremium: false,
      isActive: true,
      createdAt: '2025-02-05'
    },
    {
      id: 4,
      name: 'Przedsiębiorcy RP',
      description: 'A entrepreneurship community is a dynamic group of individuals focused on starting and growing businesses.',
      category: 'entrepreneurship',
      theme: 'business',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      members: 22100,
      posts: 5632,
      rating: 4.6,
      isJoined: false,
      isPremium: false,
      isActive: true,
      createdAt: '2025-02-04'
    },
    {
      id: 5,
      name: 'Narodowa Agencja Innowacji',
      description: 'Społeczność w NAI są grupy społeczne, które prezentują projekty podlegające ocenie pod kątem ich transformacji...',
      category: 'business',
      theme: 'modern',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      members: 18650,
      posts: 4123,
      rating: 4.9,
      isJoined: true,
      isPremium: false,
      isActive: true,
      createdAt: '2024-11-28'
    },
    {
      id: 6,
      name: 'Wolność i Przedsiębiorczość',
      description: 'Społeczność w Agencji "Bank Zaufania" są grupy społeczne, które prezentują projekty podlegające ocenie pod kąt...',
      category: 'business',
      theme: 'business',
      image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      members: 31200,
      posts: 8947,
      rating: 4.8,
      isJoined: false,
      isPremium: false,
      isActive: true,
      createdAt: '2024-11-27'
    }
  ]

  return communities
}
