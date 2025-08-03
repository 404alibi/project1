import Navbar from "@/components/navbar"
import VideoCard from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock trending videos data
const trendingVideos = [
  {
    id: "t1",
    title: "Breaking: Revolutionary AI Technology Unveiled",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7bac5645-aacf-4b3e-9ad0-8bb219a8cea1.png",
    description: "Scientists reveal groundbreaking artificial intelligence that could change everything we know about technology.",
    views: 5200000,
    duration: "18:45",
    uploadedAt: "2024-01-16T08:30:00Z",
    category: "Technology",
    uploader: "TechNews"
  },
  {
    id: "t2",
    title: "Viral Dance Challenge Takes Over Social Media",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/187d1d6f-0f46-4be6-b5c9-0c6558e5e669.png",
    description: "The latest dance craze that has millions of people around the world moving to the beat.",
    views: 8900000,
    duration: "3:22",
    uploadedAt: "2024-01-15T20:15:00Z",
    category: "Entertainment",
    uploader: "DanceWorld"
  },
  {
    id: "t3",
    title: "Climate Change Documentary Wins Awards",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/848c2913-1080-4217-99a3-eefdbc086e9f.png",
    description: "An eye-opening documentary about climate change that's sparking global conversations.",
    views: 3400000,
    duration: "52:18",
    uploadedAt: "2024-01-14T12:00:00Z",
    category: "Documentary",
    uploader: "EcoFilms"
  },
  {
    id: "t4",
    title: "Celebrity Chef's Secret Recipe Revealed",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c94588f-059e-4c06-99e6-204637a5e945.png",
    description: "World-renowned chef shares the secret behind their most famous dish for the first time.",
    views: 2800000,
    duration: "25:33",
    uploadedAt: "2024-01-13T16:45:00Z",
    category: "Cooking",
    uploader: "CulinaryMasters"
  },
  {
    id: "t5",
    title: "Space Mission Launch Live Coverage",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c32b0f9-fbd3-4abd-b12c-d18fad76f3e5.png",
    description: "Watch the historic launch of the latest space mission to explore distant planets.",
    views: 6700000,
    duration: "2:15:42",
    uploadedAt: "2024-01-12T09:00:00Z",
    category: "Science",
    uploader: "SpaceAgency"
  },
  {
    id: "t6",
    title: "Fitness Transformation: 90-Day Journey",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ede87f76-858b-4efc-86f0-d314c592eb52.png",
    description: "An inspiring fitness transformation story that motivates millions to start their own journey.",
    views: 4100000,
    duration: "31:20",
    uploadedAt: "2024-01-11T14:30:00Z",
    category: "Fitness",
    uploader: "FitJourney"
  },
  {
    id: "t7",
    title: "Hidden Travel Gems in Southeast Asia",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e416fbed-7f99-43cd-81b3-c52fbe5d3273.png",
    description: "Discover breathtaking hidden destinations in Southeast Asia that most tourists never see.",
    views: 1900000,
    duration: "28:15",
    uploadedAt: "2024-01-10T11:20:00Z",
    category: "Travel",
    uploader: "AdventureSeeker"
  },
  {
    id: "t8",
    title: "Music Producer Creates Hit Song Live",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9135f021-7e70-40c9-91ce-c427b1a96adf.png",
    description: "Watch a Grammy-winning producer create a chart-topping hit from scratch in real-time.",
    views: 3600000,
    duration: "45:50",
    uploadedAt: "2024-01-09T19:00:00Z",
    category: "Music",
    uploader: "StudioSessions"
  }
]

const timeframes = ["Today", "This Week", "This Month", "All Time"]

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Trending Videos</h1>
          <p className="text-muted-foreground">
            Discover what's popular right now across all categories
          </p>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-semibold text-sm text-muted-foreground">TOTAL VIEWS TODAY</h3>
            <p className="text-2xl font-bold">24.5M</p>
          </div>
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-semibold text-sm text-muted-foreground">TRENDING VIDEOS</h3>
            <p className="text-2xl font-bold">156</p>
          </div>
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-semibold text-sm text-muted-foreground">TOP CATEGORY</h3>
            <p className="text-2xl font-bold">Technology</p>
          </div>
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-semibold text-sm text-muted-foreground">VIRAL THRESHOLD</h3>
            <p className="text-2xl font-bold">1M+ views</p>
          </div>
        </div>

        {/* Time Filter Tabs */}
        <Tabs defaultValue="Today" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {timeframes.map((timeframe) => (
              <TabsTrigger key={timeframe} value={timeframe}>
                {timeframe}
              </TabsTrigger>
            ))}
          </TabsList>

          {timeframes.map((timeframe) => (
            <TabsContent key={timeframe} value={timeframe}>
              {/* Top Trending Video */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">🔥 Most Viral Right Now</h2>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border-2 border-primary/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div>
                      <img
                        src={trendingVideos[1].thumbnailUrl}
                        alt={trendingVideos[1].title}
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          #1 TRENDING
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {trendingVideos[1].category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{trendingVideos[1].title}</h3>
                      <p className="text-muted-foreground mb-4">{trendingVideos[1].description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {(trendingVideos[1].views / 1000000).toFixed(1)}M views • {trendingVideos[1].uploader}
                        </div>
                        <Button>Watch Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending Grid */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Trending {timeframe}</h2>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {trendingVideos.slice(0, 8).map((video, index) => (
                    <div key={video.id} className="relative">
                      <div className="absolute -top-2 -left-2 z-10">
                        <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                          #{index + 1}
                        </div>
                      </div>
                      <VideoCard {...video} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Category Breakdown */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">Trending by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Technology", "Entertainment", "Science", "Cooking", "Fitness", "Travel"].map((category) => {
              const categoryVideos = trendingVideos.filter(v => v.category === category)
              const topVideo = categoryVideos[0]
              
              if (!topVideo) return null
              
              return (
                <div key={category} className="bg-card rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{category}</h3>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  <div className="aspect-video mb-3">
                    <img
                      src={topVideo.thumbnailUrl}
                      alt={topVideo.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">{topVideo.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {(topVideo.views / 1000000).toFixed(1)}M views • {topVideo.uploader}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
