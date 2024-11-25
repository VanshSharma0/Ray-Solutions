import React, { useEffect, useState } from 'react';
import { MessageSquare, TrendingUp, Users, Calendar, Share2, BarChart2, Target, Award, ArrowUpRight, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SocialMediaPage = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#111827';
  }, []);

  const realCaseStudies = [
    {
      client: "Fitness First Gym Chain",
      industry: "Health & Fitness",
      duration: "Jan - Jun 2023",
      challenge: "Declining membership signups and low social engagement during post-COVID recovery",
      strategy: [
        "Instagram Reels campaign featuring real member transformations",
        "Facebook community wellness challenge",
        "Influencer partnership program with local fitness enthusiasts"
      ],
      platformMetrics: {
        instagram: {
          followers: { before: "45K", after: "168K", growth: "+273%" },
          engagement: { before: "1.2%", after: "4.8%", growth: "+300%" },
          reels: { views: "2.5M", shares: "25K" }
        },
        facebook: {
          reach: { before: "100K", after: "450K", growth: "+350%" },
          groupMembers: { before: "5K", after: "28K", growth: "+460%" }
        }
      },
      businessResults: [
        { metric: "Member Signups", before: "250/month", after: "850/month", growth: "+240%" },
        { metric: "Lead Cost", before: "$25", after: "$8", growth: "-68%" }
      ],
      media: [
        "/examples/fitness/reel1.jpg",
        "/chart/chart1.png",
        "/examples/fitness/results.jpg"
      ]
    },
    {
      client: "Fresh Eats Meal Delivery",
      industry: "Food & Beverage",
      duration: "Mar - Dec 2023",
      challenge: "New market entry with zero brand recognition and established competitors",
      strategy: [
        "TikTok recipe series showcasing meal prep",
        "Instagram Story taste tests and kitchen tours",
        "User-generated content campaign #FreshEatsChallenge"
      ],
      platformMetrics: {
        instagram: {
          followers: { before: "2K", after: "89K", growth: "+4350%" },
          stories: { avgViews: "15K", completion: "85%" }
        },
        tiktok: {
          followers: { before: "0", after: "150K", growth: "N/A" },
          videoViews: "4.8M",
          trending: "3 videos"
        }
      },
      businessResults: [
        { metric: "Monthly Orders", before: "500", after: "3,800", growth: "+660%" },
        { metric: "Customer Acquisition Cost", before: "$45", after: "$12", growth: "-73%" }
      ],
      media: [
        "/examples/food/tiktok.jpg",
        "/examples/food/story.jpg",
        "/examples/food/ugc.jpg"
      ]
    },
    {
      client: "TechEd Learning Platform",
      industry: "Education Technology",
      duration: "Aug 2023 - Jan 2024",
      challenge: "High ad costs and low organic reach in competitive edutech space",
      strategy: [
        "LinkedIn thought leadership content series",
        "Twitter tech tip series #TechEdTips",
        "YouTube tutorial collaboration program"
      ],
      platformMetrics: {
        linkedin: {
          followers: { before: "15K", after: "78K", growth: "+420%" },
          engagement: { before: "0.8%", after: "3.9%", growth: "+387%" }
        },
        twitter: {
          impressions: { before: "50K/mo", after: "450K/mo", growth: "+800%" },
          clicks: { before: "1.2K/mo", after: "12K/mo", growth: "+900%" }
        }
      },
      businessResults: [
        { metric: "Trial Signups", before: "400/mo", after: "1,800/mo", growth: "+350%" },
        { metric: "Organic Traffic", before: "25K/mo", after: "120K/mo", growth: "+380%" }
      ],
      media: [
        "/examples/tech/linkedin.jpg",
        "/examples/tech/twitter.jpg",
        "/examples/tech/youtube.jpg"
      ]
    }
  ];

  const monthlyMetrics = [
    {
      platform: "Instagram",
      icon: Instagram,
      metrics: [
        { month: 'Jan', followers: 45000, engagement: 1200, reach: 120000 },
        { month: 'Feb', followers: 68000, engagement: 2100, reach: 180000 },
        { month: 'Mar', followers: 95000, engagement: 3500, reach: 250000 },
        { month: 'Apr', followers: 120000, engagement: 4800, reach: 320000 },
        { month: 'May', followers: 145000, engagement: 5900, reach: 400000 },
        { month: 'Jun', followers: 168000, engagement: 7200, reach: 450000 }
      ]
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      metrics: [
        { month: 'Aug', followers: 15000, engagement: 800, reach: 50000 },
        { month: 'Sep', followers: 28000, engagement: 1500, reach: 95000 },
        { month: 'Oct', followers: 42000, engagement: 2200, reach: 180000 },
        { month: 'Nov', followers: 58000, engagement: 3100, reach: 280000 },
        { month: 'Dec', followers: 68000, engagement: 3500, reach: 350000 },
        { month: 'Jan', followers: 78000, engagement: 3900, reach: 450000 }
      ]
    }
  ];

  const campaignExamples = [
    {
      title: "Instagram Reels Campaign",
      platform: "Instagram",
      client: "Fitness First",
      stats: [
        { label: "Total Views", value: "2.5M" },
        { label: "Shares", value: "25K" },
        { label: "Saves", value: "15K" },
        { label: "Comments", value: "8.2K" }
      ],
      content: [
        {
          type: "Reel",
          title: "15-Min HIIT Workout",
          performance: { views: "850K", engagement: "4.8%" }
        },
        {
          type: "Reel",
          title: "Meal Prep 101",
          performance: { views: "720K", engagement: "4.2%" }
        },
        {
          type: "Reel",
          title: "Success Stories",
          performance: { views: "930K", engagement: "5.1%" }
        }
      ]
    },
    {
      title: "LinkedIn Thought Leadership",
      platform: "LinkedIn",
      client: "TechEd",
      stats: [
        { label: "Post Impressions", value: "450K" },
        { label: "Profile Visits", value: "35K" },
        { label: "Lead Forms", value: "2.8K" },
        { label: "Content Saves", value: "12K" }
      ],
      content: [
        {
          type: "Article",
          title: "Future of EdTech",
          performance: { views: "85K", engagement: "3.9%" }
        },
        {
          type: "Case Study",
          title: "Student Success Story",
          performance: { views: "92K", engagement: "4.1%" }
        },
        {
          type: "Industry Report",
          title: "EdTech Trends 2024",
          performance: { views: "78K", engagement: "3.8%" }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="relative pt-24 pb-20 px-6">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Share2 className="mx-auto w-20 h-20 text-blue-300 mb-6" />
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Real Results, Real Growth
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Proven social media strategies backed by real case studies and measurable results
            </p>
          </div>

          {/* Case Studies Carousel */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Featured Case Studies</h2>
            <div className="flex space-x-4 mb-8 justify-center">
              {realCaseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCase(index)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCase === index 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {study.client}
                </button>
              ))}
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                    {realCaseStudies[selectedCase].client}
                  </h3>
                  <div className="text-gray-400 mb-6">
                    <p className="mb-2">{realCaseStudies[selectedCase].industry}</p>
                    <p className="mb-4">{realCaseStudies[selectedCase].duration}</p>
                    <h4 className="text-gray-200 font-semibold mb-2">Challenge:</h4>
                    <p className="mb-4">{realCaseStudies[selectedCase].challenge}</p>
                    <h4 className="text-gray-200 font-semibold mb-2">Strategy:</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      {realCaseStudies[selectedCase].strategy.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-100 mb-4">Platform Performance</h4>
                    {Object.entries(realCaseStudies[selectedCase].platformMetrics).map(([platform, metrics]) => (
                      <div key={platform} className="mb-4">
                        <h5 className="text-blue-300 capitalize mb-2">{platform}</h5>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(metrics).map(([metric, values]) => (
                            <div key={metric} className="bg-gray-800 p-3 rounded">
                              <p className="text-gray-400 capitalize mb-1">{metric}</p>
                              <div className="flex justify-between">
                                <span className="text-gray-300">{values.before} → {values.after}</span>
                                <span className="text-green-400">{values.growth}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Examples */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Campaign Deep Dives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {campaignExamples.map((campaign, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {campaign.platform === "Instagram" ? 
                      <Instagram className="w-8 h-8 text-pink-400 mr-3" /> :
                      <Linkedin className="w-8 h-8 text-blue-400 mr-3" />
                    }
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">{campaign.title}</h3>
                      <p className="text-gray-400">{campaign.client}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {campaign.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-900 p-4 rounded">
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-gray-100 text-lg font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    {campaign.content.map((item, i) => (
                      <div key={i} className="border-t border-gray-700 py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-gray-300 font-medium">{item.title}</p>
                            <p className="text-gray-400 text-sm">{item.type}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-300">{item.performance.views} views</p>
                            <p className="text-green-400">{item.performance.engagement} eng.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Performance Charts */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Monthly Performance Tracking</h2>
            {monthlyMetrics.map((platform, index) => (
              <div key={index} className="mb-12 bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <platform.icon className="w-8 h-8 text-blue-300 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-100">{platform.platform} Growth Metrics</h3>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={platform.metrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        itemStyle={{ color: '#E5E7EB' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="followers" 
                        stroke="#60A5FA" 
                        strokeWidth={2} 
                        name="Followers"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="#C084FC" 
                        strokeWidth={2} 
                        name="Engagement"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="reach" 
                        stroke="#34D399" 
                        strokeWidth={2} 
                        name="Reach"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="text-blue-300 mb-1">Peak Followers</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {Math.max(...platform.metrics.map(m => m.followers)).toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="text-purple-300 mb-1">Best Engagement</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {Math.max(...platform.metrics.map(m => m.engagement)).toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="text-green-300 mb-1">Maximum Reach</p>
                    <p className="text-2xl font-bold text-gray-100">
                      {Math.max(...platform.metrics.map(m => m.reach)).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROI and Business Impact */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Business Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Average ROI",
                  value: "385%",
                  subtext: "Across all campaigns",
                  icon: TrendingUp,
                  color: "text-green-400"
                },
                {
                  title: "Lead Generation",
                  value: "12.5K",
                  subtext: "Monthly qualified leads",
                  icon: Users,
                  color: "text-blue-400"
                },
                {
                  title: "Cost Reduction",
                  value: "68%",
                  subtext: "In customer acquisition",
                  icon: BarChart2,
                  color: "text-purple-400"
                }
              ].map((metric, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8 text-center">
                  <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color}`} />
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{metric.title}</h3>
                  <p className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</p>
                  <p className="text-gray-400">{metric.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Marketing Director",
                  company: "Fitness First",
                  testimonial: "The results exceeded our expectations. Our social media presence has completely transformed, and we're seeing real business impact with increased membership signups."
                },
                {
                  name: "Michael Rodriguez",
                  role: "CEO",
                  company: "Fresh Eats",
                  testimonial: "From zero presence to market leader in social engagement - the strategy and execution were flawless. Our customer acquisition costs have dropped significantly."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-100">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-blue-300">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;