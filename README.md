# 🎮 Discord Clone

A full-featured Discord clone built with Next.js 14, featuring real-time messaging, voice/video calls, file sharing, and server management.

## ✨ Features

### 🔐 Authentication & Security
- **Clerk Authentication** - Secure user authentication with social logins
- **Role-based permissions** - Server owners, admins, moderators, and members
- **Invite system** - Generate and manage server invites

### 💬 Real-time Communication
- **Socket.IO Integration** - Real-time messaging across servers and channels
- **LiveKit Voice/Video** - High-quality voice and video calls
- **Screen Sharing** - Share your screen during calls
- **Text Channels** - Organized conversations by topic
- **Voice Channels** - Drop-in voice communication

### 📁 File Management
- **UploadThing Integration** - Secure file uploads and sharing
- **Image/Video Support** - Share media files in conversations
- **File Attachments** - Send documents and files

### 🎨 User Experience
- **Dark/Light Theme** - Toggle between themes with next-themes
- **Emoji Support** - Rich emoji picker with emoji-mart
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Smooth Animations** - Enhanced UI with Tailwind CSS animations

### 🏗️ Server Management
- **Create Servers** - Build your own communities
- **Channel Management** - Create and organize text/voice channels
- **Member Management** - Invite, kick, and manage server members
- **Server Settings** - Customize server appearance and settings

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Accessible component
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[Supabase](https://supabase.com/)** - PostgreSQL
- **[Clerk](https://clerk.com/)** - Authentication and user management

### Real-time Features
- **[Socket.IO](https://socket.io/)** - Real-time bidirectional communication
- **[LiveKit](https://livekit.io/)** - Real-time video/audio infrastructure
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

### File Handling
- **[UploadThing](https://uploadthing.com/)** - File uploads made easy

### State Management
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Database (PostgreSQL recommended)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/discord-clone.git
    cd discord-clone

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install

3. **Set up environment variables**
    ````bash
    cp .env.example .env.local

    Fill in your environment variables:

# Database
    ```bash
    DATABASE_URL="your_database_url"

# Clerk Authentication
    ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# UploadThing
    ```bash
    UPLOADTHING_SECRET=your_uploadthing_secret
    UPLOADTHING_APP_ID=your_uploadthing_app_id

# LiveKit
    ```bash
    LIVEKIT_API_KEY=your_livekit_api_key
    LIVEKIT_API_SECRET=your_livekit_api_secret
    NEXT_PUBLIC_LIVEKIT_URL=your_livekit_url


4. **Set up the database**
    ```bash
    npx prisma generate
    npx prisma db push

5. **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

    discord-clone/
    ├── app/                    # Next.js 14 App Router
    │   ├── (auth)/            # Authentication routes
    │   ├── (invite)/          # Invite handling
    │   ├── (main)/            # Main application
    │   ├── (setup)/           # Initial setup
    │   ├── api/               # API routes
    │   ├── globals.css        # Global styles
    │   ├── layout.tsx         # Root layout
    │   └── page.tsx           # Landing page
    ├── components/            # Reusable components
    │   ├── ui/               # UI components (Radix + custom)
    │   ├── providers/        # Context providers
    │   └── ...               # Feature components
    ├── hooks/                # Custom React hooks
    ├── lib/                  # Utility functions
    ├── prisma/               # Database schema and migrations
    ├── public/               # Static assets
    └── pages/                # API routes (if any)


## 🔧 Configuration

### Database Setup
This project uses Prisma as the ORM. You can use any database supported by Prisma:

- PostgreSQL (recommended)
- MySQL
- SQLite (for development)

### Authentication Setup
1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your API keys to the environment variables

### LiveKit Setup
1. Create a LiveKit account at [livekit.io](https://livekit.io)
2. Create a new project
3. Copy your API credentials to the environment variables

### UploadThing Setup
1. Create an UploadThing account at [uploadthing.com](https://uploadthing.com)
2. Create a new app
3. Copy your API keys to the environment variables

## 🎯 Usage

### Creating a Server
1. Sign up/Login to your account
2. Click "Create Server" or use the "+" button
3. Customize your server name and image
4. Start creating channels and inviting members

### Joining a Server
1. Get an invite link from a server member
2. Click the invite link
3. You'll be automatically added to the server

### Voice/Video Calls
1. Join a voice channel
2. Use the camera/microphone controls
3. Share your screen if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for all new files
- Follow the existing code style
- Use meaningful commit messages
- Add comments for complex logic

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | ✅ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `UPLOADTHING_SECRET` | UploadThing secret key | ✅ |
| `UPLOADTHING_APP_ID` | UploadThing app ID | ✅ |
| `LIVEKIT_API_KEY` | LiveKit API key | ✅ |
| `LIVEKIT_API_SECRET` | LiveKit API secret | ✅ |
| `NEXT_PUBLIC_LIVEKIT_URL` | LiveKit server URL | ✅ |

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Discord](https://discord.com) for the inspiration
- [Clerk](https://clerk.com) for authentication
- [LiveKit](https://livekit.io) for real-time communication
- [UploadThing](https://uploadthing.com) for file uploads
- [Vercel](https://vercel.com) for hosting

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/siddhx579/discord-clone/issues) page
2. Create a new issue if your problem isn't already listed

---

⭐ If you found this project helpful, please give it a star on GitHub!
