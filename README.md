# VideoStream - Professional Video Sharing Platform

A modern, responsive video streaming platform built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean, professional interface similar to major video platforms with full functionality for browsing, uploading, and managing video content.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Video Management**: Upload, categorize, and manage video content
- **Browse & Discovery**: 
  - Home page with featured content
  - Trending videos with time-based filtering
  - Category-based browsing
  - Search functionality
- **Video Player**: Custom video player with controls
- **Upload System**: Drag-and-drop video upload with metadata management
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Professional Components**: Built with shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Development**: Turbopack for fast development

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── categories/
│   │   └── page.tsx            # Categories page
│   ├── trending/
│   │   └── page.tsx            # Trending videos page
│   ├── upload/
│   │   └── page.tsx            # Video upload page
│   ├── video/[id]/
│   │   └── page.tsx            # Individual video page
│   └── api/
│       └── upload/
│           └── route.ts        # Upload API endpoint
├── components/
│   ├── navbar.tsx              # Navigation component
│   ├── video-card.tsx          # Video card component
│   ├── video-player.tsx        # Custom video player
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── utils.ts                # Utility functions
└── hooks/
    └── use-mobile.ts           # Mobile detection hook
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation & Setup

1. **Download/Clone the project** to your local machine

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🎯 Key Pages & Features

### Home Page (`/`)
- Hero section with featured content
- Category-based video filtering
- Trending and recently added sections
- Responsive video grid layout

### Trending Page (`/trending`)
- Time-based trending filters (Today, This Week, This Month, All Time)
- Viral content highlighting
- Category-specific trending sections
- Platform statistics

### Categories Page (`/categories`)
- Featured categories showcase
- Complete category grid
- Category-specific video recommendations
- Platform statistics overview

### Upload Page (`/upload`)
- Drag-and-drop video upload
- Video metadata management (title, description, category, tags)
- Custom thumbnail upload
- Upload progress tracking
- Form validation

### Video Page (`/video/[id]`)
- Custom video player with controls
- Video information and metadata
- Comments system
- Related videos sidebar
- Channel information

## 🎨 Customization

### Styling
- Built with Tailwind CSS for easy customization
- Dark/light theme support via CSS variables
- Responsive design with mobile-first approach
- Custom color scheme defined in `globals.css`

### Components
- All UI components are built with shadcn/ui
- Easily customizable and extendable
- TypeScript support for better development experience

### Data
- Currently uses mock data for demonstration
- Easy to integrate with real APIs
- Structured data models for videos, categories, and users

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
```

### Next.js Configuration
The project includes a `next.config.ts` file for Next.js configuration. Modify as needed for your deployment requirements.

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized mobile experience with collapsible navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Happy coding! 🚀**
