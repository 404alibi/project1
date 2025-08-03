"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

const categories = [
  "Documentary",
  "Technology", 
  "Cooking",
  "Science",
  "Fitness",
  "Travel",
  "Music",
  "Architecture",
  "Education",
  "Entertainment"
]

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    thumbnail: null as File | null,
    video: null as File | null
  })
  
  const [tagList, setTagList] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const handleAddTag = () => {
    const newTag = formData.tags.trim()
    if (newTag && !tagList.includes(newTag) && tagList.length < 10) {
      setTagList(prev => [...prev, newTag])
      setFormData(prev => ({ ...prev, tags: "" }))
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTagList(prev => prev.filter(tag => tag !== tagToRemove))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('video/')) {
        handleFileChange('video', file)
      }
    }
  }

  const simulateUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)
    setUploadStatus("idle")

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadStatus("success")
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.description || !formData.category || !formData.video) {
      setUploadStatus("error")
      return
    }

    const uploadFormData = new FormData()
    uploadFormData.append('title', formData.title)
    uploadFormData.append('description', formData.description)
    uploadFormData.append('category', formData.category)
    uploadFormData.append('tags', JSON.stringify(tagList))
    if (formData.video) uploadFormData.append('video', formData.video)
    if (formData.thumbnail) uploadFormData.append('thumbnail', formData.thumbnail)

    try {
      simulateUpload()
      
      // Simulate API call
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

    } catch (error) {
      console.error('Upload error:', error)
      setIsUploading(false)
      setUploadStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Video</h1>
          <p className="text-muted-foreground">Share your content with the world</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Video Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Video File</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-primary bg-primary/5' 
                    : 'border-muted-foreground/25 hover:border-primary/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {formData.video ? (
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">✅ {formData.video.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {(formData.video.size / (1024 * 1024)).toFixed(2)} MB
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleFileChange('video', null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-4xl">📹</div>
                    <div>
                      <p className="text-lg font-semibold mb-2">
                        Drag and drop your video here
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        or click to browse files
                      </p>
                      <Input
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleFileChange('video', e.target.files?.[0] || null)}
                        className="max-w-xs mx-auto"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Supported formats: MP4, MOV, AVI, WMV (Max: 2GB)
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Video Details */}
          <Card>
            <CardHeader>
              <CardTitle>Video Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter video title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  maxLength={100}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.title.length}/100 characters
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your video"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  maxLength={1000}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.description.length}/1000 characters
                </p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label>Category *</Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a tag"
                    value={formData.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddTag()
                      }
                    }}
                  />
                  <Button type="button" onClick={handleAddTag} disabled={tagList.length >= 10}>
                    Add
                  </Button>
                </div>
                {tagList.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tagList.map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer">
                        #{tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  {tagList.length}/10 tags
                </p>
              </div>

              {/* Thumbnail */}
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Custom Thumbnail (Optional)</Label>
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange('thumbnail', e.target.files?.[0] || null)}
                />
                {formData.thumbnail && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {formData.thumbnail.name}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upload Progress */}
          {isUploading && (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uploading...</span>
                    <span>{Math.round(uploadProgress)}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Status Messages */}
          {uploadStatus === "success" && (
            <Alert>
              <AlertDescription>
                ✅ Video uploaded successfully! It will be processed and available shortly.
              </AlertDescription>
            </Alert>
          )}

          {uploadStatus === "error" && (
            <Alert variant="destructive">
              <AlertDescription>
                ❌ Upload failed. Please check all required fields and try again.
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
            <Button 
              type="submit" 
              disabled={isUploading || !formData.title || !formData.description || !formData.category || !formData.video}
            >
              {isUploading ? "Uploading..." : "Publish Video"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
