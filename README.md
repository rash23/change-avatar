# Change Avatar Background

A modern React application for changing avatar backgrounds with AI-powered generation (mock implementation).

## 📋 Project Overview

This project demonstrates a creative UI for changing avatar backgrounds with the following features:
- Interactive sidebar with background selection
- Mock background generation with progress tracking
- Real-time polling for generation status updates
- Responsive design with Tailwind CSS
- Type-safe development with TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── BackgroundCard/  # Background card with progress
│   ├── Sidebar/         # Sidebar with controls
│   ├── icons/           # Custom icon components
│   └── ui/              # shadcn/ui components
├── store/               # Redux store configuration
│   ├── api/             # RTK Query API endpoints
│   └── slices/          # Redux slices
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── constants/           # App constants
└── database/            # Mock data
```

## 🎯 Key Features

### Background Generation (Mock)
- Simulated AI background generation with progress tracking
- 5-second generation process with 20% increments
- Real-time progress updates via polling
- Automatic cleanup to prevent memory leaks

### State Management
- Redux Toolkit for global state
- RTK Query for API calls and caching
- Optimized polling with 1-second intervals
- Proper TypeScript integration

### UI/UX
- Smooth animations and transitions
- Loading states and progress indicators
- Responsive design for all screen sizes
- Custom font integration (Italian Plate No2)

## 🔧 Implementation Details

### Mock Background Generation

The background generation is simulated using `setInterval` with proper cleanup:
- Progress updates every second (20% increments)
- Total generation time: 5 seconds
- Safety timeout to prevent orphaned intervals
- Polling interval: 1000ms (optimized for mock functionality)

### Code Quality

- **ESLint** with React and TypeScript rules
- **Prettier** for consistent code formatting
- **TypeScript strict mode** enabled
- No React.FC usage (modern approach)
- Proper error handling with dev-only logging

## 📝 Notes

### Mock Implementation

This is a test assignment with mock functionality:
- Background generation is simulated (no real API)
- Uses local JSON data for backgrounds
- Progress tracking is client-side only
- No actual image processing occurs

### Future Enhancements (TODO)

- Real API integration for background generation
- WebSocket/SSE for real-time updates (instead of polling)
- Background selection and application to avatar
- Prompt history navigation (Previous/Next)
- Error notifications (toast/snackbar)
- Unit and integration tests

## 🎨 Design Features

- Custom card shadows and borders
- Progress circle with animated stroke
- Glassmorphism effects
- Smooth hover transitions
- Custom badge for default background

## 📄 License

This is a test assignment project.
