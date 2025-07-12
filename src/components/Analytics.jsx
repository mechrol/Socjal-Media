import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { Calendar, TrendingUp, Users, Eye, Heart } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d')

  const engagementData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Likes',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500],
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Comments',
        data: [300, 450, 600, 800, 400, 600, 900],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Shares',
        data: [150, 200, 300, 400, 200, 300, 450],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  }

  const platformData = {
    labels: ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'TikTok'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#E4405F',
          '#1DA1F2',
          '#1877F2',
          '#0A66C2',
          '#000000',
        ],
        borderWidth: 0,
      },
    ],
  }

  const postPerformanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Reach',
        data: [12000, 19000, 15000, 25000],
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
      },
      {
        label: 'Impressions',
        data: [18000, 28000, 22000, 35000],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          padding: 20,
        },
      },
    },
  }

  const metrics = [
    {
      title: 'Total Reach',
      value: '2.4M',
      change: '+15.3%',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Engagement Rate',
      value: '8.7%',
      change: '+2.1%',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'New Followers',
      value: '12.5K',
      change: '+8.9%',
      icon: Users,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Growth Rate',
      value: '24.8%',
      change: '+5.2%',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-white/70">Track your social media performance and insights</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="glass rounded-xl px-4 py-2 text-white bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <option value="7d" className="bg-gray-800">Last 7 days</option>
            <option value="30d" className="bg-gray-800">Last 30 days</option>
            <option value="90d" className="bg-gray-800">Last 90 days</option>
          </select>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          >
            <Calendar size={18} />
            Export Report
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-400 text-sm font-medium">{metric.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-white/60 text-sm">{metric.title}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Engagement Over Time</h2>
          <Line data={engagementData} options={chartOptions} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6">Platform Distribution</h2>
          <div className="h-64 flex items-center justify-center">
            <Doughnut data={platformData} options={doughnutOptions} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-6">Post Performance</h2>
        <Bar data={postPerformanceData} options={chartOptions} />
      </motion.div>
    </div>
  )
}

export default Analytics
