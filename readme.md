# EventHub - Complete Event Discovery Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-blue?logo=react" alt="React Version" />
  <img src="https://img.shields.io/badge/NestJS-11.0.1-red?logo=nestjs" alt="NestJS Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/MySQL-Database-orange?logo=mysql" alt="MySQL Database" />
  <img src="https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel" alt="Vercel Deployment" />
  <img src="https://img.shields.io/badge/Docker-Containerized-blue?logo=docker" alt="Docker Support" />
</div>

<p align="center">
  <strong>A complete full-stack event discovery platform with React frontend, NestJS backend, and Docker support</strong>
</p>

<p align="center">
  Discover amazing events happening around you. From concerts and festivals to conferences and local gatherings, EventHub provides a comprehensive platform for event discovery and management with modern web technologies.
</p>

<div align="center">
  <h3>🚀 Live Demo</h3>
  <p>
    <a href="https://eventhub.alaskaritech.com/" target="_blank">🌐 Frontend</a> • 
    <a href="https://eventhub-api.alaskaritech.com/" target="_blank">🔧 API</a> • 
    <a href="https://eventhub-api.alaskaritech.com/swagger#/" target="_blank">📚 Documentation</a>
  </p>
</div>

---

## 🚀 Overview

EventsHub is a complete event management solution consisting of a modern React frontend and a robust NestJS backend. The platform integrates with the Ticketmaster API to provide real-time event data while offering users the ability to discover, save, and manage their favorite events.

### ✨ Key Features

- **🎫 Event Discovery**: Browse events by country with real-time search and filtering
- **🔐 Secure Authentication**: JWT-based authentication with email verification
- **❤️ Favorites System**: Save and manage your favorite events
- **🗺️ Interactive Maps**: Location-based event discovery using Mapbox
- **📱 Responsive Design**: Mobile-first design that works across all devices
- **🌍 Multi-Country Support**: Events from multiple countries worldwide
- **📧 Email Notifications**: Email verification and user communications
- **📚 API Documentation**: Comprehensive Swagger/OpenAPI documentation
- **🔍 SEO Optimization**: Dynamic meta tags and Open Graph support for better search engine visibility

---

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with Radix UI components
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Maps**: Mapbox GL
- **Forms**: React Hook Form with Zod validation
- **SEO**: Dynamic meta tags and Open Graph support

### Backend (NestJS + TypeScript)
- **Framework**: NestJS (Node.js)
- **Database**: MySQL with TypeORM
- **Cache**: Redis for refresh token storage
- **Authentication**: JWT with Passport.js
- **Email**: Nodemailer
- **API Documentation**: Swagger/OpenAPI
- **Deployment**: Vercel Serverless

---

## 📁 Project Structure

```
EventHub/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # Base UI components (Radix UI)
│   │   │   ├── EventCard.tsx
│   │   │   ├── FavoriteEventCard.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MapBox.tsx
│   │   │   └── ...
│   │   ├── pages/          # Page components
│   │   │   ├── Events.tsx
│   │   │   ├── EventDetail.tsx
│   │   │   ├── Favorites.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── ...
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useEvents.ts
│   │   │   ├── useFavorites.ts
│   │   │   └── ...
│   │   ├── services/       # API service functions
│   │   ├── types/          # TypeScript type definitions
│   │   ├── contexts/       # React contexts
│   │   ├── config/         # Configuration files
│   │   └── constants/      # Application constants
│   ├── Dockerfile          # Frontend Docker configuration
│   └── package.json
├── backend/                 # NestJS backend API
│   ├── src/
│   │   ├── module/         # Feature modules
│   │   │   ├── auth/       # Authentication module
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── guards/     # JWT and Local auth guards
│   │   │   │   ├── strategies/ # JWT and Local strategies
│   │   │   │   └── dto/        # Auth DTOs
│   │   │   ├── event/      # Event management module
│   │   │   ├── favorite/   # Favorites system module
│   │   │   ├── user/       # User management module
│   │   │   └── mail/       # Email service module
│   │   ├── common/         # Shared utilities
│   │   │   ├── decorators/ # Custom decorators
│   │   │   ├── filters/    # Exception filters
│   │   │   └── utils/      # Utility functions
│   │   ├── config/         # Configuration files
│   │   ├── db/            # Database configuration
│   │   └── main.ts        # Application entry point
│   ├── test/              # E2E tests
│   ├── Dockerfile         # Backend Docker configuration
│   ├── vercel.json        # Vercel deployment config
│   └── package.json
├── docker-compose.yml     # Docker Compose configuration
└── README.md            # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MySQL database
- Redis server (for refresh token storage)
- npm or yarn package manager
- Docker and Docker Compose (optional, for containerized deployment)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd EventHub
```

### 🐳 Docker Deployment (Recommended)

The easiest way to run the entire application:

```bash
# Start both frontend and backend with Docker Compose
docker-compose up --build

# The application will be available at:
# Frontend: http://localhost:80
# Backend: http://localhost:3000
# Redis: localhost:6379
# API Documentation: http://localhost:3000/swagger
```

### 🛠️ Manual Setup

#### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Database Configuration
DB_TYPE=mysql
DB_HOST=your-database-host
DB_PORT=3306
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
DB_LOGGING=true

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret

# Email Configuration
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USER=your-email
MAIL_PASS=your-email-password

# External APIs
TICKETMASTER_API_KEY=your-ticketmaster-api-key

# Redis Configuration
REDIS_URL=redis://localhost:6379

# Server Configuration
PORT=3000
```

> **Note**: For Docker deployment, create `.env` files in both `backend/` and `frontend/` directories, or use Docker Compose environment variables.

Start the backend:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`
API Documentation: `http://localhost:3000/swagger`

#### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_MAPBOX_ACCESS_TOKEN=your-mapbox-token
```

Start the frontend:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🔧 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DB_TYPE` | Database type | Yes | `mysql` |
| `DB_HOST` | Database host | Yes | - |
| `DB_PORT` | Database port | Yes | `3306` |
| `DB_USERNAME` | Database username | Yes | - |
| `DB_PASSWORD` | Database password | Yes | - |
| `DB_NAME` | Database name | Yes | - |
| `DB_LOGGING` | Enable database logging | No | `true` |
| `JWT_SECRET` | JWT secret key | Yes | - |
| `JWT_REFRESH_SECRET` | JWT refresh secret | Yes | - |
| `MAIL_HOST` | SMTP host | Yes | - |
| `MAIL_PORT` | SMTP port | Yes | `587` |
| `MAIL_USER` | SMTP username | Yes | - |
| `MAIL_PASS` | SMTP password | Yes | - |
| `TICKETMASTER_API_KEY` | Ticketmaster API key | Yes | - |
| `REDIS_URL` | Redis connection URL | Yes | `redis://localhost:6379` |
| `PORT` | Server port | No | `3000` |

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory with the following variables:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_API_BASE_URL` | Backend API URL | Yes | `http://localhost:3000` |
| `VITE_MAPBOX_ACCESS_TOKEN` | Mapbox access token | Yes | - |

---

## 🔧 API Endpoints

### Authentication (`/auth`)
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login with credentials
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout user
- `GET /auth/verify-email` - Verify email address
- `GET /auth/profile` - Get user profile

### Events (`/event`)
- `GET /event/events` - Get events with filters (date, country, pagination)
- `GET /event/:id` - Get event by ID

### Users (`/user`)
- `POST /user` - Create user
- `GET /user/:id` - Get user by ID
- `PATCH /user/:id` - Update user
- `DELETE /user/:id` - Delete user

### Favorites (`/favorite`)
- `POST /favorite/:eventId` - Add event to favorites
- `DELETE /favorite/:eventId` - Remove event from favorites
- `GET /favorite/:eventId` - Check if event is favorite
- `GET /favorite` - Get all user favorites

---

## 🔴 Redis Configuration

EventHub uses Redis for storing refresh tokens, providing better performance and automatic TTL (Time To Live) management compared to database storage.

### Redis Setup

#### Using Docker Compose (Recommended)
Redis is automatically configured when using Docker Compose:

```bash
# Start all services including Redis
docker-compose up --build

# Redis will be available at localhost:6379
```

#### Manual Redis Setup
1. Install Redis on your system:
   ```bash
   # Ubuntu/Debian
   sudo apt-get install redis-server
   
   # macOS (with Homebrew)
   brew install redis
   
   # Windows (with WSL or Docker)
   # Use Docker: docker run -d -p 6379:6379 redis:alpine
   ```

2. Start Redis server:
   ```bash
   # Linux/macOS
   redis-server
   
   # Or as a service
   sudo systemctl start redis
   ```

### Redis Configuration

The application uses Redis with the following configurations:

#### Development (Local)
- **Host**: localhost
- **Port**: 6379
- **TTL**: 7 days for refresh tokens
- **Persistence**: Enabled with append-only file

#### Production (Vercel Redis)
- **Provider**: Vercel Redis
- **Connection**: Secure connection string from Vercel dashboard
- **TTL**: 7 days for refresh tokens
- **Persistence**: Managed by Vercel
- **URL**: Set via `REDIS_URL` environment variable

### Redis Monitoring

#### Development (Local Redis)
```bash
# Connect to Redis
redis-cli

# View all keys
KEYS *

# Check refresh token for a user
GET refresh_token:USER_ID

# Check TTL for a key
TTL refresh_token:USER_ID

# View Redis info
INFO
```

#### Production (Vercel Redis)
```bash
# Connect to Vercel Redis (if accessible)
redis-cli -u $REDIS_URL

# Monitor Redis through Vercel dashboard
# - View Redis metrics
# - Check connection status
# - Monitor memory usage
# - View Redis logs
```

### Redis Benefits

1. **Performance**: Faster than database queries
2. **Automatic Expiration**: Tokens expire automatically after TTL
3. **Memory Efficiency**: Optimized for key-value storage
4. **Scalability**: Can be clustered for high availability
5. **Security**: Tokens are automatically cleaned up

---

## 🔍 SEO Optimization

EventHub includes comprehensive SEO features to improve search engine visibility and social media sharing.

### SEO Component Features

The application includes a custom `SEO` component (`frontend/src/components/SEO.tsx`) that provides:

- **Dynamic Meta Tags**: Automatically updates page titles, descriptions, and keywords
- **Open Graph Support**: Optimized social media sharing with og:title, og:description, og:image, og:url
- **Structured Data**: Proper meta tag management for search engines
- **Page-Specific SEO**: Each page can have custom SEO settings

### SEO Implementation

```typescript
// Example usage in pages
<SEO 
  title="EventHub - Discover Amazing Events Near You"
  description="Join thousands of people discovering and attending incredible events. From music festivals to tech conferences, find your next adventure with EventHub."
  keywords="events, concerts, festivals, conferences, tickets, networking, entertainment, music, tech, discover events"
  image="/og-image.jpg"
  url={window.location.href}
/>
```

### SEO Features by Page

- **Homepage**: Optimized for event discovery keywords
- **Events Page**: Dynamic SEO based on search filters and country
- **Event Details**: Individual event SEO with specific event information
- **User Pages**: Personalized SEO for user profiles and favorites

### SEO Best Practices Implemented

1. **Meta Tags**: Title, description, keywords for each page
2. **Open Graph**: Social media optimization for Facebook, Twitter, LinkedIn
3. **Structured URLs**: Clean, SEO-friendly URLs
4. **Image Optimization**: Proper alt tags and image metadata
5. **Performance**: Fast loading times for better SEO rankings
6. **Mobile-First**: Responsive design for mobile SEO

### SEO Configuration

The SEO component automatically handles:
- Dynamic title updates
- Meta tag creation and updates
- Open Graph tag management
- URL canonicalization
- Social media preview optimization

---

## 🎯 Key Features

### 🎫 Event Discovery & Management
- **Real-time Search**: Search events by name and description
- **Country Filtering**: Filter events by country code
- **Category Filtering**: Filter by event categories and genres
- **Pagination**: Efficient browsing through large event catalogs
- **Interactive Maps**: Location-based event discovery using Mapbox
- **Event Details**: Comprehensive event information with images, dates, venues
- **External API Integration**: Real-time data from Ticketmaster API

### 👤 User Management & Authentication
- **Secure Registration**: Email verification required for account activation
- **JWT Authentication**: Secure token-based authentication with refresh tokens
- **Profile Management**: User account and preference management
- **Favorites System**: Save and organize favorite events
- **Password Security**: bcrypt hashing for secure password storage
- **Email Notifications**: Automated email verification and communications

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Radix UI components for accessibility
- **Loading States**: Skeleton loaders and smooth transitions
- **Error Handling**: Comprehensive error states and user feedback
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Theme Support**: Dark/light mode capabilities

### 🏗️ Technical Features
- **TypeScript**: Full type safety across frontend and backend
- **API Documentation**: Comprehensive Swagger/OpenAPI documentation
- **Database Integration**: MySQL with TypeORM for data persistence
- **Docker Support**: Containerized deployment with Docker Compose
- **SEO Optimization**: Dynamic meta tags and Open Graph support
- **Testing**: Unit and E2E tests for both frontend and backend
- **Code Quality**: ESLint, Prettier, and consistent code formatting

---

## 🛠️ Development

### Backend Development

```bash
cd backend

# Development mode with hot reload
npm run start:dev

# Production build
npm run build
npm run start:prod

# Run tests
npm run test
npm run test:e2e

# Code formatting and linting
npm run format
npm run lint
```

### Frontend Development

```bash
cd frontend

# Development mode
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

---

## 🚀 Deployment

### 🐳 Docker Deployment (Recommended)

The application includes Docker support for easy deployment:

#### Using Docker Compose
```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop services
docker-compose down
```

#### Individual Docker Builds
```bash
# Backend
cd backend
docker build -t eventhub-backend .
docker run -p 3000:3000 eventhub-backend

# Frontend
cd frontend
docker build -t eventhub-frontend .
docker run -p 80:80 eventhub-frontend
```

### ☁️ Cloud Deployment

#### Production Deployment (Vercel + Hostinger)

The application is currently deployed using the following setup:

**Live URLs:**
- **Frontend**: [https://eventhub.alaskaritech.com/](https://eventhub.alaskaritech.com/)
- **Backend API**: [https://eventhub-api.alaskaritech.com/](https://eventhub-api.alaskaritech.com/)
- **API Documentation**: [https://eventhub-api.alaskaritech.com/swagger#/](https://eventhub-api.alaskaritech.com/swagger#/)

#### Backend Deployment (Vercel)

The backend is deployed on Vercel with the following configuration:

1. **Vercel CLI Setup**:
```bash
npm i -g vercel
```

2. **Deploy Backend**:
```bash
cd backend
vercel
```

3. **Environment Variables in Vercel Dashboard**:
   - `DB_TYPE=mysql`
   - `DB_HOST=your-database-host`
   - `DB_PORT=3306`
   - `DB_USERNAME=your-username`
   - `DB_PASSWORD=your-password`
   - `DB_NAME=your-database-name`
   - `JWT_SECRET=your-jwt-secret`
   - `JWT_REFRESH_SECRET=your-refresh-secret`
   - `MAIL_HOST=your-smtp-host`
   - `MAIL_PORT=587`
   - `MAIL_USER=your-email`
   - `MAIL_PASS=your-email-password`
   - `TICKETMASTER_API_KEY=your-ticketmaster-api-key`
   - `REDIS_URL=your-vercel-redis-url`
   - `PORT=3000`

#### Frontend Deployment (Vercel)

The frontend is deployed on Vercel with custom domain:

1. **Build Configuration**:
```bash
cd frontend
npm run build
```

2. **Vercel Deployment**:
```bash
vercel
```

3. **Custom Domain Setup**:
   - Domain: `eventhub.alaskaritech.com`
   - Configured in Vercel dashboard
   - SSL certificate automatically managed by Vercel

#### Redis Configuration (Vercel Redis)

The application uses Vercel Redis for production:

1. **Vercel Redis Setup**:
   - Create Redis database in Vercel dashboard
   - Get connection URL from Vercel Redis
   - Set `REDIS_URL` environment variable

2. **Redis Configuration**:
   - **Provider**: Vercel Redis
   - **Connection**: Secure connection string
   - **TTL**: 7 days for refresh tokens
   - **Persistence**: Managed by Vercel

#### Domain Configuration (Hostinger)

Custom domains configured through Hostinger:

- **Frontend**: `eventhub.alaskaritech.com` → Vercel frontend deployment
- **Backend**: `eventhub-api.alaskaritech.com` → Vercel backend deployment
- **SSL**: Automatically managed by Vercel
- **DNS**: Configured in Hostinger DNS settings

---

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Email Verification**: Required for account activation
- **Input Validation**: Comprehensive input validation and sanitization
- **CORS Configuration**: Secure cross-origin resource sharing
- **SQL Injection Prevention**: TypeORM ORM prevents SQL injection

---

## 📊 Database Schema

### User Entity
```typescript
{
  id: string (UUID)
  name: string (max 40 chars)
  email: string (unique)
  password: string (hashed)
  isEmailVerified: boolean
  country: CountryCode (enum)
  refreshTokenHash?: string
  favorites: Favorite[]
}
```

### Favorite Entity
```typescript
{
  id: string (UUID)
  eventId: string
  userId: string
  user: User (relation)
}
```

---

## 🧪 Testing

### Backend Testing
```bash
cd backend

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

### Frontend Testing
The frontend includes comprehensive component testing with React Testing Library.

---

## 📚 Documentation

- **API Documentation**: Available at `/swagger` when running the backend
- **Backend Architecture**: See `backend/backend_architecture_report.md`
- **Academic Report**: See `backend/EventsHub_Backend_Academic_Report.md`
- **Authentication Guide**: See `backend/doco/README_AUTH.md`

## 🏗️ Complete Application Architecture

### Frontend Architecture
- **React 19**: Latest React with concurrent features
- **TypeScript**: Full type safety and better developer experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **React Query**: Server state management and caching
- **React Router**: Client-side routing
- **Mapbox GL**: Interactive maps and geolocation
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **SEO Component**: Dynamic meta tags and Open Graph support

### Backend Architecture
- **NestJS**: Scalable Node.js server framework
- **TypeScript**: Type-safe backend development
- **TypeORM**: Object-relational mapping
- **MySQL**: Relational database
- **Redis**: In-memory cache for refresh tokens
- **JWT**: JSON Web Token authentication
- **Passport**: Authentication middleware
- **Nodemailer**: Email service integration
- **Swagger**: API documentation
- **Axios**: HTTP client for external APIs
- **bcrypt**: Password hashing

### Database Schema
- **Users**: User accounts with authentication
- **Favorites**: User's saved events
- **Events**: External event data (from Ticketmaster API)
- **Relationships**: User-Favorite-Event associations

---

## 🔧 Troubleshooting

### Common Issues

#### Redis Connection Issues
```bash
# Check if Redis is running
docker ps | grep redis

# Check Redis logs
docker logs eventhub_redis

# Test Redis connection
docker exec -it eventhub_redis redis-cli ping
```

#### Database Connection Issues
```bash
# Check MySQL connection
docker exec -it eventhub_backend npm run start:dev

# Verify database credentials in .env file
```

#### Frontend Build Issues
```bash
# Clear node_modules and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install

# Check environment variables
cat .env
```

#### Port Conflicts
If you encounter port conflicts:

```bash
# Check what's using the ports
netstat -tulpn | grep :3000
netstat -tulpn | grep :80
netstat -tulpn | grep :6379

# Stop conflicting services or change ports in docker-compose.yml
```

### Environment Variables Issues

#### Missing Environment Variables
Ensure all required environment variables are set:

```bash
# Backend .env file should contain:
DB_TYPE=mysql
DB_HOST=your-database-host
DB_PORT=3306
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USER=your-email
MAIL_PASS=your-email-password
TICKETMASTER_API_KEY=your-ticketmaster-api-key
REDIS_URL=redis://localhost:6379
PORT=3000

# Frontend .env file should contain:
VITE_API_BASE_URL=http://localhost:3000
VITE_MAPBOX_ACCESS_TOKEN=your-mapbox-token
```

#### Docker Issues
```bash
# Rebuild containers
docker-compose down
docker-compose up --build

# Remove all containers and volumes
docker-compose down -v
docker system prune -a
```

### Performance Issues

#### Redis Memory Usage
```bash
# Check Redis memory usage
docker exec -it eventhub_redis redis-cli INFO memory

# Clear Redis cache (if needed)
docker exec -it eventhub_redis redis-cli FLUSHALL
```

#### Database Performance
- Ensure MySQL has proper indexing
- Check database connection pool settings
- Monitor slow query logs

### Logs and Debugging

#### View Application Logs
```bash
# Backend logs
docker logs -f eventhub_backend

# Frontend logs
docker logs -f eventhub_frontend

# Redis logs
docker logs -f eventhub_redis
```

#### Debug Mode
```bash
# Start backend in debug mode
cd backend
npm run start:debug

# Check API endpoints
curl http://localhost:3000/health
curl http://localhost:3000/swagger
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the UNLICENSED License.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [NestJS](https://nestjs.com/) - Backend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Mapbox](https://www.mapbox.com/) - Mapping services
- [Ticketmaster](https://developer.ticketmaster.com/) - Event data API
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📞 Support

For support and questions, please open an issue in the repository.

---

<div align="center">
  <strong>EventsHub - Discover amazing events near you! 🎉</strong>
</div>
