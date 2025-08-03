import Navbar from "@/components/navbar"
import VideoCard from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for videos
const mockVideos = [
  {
    id: "1",
    title: "Amazing Nature Documentary: Wildlife in 4K",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9bf2d9f-1a99-42ab-9786-23f2adbdaee5.png",
    description: "Explore the breathtaking world of wildlife with stunning 4K footage of animals in their natural habitat.",
    views: 1250000,
    duration: "15:42",
    uploadedAt: "2024-01-15T10:30:00Z",
    category: "Documentary",
    uploader: "NatureFilms"
  },
  {
    id: "2",
    title: "Modern Architecture: Designing the Future",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16cf5c8b-1c0b-427a-a737-2cf7f70a9cc1.png",
    description: "A deep dive into contemporary architectural marvels and innovative design principles shaping our cities.",
    views: 890000,
    duration: "22:18",
    uploadedAt: "2024-01-14T14:20:00Z",
    category: "Architecture",
    uploader: "DesignStudio"
  },
  {
    id: "3",
    title: "Cooking Masterclass: Italian Cuisine Basics",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e36fc5a8-712f-4e6c-bf89-0bea9c642318.png",
    description: "Learn the fundamentals of authentic Italian cooking with professional chef techniques and traditional recipes.",
    views: 2100000,
    duration: "28:35",
    uploadedAt: "2024-01-13T09:15:00Z",
    category: "Cooking",
    uploader: "ChefMario"
  },
  {
    id: "4",
    title: "Space Exploration: Journey to Mars",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ecb34e65-5eb1-4b9d-9ec5-9207cefb923d.png",
    description: "Follow humanity's ambitious journey to Mars with cutting-edge space technology and scientific discoveries.",
    views: 3200000,
    duration: "45:12",
    uploadedAt: "2024-01-12T16:45:00Z",
    category: "Science",
    uploader: "SpaceChannel"
  },
  {
    id: "5",
    title: "Fitness Revolution: Home Workout Guide",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be44e99b-e82d-44b3-bb2b-89637c23d901.png",
    description: "Transform your home into a professional gym with this comprehensive workout guide and fitness tips.",
    views: 1800000,
    duration: "35:20",
    uploadedAt: "2024-01-11T07:30:00Z",
    category: "Fitness",
    uploader: "FitLife"
  },
  {
    id: "6",
    title: "Tech Innovation: AI and Machine Learning",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d00cd5cf-3e71-46c7-bf3b-b0fd278918df.png",
    description: "Discover the latest breakthroughs in artificial intelligence and how machine learning is changing the world.",
    views: 2800000,
    duration: "38:55",
    uploadedAt: "2024-01-10T12:00:00Z",
    category: "Technology",
    uploader: "TechInsider"
  },
  {
    id: "7",
    title: "Travel Guide: Hidden Gems of Europe",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/627c0816-38a9-42a6-a68f-c62a1840344b.png",
    description: "Uncover Europe's best-kept secrets with this comprehensive travel guide to hidden gems and local favorites.",
    views: 1500000,
    duration: "32:40",
    uploadedAt: "2024-01-09T11:20:00Z",
    category: "Travel",
    uploader: "WanderlustTV"
  },
  {
    id: "8",
    title: "Music Production: Creating Electronic Beats",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c47b3751-8af5-427b-8bee-00a4716f2692.png",
    description: "Learn professional music production techniques and create amazing electronic beats with industry-standard tools.",
    views: 950000,
    duration: "41:15",
    uploadedAt: "2024-01-08T15:10:00Z",
    category: "Music",
    uploader: "BeatMakers"
  }
]

const categories = ["All", "Documentary", "Technology", "Cooking", "Science", "Fitness", "Travel", "Music", "Architecture"]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c203f1b9-02ef-429b-8a50-c3b633ea34e8.png"
              alt="Featured content banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">VideoStream</h1>
                <p className="text-lg md:text-xl mb-6">Discover amazing content from creators worldwide</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Watching
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="mb-8">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-9 mb-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {mockVideos
                    .filter(video => category === "All" || video.category === category)
                    .map((video) => (
                      <VideoCard key={video.id} {...video} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Trending Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockVideos.slice(0, 4).map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </section>

        {/* Recently Added */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recently Added</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockVideos.slice(4, 8).map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
