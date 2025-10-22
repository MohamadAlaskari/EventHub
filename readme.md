# EventsHub - Event Discovery Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-blue?logo=react" alt="React Version" />
  <img src="https://img.shields.io/badge/NestJS-11.0.1-red?logo=nestjs" alt="NestJS Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/MySQL-Database-orange?logo=mysql" alt="MySQL Database" />
  <img src="https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel" alt="Vercel Deployment" />
</div>

<p align="center">
  <strong>A modern, full-stack event discovery platform built with React and NestJS</strong>
</p>

<p align="center">
  Discover amazing events happening around you. From concerts and festivals to conferences and local gatherings, EventsHub provides a comprehensive platform for event discovery and management.
</p>

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

### Backend (NestJS + TypeScript)
- **Framework**: NestJS (Node.js)
- **Database**: MySQL with TypeORM
- **Authentication**: JWT with Passport.js
- **Email**: Nodemailer
- **API Documentation**: Swagger/OpenAPI
- **Deployment**: Vercel Serverless

---

## 📁 Project Structure

```
EventsHub/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # Base UI components (Radix UI)
│   │   │   ├── EventCard.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── ...
│   │   ├── pages/          # Page components
│   │   │   ├── Events.tsx
│   │   │   ├── EventDetail.tsx
│   │   │   ├── Favorites.tsx
│   │   │   └── ...
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── contexts/       # React contexts
│   └── package.json
├── backend/                 # NestJS backend API
│   ├── src/
│   │   ├── module/         # Feature modules
│   │   │   ├── auth/       # Authentication module
│   │   │   ├── event/      # Event management module
│   │   │   ├── favorite/   # Favorites system module
│   │   │   ├── user/       # User management module
│   │   │   └── mail/       # Email service module
│   │   ├── common/         # Shared utilities
│   │   ├── config/         # Configuration files
│   │   └── db/            # Database configuration
│   └── package.json
└── readme.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MySQL database
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd EventsHub
```

### 2. Backend Setup

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

# Server Configuration
PORT=3000
```

Start the backend:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`
API Documentation: `http://localhost:3000/swagger`

### 3. Frontend Setup

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

## 🎯 Key Features

### Event Discovery
- **Real-time Search**: Search events by name and description
- **Country Filtering**: Filter events by country code
- **Category Filtering**: Filter by event categories and genres
- **Pagination**: Efficient browsing through large event catalogs
- **Interactive Maps**: Location-based event discovery

### User Management
- **Secure Registration**: Email verification required
- **JWT Authentication**: Secure token-based authentication
- **Profile Management**: User account and preference management
- **Favorites System**: Save and organize favorite events

### Modern UI/UX
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme support
- **Loading States**: Skeleton loaders and smooth transitions
- **Error Handling**: Comprehensive error states and user feedback

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

### Backend Deployment (Vercel)

The backend is configured for Vercel serverless deployment:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd backend
vercel
```

3. Set environment variables in Vercel dashboard

### Frontend Deployment

The frontend can be deployed to any static hosting service:

1. Build the project:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to your hosting service

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