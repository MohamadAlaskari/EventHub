# 🎉 EventHub - Event Discovery Platform

<p align="center">
  <strong>A modern, responsive web application built with React and TypeScript that helps users discover and explore events happening around them.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19+-blue" alt="React Version">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-blue" alt="TypeScript Version">
  <img src="https://img.shields.io/badge/Vite-5.0+-green" alt="Vite Version">
  <img src="https://img.shields.io/badge/Tailwind-3.0+-cyan" alt="Tailwind Version">
</p>

From concerts and festivals to conferences and local gatherings, EventHub provides a comprehensive platform for event discovery and management with an intuitive, modern interface.

## ✨ Features

### 🎫 Core Functionality
- **Event Discovery**: Browse events by country with real-time search and filtering
- **Event Details**: Comprehensive event information including dates, venues, pricing, and descriptions
- **Interactive Maps**: Location-based event discovery using Mapbox integration
- **Smart Search**: Real-time search functionality across event names and descriptions
- **Advanced Filtering**: Filter events by country, category, and custom search terms

### 👤 User Experience
- **User Authentication**: Secure registration and login system with JWT tokens
- **Favorites System**: Save and manage favorite events with persistent storage
- **User Profiles**: Personalized user accounts with profile management
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Accessibility**: WCAG-compliant interface with keyboard navigation support

### 🛠️ Technical Features
- **Real-time Data**: Live event data with loading states and comprehensive error handling
- **State Management**: Efficient state management with React Query for server state
- **Performance**: Optimized with code splitting and lazy loading
- **Modern UI**: Beautiful, accessible interface with smooth animations and transitions
- **Pagination**: Efficient browsing through large event catalogs with infinite scroll
- **Offline Support**: Progressive Web App capabilities for offline browsing

## 🛠️ Tech Stack

### Core Technologies
- **Frontend Framework**: [React 19](https://react.dev/) - Latest React with concurrent features
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript development
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and development server

### UI & Styling
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Component Library**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, customizable SVG icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library

### State Management & Data Fetching
- **Server State**: [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- **Client State**: React Context API and useReducer for local state management
- **Routing**: [React Router DOM](https://reactrouter.com/) - Declarative routing

### Forms & Validation
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Performant forms with easy validation
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Input Components**: Custom form components with accessibility features

### Maps & Location
- **Maps**: [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) - Interactive maps and geospatial data
- **Geocoding**: Mapbox Geocoding API for location search

### Development Tools
- **Linting**: [ESLint](https://eslint.org/) with TypeScript support
- **Formatting**: [Prettier](https://prettier.io/) for code formatting
- **Testing**: [Vitest](https://vitest.dev/) for unit testing
- **Type Checking**: TypeScript compiler for type safety

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Mapbox Account** - [Sign up here](https://www.mapbox.com/) for map functionality

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd EventHub/frontend
```

#### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

#### 3. Environment Configuration
Create a `.env` file in the frontend root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=10000

# Mapbox Configuration
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here

# App Configuration
VITE_APP_NAME=EventHub
VITE_APP_VERSION=1.0.0
```

#### 4. Start Development Server
```bash
# Start development server with hot reload
npm run dev

# Start with specific port
npm run dev -- --port 3001

# Start with host binding
npm run dev -- --host
```

#### 5. Open in Browser
Navigate to `http://localhost:5173` to view the application.

### Development Commands
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── ui/                      # Base UI components (buttons, cards, inputs)
│   │   ├── button.tsx           # Button component variants
│   │   ├── card.tsx             # Card component
│   │   ├── input.tsx            # Input component
│   │   └── ...                  # Other UI primitives
│   ├── EventCard.tsx            # Event display component
│   ├── FavoriteEventCard.tsx   # Favorite event component
│   ├── MapBox.tsx              # Interactive map component
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── Layout.tsx              # Main layout wrapper
│   └── SEO.tsx                 # SEO meta tags component
├── pages/                       # Page components (Route components)
│   ├── Events.tsx              # Event listing page
│   ├── EventDetail.tsx         # Event details page
│   ├── Favorites.tsx           # User favorites page
│   ├── Profile.tsx             # User profile page
│   ├── Login.tsx               # Login page
│   ├── Register.tsx            # Registration page
│   ├── Index.tsx               # Home page
│   └── NotFound.tsx            # 404 error page
├── hooks/                       # Custom React hooks
│   ├── useEvents.ts            # Event data management
│   ├── useAuth.ts              # Authentication logic
│   ├── useFavorites.ts         # Favorites management
│   ├── useUser.ts              # User data management
│   └── useEventDetails.ts      # Event details management
├── services/                    # API service functions
│   ├── auth.service.ts         # Authentication API calls
│   ├── events.service.ts       # Events API calls
│   ├── favorites.service.ts    # Favorites API calls
│   └── user.service.ts         # User API calls
├── contexts/                    # React contexts
│   └── authContext.tsx         # Authentication context
├── types/                       # TypeScript type definitions
│   ├── auth.ts                 # Authentication types
│   ├── event.ts                # Event data types
│   ├── user.ts                 # User data types
│   └── CountryCode.ts          # Country code enum
├── schemas/                     # Validation schemas
│   └── user.ts                 # User validation schemas
├── config/                      # Configuration files
│   ├── api.ts                  # API configuration
│   └── tokenInterceptor.ts      # Axios token interceptor
├── constants/                   # Application constants
│   ├── auth.ts                 # Authentication constants
│   └── endpoints.ts            # API endpoints
├── lib/                         # Utility libraries
│   ├── storage.ts              # Local storage utilities
│   └── utils.ts                # General utilities
├── assets/                      # Static assets
│   ├── images/                 # Image files
│   └── icons/                  # Icon files
├── App.tsx                      # Root component
├── AppRoutes.tsx               # Route configuration
├── main.tsx                    # Application entry point
└── index.css                   # Global styles
```

## 🎯 Key Pages & Features

### 🏠 Home Page (`/`)
- **Hero Section**: Eye-catching banner with call-to-action
- **Quick Access**: Direct links to event discovery and registration
- **Featured Events**: Highlighted events and categories
- **User Onboarding**: Registration and login options

### 🎫 Events Page (`/events`)
- **Event Grid**: Responsive grid layout with event cards
- **Advanced Search**: Real-time search with instant results
- **Smart Filtering**: Filter by country, category, date, and price
- **Pagination**: Efficient browsing with infinite scroll
- **Sort Options**: Sort by date, popularity, or relevance

### 📄 Event Details (`/events/:id`)
- **Comprehensive Information**: Complete event details and descriptions
- **Interactive Maps**: Mapbox integration for venue location
- **Image Gallery**: High-quality event images and media
- **Social Features**: Add to favorites and share functionality
- **Related Events**: Suggestions for similar events

### ❤️ Favorites (`/favorites`)
- **Personal Collection**: User's saved events in one place
- **Quick Actions**: Easy removal and management of favorites
- **Authentication Required**: Secure access to personal data
- **Export Options**: Share or export favorite lists

### 👤 User Profile (`/profile`)
- **Account Management**: Update personal information and preferences
- **Security Settings**: Change password and security options
- **Activity History**: View past interactions and favorites
- **Notification Preferences**: Customize email and app notifications

### 🔐 Authentication Pages
- **Login (`/login`)**: Secure user authentication
- **Register (`/register`)**: New user account creation
- **Password Recovery**: Reset forgotten passwords
- **Email Verification**: Account verification process

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run dev -- --port 3001  # Start on specific port
npm run dev -- --host       # Start with host binding
```

### Building
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run build -- --mode production  # Force production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues automatically
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

### Testing
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

## 🎨 UI Components & Design System

The project uses a comprehensive design system built on modern web standards:

### Component Architecture
- **Base Components**: Radix UI primitives for accessibility
- **Custom Components**: Tailored components for specific use cases
- **Layout Components**: Responsive layout and navigation components
- **Form Components**: Accessible forms with validation and error handling

### Design Features
- **Event Cards**: Interactive cards with hover effects and smooth animations
- **Form Elements**: Accessible input components with real-time validation
- **Navigation**: Responsive navigation with mobile-first design
- **Modals & Dialogs**: Accessible modal components for user interactions
- **Loading States**: Skeleton loaders and progress indicators for better UX
- **Error States**: User-friendly error messages and fallback components

### Accessibility Features
- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color schemes
- **Focus Management**: Proper focus handling and visual indicators

## 🌍 Internationalization & Localization

The app supports multiple countries and regions through comprehensive localization:

- **Country Support**: Full support for multiple countries via `CountryCode` enum
- **Localized Data**: Event data filtered by selected regions
- **Currency Support**: Local currency display for event pricing
- **Date Formatting**: Region-specific date and time formatting
- **Language Support**: Ready for multi-language content (extensible)

## 🔐 Authentication & Security

### Authentication Features
- **Secure Registration**: Email verification and password validation
- **JWT Token Management**: Secure token-based authentication with refresh tokens
- **Protected Routes**: Route guards for user-specific features
- **Context Management**: React Context for authentication state
- **Token Interceptors**: Automatic token handling for API requests

### Security Measures
- **Input Validation**: Client-side validation with Zod schemas
- **XSS Protection**: Sanitized user inputs and outputs
- **CSRF Protection**: Cross-site request forgery prevention
- **Secure Storage**: Safe token storage in browser

## 📱 Responsive Design & Performance

### Mobile-First Approach
- **Responsive Grid**: Flexible layouts that adapt to all screen sizes
- **Touch Interactions**: Optimized for mobile and tablet devices
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Performance Optimization**: Lazy loading and code splitting

### Performance Features
- **Code Splitting**: Route-based code splitting for faster loading
- **Image Optimization**: Optimized images with lazy loading
- **Caching Strategy**: Efficient caching with React Query
- **Bundle Analysis**: Optimized bundle size and loading

## 🚀 Deployment

The app is built with Vite and optimized for modern deployment platforms:

### Build Process
```bash
# Build for production
npm run build

# Analyze bundle size
npm run build -- --analyze

# Build with specific environment
npm run build -- --mode production
```

### Deployment Options

#### Static Hosting (Recommended)
- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Deploy from GitHub Actions
- **AWS S3**: Upload `dist` folder to S3 bucket

#### Environment Variables for Production
```env
VITE_API_BASE_URL=https://your-api-domain.com
VITE_MAPBOX_ACCESS_TOKEN=your_production_mapbox_token
VITE_APP_ENV=production
```

### Deployment Checklist
- [ ] Set up production environment variables
- [ ] Configure API endpoints
- [ ] Set up Mapbox access token
- [ ] Test production build locally
- [ ] Configure custom domain (optional)
- [ ] Set up analytics and monitoring

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. **Fork the repository** on GitHub
2. **Clone your fork**: `git clone https://github.com/your-username/EventHub.git`
3. **Create a feature branch**: `git checkout -b feature/amazing-feature`
4. **Install dependencies**: `npm install`

### Development Guidelines
- Follow the existing code style and patterns
- Write tests for new features and bug fixes
- Update documentation for any API changes
- Ensure all tests pass before submitting
- Use conventional commit messages

### Submitting Changes
1. **Commit your changes**: `git commit -m 'feat: add amazing feature'`
2. **Push to your fork**: `git push origin feature/amazing-feature`
3. **Open a Pull Request** with a clear description of your changes

### Contribution Areas
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation updates
- 🧪 Test coverage improvements
- 🎨 UI/UX improvements
- ⚡ Performance optimizations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Core Technologies
- [React](https://react.dev/) - Modern UI library with concurrent features
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript development
- [Vite](https://vitejs.dev/) - Lightning-fast build tool

### UI & Styling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide React](https://lucide.dev/) - Beautiful, customizable SVG icons

### Data & State Management
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [React Hook Form](https://react-hook-form.com/) - Performant forms with easy validation

### Maps & Location Services
- [Mapbox](https://www.mapbox.com/) - Location intelligence platform
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) - Interactive maps

### Development Tools
- [ESLint](https://eslints.org/) - Code linting and quality
- [Prettier](https://prettier.io/) - Code formatting
- [Vitest](https://vitest.dev/) - Fast unit testing framework

---

**🎉 EventHub** - Discover amazing events near you! Built with ❤️ using React and TypeScript.