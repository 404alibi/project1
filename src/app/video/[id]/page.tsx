import Navbar from "@/components/navbar"
import VideoPlayer from "@/components/video-player"
import VideoCard from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock video data
const mockVideoData: { [key: string]: any } = {
  "1": {
    id: "1",
    title: "Amazing Nature Documentary: Wildlife in 4K",
    videoSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a626f86c-e9d9-47ae-9c0b-05e380190f24.png",
    poster: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d18dbb3-d34a-490d-9571-8f87da58bb9a.png",
    description: "Explore the breathtaking world of wildlife with stunning 4K footage of animals in their natural habitat. This comprehensive documentary takes you on a journey through diverse ecosystems, showcasing the incredible diversity of life on our planet.",
    views: 1250000,
    likes: 45000,
    dislikes: 1200,
    uploadedAt: "2024-01-15T10:30:00Z",
    category: "Documentary",
    uploader: "NatureFilms",
    uploaderAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b4cce5c-bfac-4ade-b0d3-0331d97722ed.png",
    subscribers: 2500000,
    tags: ["nature", "wildlife", "documentary", "4K", "animals"]
  },
  "2": {
    id: "2",
    title: "Modern Architecture: Designing the Future",
    videoSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2b6f5dc-6c48-4101-886a-407614fcc7fc.png",
    poster: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2557d543-e54a-44b5-94e7-a6e4c9fd212a.png",
    description: "A deep dive into contemporary architectural marvels and innovative design principles shaping our cities. Discover how architects are reimagining urban spaces for the future.",
    views: 890000,
    likes: 32000,
    dislikes: 800,
    uploadedAt: "2024-01-14T14:20:00Z",
    category: "Architecture",
    uploader: "DesignStudio",
    uploaderAvatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b1b244a-483b-44ad-b1f7-5712a8602e6d.png",
    subscribers: 1800000,
    tags: ["architecture", "design", "modern", "future", "buildings"]
  }
}

// Mock related videos
const relatedVideos = [
  {
    id: "3",
    title: "Cooking Masterclass: Italian Cuisine Basics",
    thumbnailUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e36fc5a8-712f-4e6c-bf89-0bea9c642318.png",
    description: "Learn the fundamentals of authentic Italian cooking with professional chef techniques.",
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
    description: "Follow humanity's ambitious journey to Mars with cutting-edge space technology.",
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
    description: "Transform your home into a professional gym with this comprehensive workout guide.",
    views: 1800000,
    duration: "35:20",
    uploadedAt: "2024-01-11T07:30:00Z",
    category: "Fitness",
    uploader: "FitLife"
  }
]

// Mock comments
const mockComments = [
  {
    id: "1",
    user: "NatureLover123",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4844ea34-6dac-4b42-ac9d-4ca351dfa0cc.png",
    comment: "Absolutely stunning footage! The cinematography is incredible and really showcases the beauty of wildlife.",
    likes: 245,
    timestamp: "2 hours ago"
  },
  {
    id: "2",
    user: "DocumentaryFan",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/19c5caa4-99c3-47a9-a337-4586f0db0cd0.png",
    comment: "This is exactly the kind of content we need more of. Educational and visually spectacular!",
    likes: 189,
    timestamp: "5 hours ago"
  },
  {
    id: "3",
    user: "WildlifeExpert",
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7382ad65-530b-4fc4-9b0a-1687f1889ddb.png",
    comment: "Great work on the research and presentation. Very informative and well-produced.",
    likes: 156,
    timestamp: "1 day ago"
  }
]

interface VideoPageProps {
  params: {
    id: string
  }
}

export default function VideoPage({ params }: VideoPageProps) {
  const video = mockVideoData[params.id] || mockVideoData["1"]
  
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="mb-6">
              <VideoPlayer
                videoSrc={video.videoSrc}
                poster={video.poster}
                title={video.title}
              />
            </div>

            {/* Video Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {video.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-muted-foreground">
                  {formatViews(video.views)} views • {formatDate(video.uploadedAt)}
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    👍 {formatViews(video.likes)}
                  </Button>
                  <Button variant="outline" size="sm">
                    👎 {formatViews(video.dislikes)}
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                </div>
              </div>

              <Separator className="mb-4" />

              {/* Channel Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={video.uploaderAvatar}
                    alt={video.uploader}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{video.uploader}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatViews(video.subscribers)} subscribers
                    </p>
                  </div>
                </div>
                <Button>Subscribe</Button>
              </div>

              {/* Description */}
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm leading-relaxed">{video.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Comments Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Comments ({mockComments.length})</h2>
              
              {/* Add Comment */}
              <div className="mb-6">
                <div className="flex space-x-3">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c06dff0d-8631-4304-b6e1-2a1af4e4083e.png"
                    alt="Your avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <Textarea
                      placeholder="Add a comment..."
                      className="mb-2"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">Cancel</Button>
                      <Button size="sm">Comment</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm">{comment.user}</span>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm mb-2">{comment.comment}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          👍 {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          👎
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Related Videos</h2>
            <div className="space-y-4">
              {relatedVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
