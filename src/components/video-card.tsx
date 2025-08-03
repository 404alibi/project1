"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface VideoCardProps {
  id: string
  title: string
  thumbnailUrl: string
  description: string
  views: number
  duration: string
  uploadedAt: string
  category: string
  uploader: string
}

export default function VideoCard({
  id,
  title,
  thumbnailUrl,
  description,
  views,
  duration,
  uploadedAt,
  category,
  uploader
}: VideoCardProps) {
  const [imgSrc, setImgSrc] = useState(thumbnailUrl)

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  const handleImageError = () => {
    setImgSrc("https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5557f27b-078b-4dc2-b27a-eaa217a64c80.png")
  }

  return (
    <Link href={`/video/${id}`} className="group">
      <Card className="overflow-hidden border-0 bg-transparent hover:bg-muted/50 transition-colors">
        <CardContent className="p-0">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
            <img
              src={imgSrc}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              onError={handleImageError}
            />
            {/* Duration Badge */}
            <div className="absolute bottom-2 right-2">
              <Badge variant="secondary" className="bg-black/80 text-white text-xs">
                {duration}
              </Badge>
            </div>
            {/* Category Badge */}
            <div className="absolute top-2 left-2">
              <Badge variant="outline" className="bg-background/80 text-xs">
                {category}
              </Badge>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-3">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
              <span>{uploader}</span>
              <div className="flex items-center space-x-2">
                <span>{formatViews(views)} views</span>
                <span>•</span>
                <span>{formatTimeAgo(uploadedAt)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
