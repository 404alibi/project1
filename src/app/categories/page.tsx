import Navbar from "@/components/navbar"
import VideoCard from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock categories data
const categories = [
  {
    id: "documentary",
    name: "Documentary",
    description: "Real stories, real people, real impact",
    videoCount: 12500,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e2da83b-10d2-4074-95be-39a42ee5dc6b.png",
    color: "bg-blue-500"
  },
  {
    id: "technology",
    name: "Technology",
    description: "Latest tech trends and innovations",
    videoCount: 8900,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f4337f6-4fd7-4178-a4e6-78aeda4c3326.png",
    color: "bg-purple-500"
  },
  {
    id: "cooking",
    name: "Cooking",
    description: "Delicious recipes and culinary adventures",
    videoCount: 15600,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6af17aa-6bf4-4c64-9bce-9b0113004dd4.png",
    color: "bg-orange-500"
  },
  {
    id: "science",
    name: "Science",
    description: "Explore the wonders of our universe",
    videoCount: 7200,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99db7b85-5452-4c83-82db-14badfd05c6d.png",
    color: "bg-green-500"
  },
  {
    id: "fitness",
    name: "Fitness",
    description: "Health, wellness, and workout guides",
    videoCount: 11300,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b89a10c4-28f0-44f9-9afb-1ca5663ac5e4.png",
    color: "bg-red-500"
  },
  {
    id: "travel",
    name: "Travel",
    description: "Discover amazing destinations worldwide",
    videoCount: 9800,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6db0c3f9-df85-4ed9-ad29-609e0a130e38.png",
    color: "bg-teal-500"
  },
  {
    id: "music",
    name: "Music",
    description: "Beats, melodies, and musical creativity",
    videoCount: 13400,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9dfee0c7-8f0b-4409-8f3e-88967f82cb6f.png",
    color: "bg-pink-500"
  },
  {
    id: "architecture",
    name: "Architecture",
    description: "Design, buildings, and urban planning",
    videoCount: 4500,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/512edef6-e9aa-4b98-8845-d12f0fda7a53.png",
    color: "bg-gray-500"
  },
  {
    id: "education",
    name: "Education",
    description: "Learn something new every day",
    videoCount: 18700,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b9be595b-360d-4fb2-91a4-2af9d1b80060.png",
    color: "bg-indigo-500"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    description: "Fun, comedy, and pure entertainment",
    videoCount: 22100,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b6fc739d-6594-45f6-8329-cfe254ac98f0.png",
    color: "bg-yellow-500"
  },
  {
    id: "sports",
    name: "Sports",
    description: "Athletic achievements and competitions",
    videoCount: 16200,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/267c398c-c4be-49bc-950d-f39f21179c72.png",
    color: "bg-emerald-500"
  },
  {
    id: "art",
    name: "Art & Design",
    description: "Creative expression and artistic inspiration",
    videoCount: 6800,
    thumbnail: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66de2add-9114-47dd-9326-0457ffbd1167.png",
    color: "bg-violet-500"
  }
]

// Mock featured videos for each category
const featuredVideos = [
  {
    id: "f1",
    title: "Ocean Life: Deep Sea Mysteries Unveiled",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7dec4b0c-2a8f-4c04-a0da-0f66128868d3.png",
    description: "Dive into the mysterious depths of our oceans and discover incredible marine life.",
    views: 2400000,
    duration: "42:15",
    uploadedAt: "2024-01-14T10:30:00Z",
    category: "Documentary",
    uploader: "OceanExplorer"
  },
  {
    id: "f2",
    title: "AI Revolution: The Future is Now",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64d560d9-69a0-4c51-ba99-f74d08a6c9b6.png",
    description: "Explore how artificial intelligence is transforming every aspect of our lives.",
    views: 1800000,
    duration: "28:45",
    uploadedAt: "2024-01-13T14:20:00Z",
    category: "Technology",
    uploader: "FutureTech"
  },
  {
    id: "f3",
    title: "Master Chef's Italian Pasta Secrets",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13d239de-9a3f-4157-82fe-0b91ed3c0da5.png",
    description: "Learn authentic Italian pasta techniques from a Michelin-starred chef.",
    views: 3200000,
    duration: "35:20",
    uploadedAt: "2024-01-12T16:45:00Z",
    category: "Cooking",
    uploader: "ItalianCuisine"
  }
]

export default function CategoriesPage() {
  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Categories</h1>
          <p className="text-muted-foreground">
            Explore content organized by topics you love
          </p>
        </div>

        {/* Featured Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {categories.slice(0, 3).map((category) => (
              <Card key={category.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={category.thumbnail}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className={`absolute top-4 left-4 ${category.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    Featured
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {formatCount(category.videoCount)} videos
                    </span>
                    <Button size="sm">Explore</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Categories Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Categories</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Most Popular</Button>
              <Button variant="outline" size="sm">A-Z</Button>
              <Button variant="outline" size="sm">Most Videos</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={category.thumbnail}
                    alt={category.name}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className={`absolute inset-0 ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {formatCount(category.videoCount)} videos
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular in Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular in Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id}>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge variant="outline">{video.category}</Badge>
                  <span className="text-sm text-muted-foreground">Most Watched</span>
                </div>
                <VideoCard {...video} />
              </div>
            ))}
          </div>
        </section>

        {/* Category Stats */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Platform Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">147K+</div>
                  <div className="text-sm text-muted-foreground">Total Videos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.4M+</div>
                  <div className="text-sm text-muted-foreground">Hours Watched</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">850K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
