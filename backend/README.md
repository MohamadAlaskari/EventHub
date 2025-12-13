# 🎫 EventsHub API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <strong>A comprehensive event management API built with <a href="http://nodejs.org" target="_blank">Node.js</a> and <a href="https://nestjs.com/" target="_blank">NestJS</a> framework.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green" alt="Node.js Version">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-blue" alt="TypeScript Version">
  <img src="https://img.shields.io/badge/NestJS-11.0+-red" alt="NestJS Version">
  <img src="https://img.shields.io/badge/MySQL-8.0+-orange" alt="MySQL Version">
  <img src="https://img.shields.io/badge/Redis-6.0+-red" alt="Redis Version">
</p>

## 📋 Description

EventsHub API is a robust, production-ready backend service for managing events, user authentication, and user preferences. Built with NestJS, it provides a scalable and maintainable solution for event discovery and management applications.

The API follows RESTful principles and includes comprehensive error handling, validation, and security features. It's designed to handle high-traffic scenarios with efficient database queries and caching strategies.

**Production URL:** https://eventhub.alaskaritech.com

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication**: Secure token-based authentication with access and refresh tokens
- **Token Rotation**: Refresh tokens are rotated on each refresh for enhanced security
- **Email Verification**: Complete email verification system for user registration with time-limited tokens
- **Password Security**: Bcrypt hashing with unique salts for secure password storage
- **Route Protection**: Guard-based route protection for sensitive endpoints
- **Session Management**: Redis-based refresh token storage for immediate revocation
- **Logout Functionality**: Secure logout that invalidates refresh tokens in Redis

### 🎫 Event Management
- **External API Integration**: Integration with Ticketmaster Discovery API for event data
- **Event Discovery**: Browse and search events by location, date, and other criteria
- **Advanced Filtering**: Filter events by country, category, segment, and keywords
- **Event Details**: Comprehensive event information with images, descriptions, and venue details
- **Pagination**: Efficient pagination for large event datasets
- **Data Normalization**: Custom mapping of Ticketmaster API responses to consistent format

### 👤 User Management
- **User Profiles**: Complete user profile management with CRUD operations
- **UUID Primary Keys**: Non-sequential UUIDs to prevent enumeration attacks
- **Country Support**: Support for 85+ countries with ISO alpha-2 codes
- **Email Uniqueness**: Database-level unique constraint on email addresses
- **Password Removal**: Passwords never included in API responses

### ❤️ Favorites System
- **Favorite Management**: Users can save and manage their favorite events
- **Composite Unique Constraint**: Prevents duplicate favorites at database level
- **Cascade Delete**: Automatic cleanup of favorites when user is deleted
- **Event Integration**: Fetches full event details from Ticketmaster API for favorites

### 📧 Email Service
- **Transactional Emails**: Nodemailer integration for sending emails
- **Email Templates**: HTML email templates for welcome, verification, and password reset
- **SMTP Configuration**: Configurable SMTP settings for email delivery
- **Template System**: Reusable email templates with branding

### 🛠️ Technical Features
- **API Documentation**: Comprehensive Swagger/OpenAPI documentation at `/swagger`
- **Database Integration**: MySQL database hosted on Hostinger with TypeORM
- **Redis Caching**: Redis hosted on Vercel for refresh token storage
- **Error Handling**: Global exception filters with secure error responses
- **Input Validation**: Request validation with class-validator decorators
- **Rate Limiting**: Throttler-based rate limiting (10 requests per 60 seconds)
- **Security Headers**: Helmet middleware for HTTP security headers
- **CORS Protection**: Configurable CORS with origin whitelist
- **Deployment Ready**: Configured for Vercel serverless deployment

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [NestJS](https://nestjs.com/) v11.0+ - Progressive Node.js framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) v5.7+ - Type-safe JavaScript
- **Runtime**: [Node.js](https://nodejs.org/) v18+ - JavaScript runtime environment

### Database & ORM
- **Database**: [MySQL](https://www.mysql.com/) v8.0+ - Hosted on Hostinger
- **ORM**: [TypeORM](https://typeorm.io/) v0.3.26 - Object-relational mapping for TypeScript
- **Connection**: Secure remote connection to Hostinger MySQL database
- **Synchronization**: Disabled in production for safety

### Authentication & Security
- **Authentication**: [Passport.js](http://www.passportjs.org/) with JWT and Local strategies
- **Password Hashing**: [bcrypt](https://www.npmjs.com/package/bcrypt) v6.0.0 for secure password storage
- **JWT**: [@nestjs/jwt](https://www.npmjs.com/package/@nestjs/jwt) v11.0.0 for token management
- **Security Headers**: [Helmet](https://helmetjs.github.io/) v8.1.0 for HTTP security headers
- **Rate Limiting**: [@nestjs/throttler](https://www.npmjs.com/package/@nestjs/throttler) v6.4.0

### Caching & Storage
- **Redis**: [redis](https://www.npmjs.com/package/redis) v4.6.0 - Hosted on Vercel
- **Purpose**: Refresh token storage with TTL (7 days)
- **Connection**: Secure connection via REDIS_URL environment variable

### External Services
- **Event API**: [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) - External event data source
- **HTTP Client**: [axios](https://axios-http.com/) v1.12.2 for API requests
- **Email Service**: [Nodemailer](https://nodemailer.com/) v7.0.6 for transactional emails

### Documentation & Validation
- **API Documentation**: [Swagger/OpenAPI](https://swagger.io/) v11.2.0
- **Validation**: [class-validator](https://github.com/typestack/class-validator) v0.14.2
- **Transformation**: [class-transformer](https://github.com/typestack/class-transformer) v0.5.1

### Development & Deployment
- **Linting**: [ESLint](https://eslint.org/) v9.18.0 for code quality
- **Deployment**: [Vercel](https://vercel.com/) for serverless deployment
- **Production URL**: https://eventhub-api.alaskaritech.com

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MySQL** (v8.0 or higher) - [Download here](https://www.mysql.com/downloads/) or use Hostinger
- **Redis** (v6.0 or higher) - [Download here](https://redis.io/download) or use Vercel Redis
- **npm** or **yarn** package manager
- **Ticketmaster API Key** - [Get one here](https://developer.ticketmaster.com/)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd EventHub/backend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the backend root directory:

```env
# Database Configuration (Hostinger)
DB_TYPE=mysql
DB_HOST=your-hostinger-host.com
DB_PORT=3306
DB_USERNAME=your-hostinger-username
DB_PASSWORD=your-hostinger-password
DB_NAME=your-database-name
DB_LOGGING=false

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
REFRESH_JWT_SECRET=your-super-secret-refresh-key-here
JWT_EXPIRES_IN=30m
REFRESH_EXPIRES_IN=2d

# Email Verification Token
EMAIL_VERIFY_SECRET=your-email-verify-secret
EMAIL_VERIFY_EXPIRES_IN=1h

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_NAME=EventHub
SMTP_FROM=noreply@eventshub.com

# Redis Configuration (Vercel)
REDIS_URL=redis://default:password@redis-host:port

# Ticketmaster API
TICKETMASTER_API_KEY=your-ticketmaster-api-key

# Server Configuration
PORT=3000
NODE_ENV=development

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173,https://eventhub.alaskaritech.com

# API Backend URL (for email links)
API_Backend_URL=https://eventhub.alaskaritech.com
```

### 4. Database Setup
```bash
# Create MySQL database on Hostinger
# Or use Hostinger's database management panel
CREATE DATABASE eventshub_db;
```

The database will automatically create tables based on TypeORM entities when the application starts (if synchronize is enabled in development).

### 5. Start the Application
```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

## 📚 API Documentation

Once the application is running, you can access the comprehensive Swagger API documentation:

- **Local Development**: `http://localhost:3000/swagger`
- **Production**: `https://eventhub-api.alaskaritech.com/swagger`
- **JSON Specification**: `https://eventhub-api.alaskaritech.com/swagger/json`

The Swagger documentation includes:
- Interactive API explorer with "Try it out" functionality
- Request/response examples
- Authentication requirements with Bearer token support
- Error code definitions
- Data model schemas
- Query parameter documentation

## 🔗 API Endpoints

### 🔐 Authentication (`/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/signup` | Register a new user. Sends verification email. | ❌ |
| `POST` | `/auth/login` | Login with email and password. Returns access and refresh tokens. | ❌ |
| `POST` | `/auth/refresh` | Refresh access token using refresh token. Rotates tokens. | ❌ |
| `POST` | `/auth/logout` | Logout user. Invalidates refresh token in Redis. | ✅ |
| `GET` | `/auth/verify-email` | Verify email address using token from email link. | ❌ |
| `GET` | `/auth/profile` | Get current user profile from JWT token. | ✅ |

**Authentication Flow:**
1. User signs up → Receives verification email
2. User verifies email → Can now login
3. User logs in → Receives access token (30min) and refresh token (2 days)
4. Access token expires → Use refresh token to get new tokens
5. User logs out → Refresh token deleted from Redis

### 🎫 Events (`/event`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/event/events` | Get events with filters (date, country, segment, keyword, pagination) | ❌ |
| `GET` | `/event/:id` | Get event by ID from Ticketmaster | ❌ |

**Query Parameters for `/event/events`:**
- `startDate` (optional): ISO 8601 date format (e.g., "2025-01-20")
- `countryCode` (optional): ISO alpha-2 country code (default: "DE")
- `segmentName` (optional): Event segment (e.g., "Music", "Sport")
- `keyword` (optional): Search keyword (e.g., "Concert", "Theater")
- `size` (optional): Number of events per page (default: 10)
- `page` (optional): Page number (default: 0)

**Event Data Source:**
Events are fetched from Ticketmaster Discovery API and normalized to a consistent format.

### 👤 Users (`/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/user` | Create user (alternative to signup) | ✅ |
| `GET` | `/user/:id` | Get user by ID | ✅ |
| `PATCH` | `/user/profile` | Update current user profile | ✅ |
| `PATCH` | `/user/:id` | Update user by ID | ✅ |
| `DELETE` | `/user/:id` | Delete user | ✅ |

**Note:** All user endpoints require JWT authentication. Passwords are never returned in responses.

### ❤️ Favorites (`/favorite`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/favorite/:eventId` | Add event to favorites | ✅ |
| `DELETE` | `/favorite/:eventId` | Remove event from favorites | ✅ |
| `GET` | `/favorite/:eventId` | Check if event is favorite | ✅ |
| `GET` | `/favorite` | Get all user favorites with event details | ✅ |

**Note:** All favorite endpoints require JWT authentication. Favorites are stored in database, but event details are fetched from Ticketmaster API when retrieving favorites.

## 🔒 Security Features

### Implemented Security Measures

1. **Helmet Security Headers**
   - Content-Security-Policy
   - X-Content-Type-Options
   - X-Frame-Options
   - Strict-Transport-Security
   - And more...

2. **CORS Protection**
   - Origin whitelist configuration
   - Prevents unauthorized cross-origin requests

3. **Rate Limiting**
   - 10 requests per 60 seconds per IP
   - Global protection on all endpoints
   - Prevents brute force and DDoS attacks

4. **Input Validation**
   - Global ValidationPipe
   - All DTOs validated automatically
   - Prevents SQL injection and XSS

5. **Password Security**
   - Bcrypt hashing with unique salts
   - Passwords never returned in responses
   - Secure password comparison

6. **JWT Security**
   - Token expiration (30min access, 2 days refresh)
   - Token rotation on refresh
   - Separate secrets for different token types

7. **SQL Injection Prevention**
   - TypeORM parameterized queries
   - No raw SQL strings
   - Automatic escaping

8. **Error Handling Security**
   - Generic error messages
   - No sensitive information exposure
   - No stack traces in production

9. **UUID Primary Keys**
   - Prevents enumeration attacks
   - Non-sequential IDs

10. **Email Verification**
    - Time-limited verification tokens
    - Prevents fake accounts

11. **Refresh Token Security**
    - Stored in Redis with TTL
    - Server-side validation
    - Immediate revocation on logout

## 🗄️ Database Schema

### User Table
```sql
CREATE TABLE user (
  id VARCHAR(36) PRIMARY KEY,              -- UUID
  name VARCHAR(40) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,          -- Bcrypt hash
  isEmailVerified BOOLEAN DEFAULT FALSE,
  country ENUM(...) DEFAULT 'DE',
  INDEX (email)
);
```

### Favorite Table
```sql
CREATE TABLE favorite (
  id VARCHAR(36) PRIMARY KEY,              -- UUID
  eventId VARCHAR(255) NOT NULL,           -- Ticketmaster Event ID
  userId VARCHAR(36) NOT NULL,
  FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE,
  UNIQUE KEY (userId, eventId)             -- Prevents duplicates
);
```

## 📧 Email Templates

The application includes three email templates:

1. **Welcome Email** - Sent after successful login
2. **Verification Email** - Sent after signup with verification link
3. **Password Reset Email** - Template ready for password reset functionality

All templates include:
- HTML formatting with branding
- Responsive design
- Clear call-to-action buttons
- Alaskari Tech branding

## 🔄 Refresh Token Flow

1. **Login**: User receives access token (30min) and refresh token (2 days)
2. **Storage**: Refresh token stored in Redis with 7-day TTL
3. **Refresh**: When access token expires, use refresh token to get new tokens
4. **Rotation**: New tokens issued, old refresh token replaced in Redis
5. **Logout**: Refresh token deleted from Redis, immediate invalidation
6. **Validation**: Server compares refresh token with stored value in Redis

## 🧪 Testing

The project includes comprehensive testing setup with Jest:

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov

# Run tests in watch mode
npm run test:watch
```

### Test Structure
- **Unit Tests**: Test individual components and services
- **E2E Tests**: Test complete API endpoints and workflows
- **Coverage Reports**: Detailed test coverage analysis

## 📁 Project Structure

```
src/
├── common/                    # Shared utilities and decorators
│   ├── decorators/           # Custom API decorators (@ApiErrorResponses)
│   ├── filters/              # Global exception filters
│   └── utils/                # Utility functions, types, and constants
│       ├── app-config.service.ts
│       ├── constants/
│       │   └── event.constant.ts
│       └── types/
│           └── types.ts
├── config/                   # Configuration files
│   └── swagger.config.ts     # Swagger/OpenAPI configuration
├── db/                       # Database configuration
│   └── config/               # Database connection settings
│       └── db.config.ts
├── module/                   # Feature modules (Domain-driven design)
│   ├── auth/                 # Authentication & authorization
│   │   ├── dto/              # Data Transfer Objects
│   │   │   ├── signup.dto.ts
│   │   │   ├── signin.dto.ts
│   │   │   └── refresh.dto.ts
│   │   ├── guards/           # Route guards
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── local-auth.guard.ts
│   │   ├── strategies/       # Passport strategies
│   │   │   ├── jwt.strategy.ts
│   │   │   └── local.strategy.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── event/                # Event management
│   │   ├── dto/              # Event DTOs
│   │   │   └── get-events.dto.ts
│   │   ├── event.controller.ts
│   │   ├── event.service.ts
│   │   └── event.module.ts
│   ├── favorite/             # Favorites system
│   │   ├── dto/              # Favorite DTOs
│   │   │   ├── create-favorite.dto.ts
│   │   │   └── update-favorite.dto.ts
│   │   ├── entities/         # Database entities
│   │   │   └── favorite.entity.ts
│   │   ├── favorite.controller.ts
│   │   ├── favorite.service.ts
│   │   └── favorite.module.ts
│   ├── mail/                 # Email service
│   │   ├── templates/         # Email templates
│   │   │   ├── welcome.template.ts
│   │   │   ├── verification.template.ts
│   │   │   └── updatePasswordEmail.template.ts
│   │   ├── types/
│   │   │   └── mailOption.type.ts
│   │   ├── mail.service.ts
│   │   └── mail.module.ts
│   ├── redis/                # Redis caching
│   │   ├── redis.service.ts
│   │   └── redis.module.ts
│   └── user/                 # User management
│       ├── dto/              # User DTOs
│       │   ├── create-user.dto.ts
│       │   └── update-user.dto.ts
│       ├── entities/         # User entities
│       │   └── user.entity.ts
│       ├── enum/             # Enumerations
│       │   └── CountryCode.enum.ts
│       ├── user.controller.ts
│       ├── user.service.ts
│       └── user.module.ts
├── app.controller.ts         # Root controller
├── app.module.ts            # Root module
├── app.service.ts           # Root service
└── main.ts                  # Application entry point
```

## 🚀 Deployment

This project is configured for deployment on Vercel with serverless functions. The `vercel.json` file contains the necessary configuration for serverless deployment.

### Production Deployment

**Live URL:** https://eventhub.alaskaritech-api.com

**Swagger Documentation:** https://eventhub.alaskaritech-api.com/swagger

### Deploy to Vercel

#### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Set environment variables
vercel env add DB_HOST
vercel env add DB_USERNAME
vercel env add DB_PASSWORD
vercel env add JWT_SECRET
vercel env add REDIS_URL
vercel env add TICKETMASTER_API_KEY
# ... add all required environment variables
```

#### Option 2: Using Vercel Dashboard
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Add environment variables in the dashboard
4. Deploy automatically on push to main branch

### Environment Variables for Production

All environment variables must be set in Vercel dashboard:

```env
# Database (Hostinger)
DB_TYPE=mysql
DB_HOST=your-hostinger-host
DB_PORT=3306
DB_USERNAME=your-hostinger-username
DB_PASSWORD=your-hostinger-password
DB_NAME=your-database-name
DB_LOGGING=false

# JWT
JWT_SECRET=your-production-jwt-secret
REFRESH_JWT_SECRET=your-production-refresh-secret
JWT_EXPIRES_IN=30m
REFRESH_EXPIRES_IN=2d

# Email Verification
EMAIL_VERIFY_SECRET=your-email-verify-secret
EMAIL_VERIFY_EXPIRES_IN=1h

# Email (SMTP)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-email-password
SMTP_FROM_NAME=EventHub
SMTP_FROM=noreply@eventshub.com

# Redis (Vercel)
REDIS_URL=redis://default:password@redis-host:port

# Ticketmaster API
TICKETMASTER_API_KEY=your-ticketmaster-api-key

# CORS
ALLOWED_ORIGINS=https://eventhub.alaskaritech.com

# API Backend URL
API_Backend_URL=https://eventhub.alaskaritech.com

# Server
PORT=3000
NODE_ENV=production
```


## 🔍 Key Implementation Details

### Authentication Flow
1. **Signup**: User registers → Email verification sent → User must verify before login
2. **Login**: Email/password validated → Access token (30min) + Refresh token (2 days) issued
3. **Token Refresh**: Refresh token validated in Redis → New tokens issued → Old token replaced
4. **Logout**: Refresh token deleted from Redis → Immediate invalidation

### Event Data Flow
1. **Request**: Client requests events with filters
2. **API Call**: Backend calls Ticketmaster Discovery API
3. **Normalization**: Event data mapped to consistent format
4. **Response**: Normalized events returned to client

### Favorite System Flow
1. **Add Favorite**: Event ID stored in database with user ID
2. **Get Favorites**: Event IDs retrieved from database → Ticketmaster API called with IDs → Full event details returned
3. **Remove Favorite**: Entry deleted from database

### Error Handling
- All errors caught by GlobalExceptionFilter
- Generic error messages (no sensitive info)
- Consistent error format with status code, message, timestamp, and path
- Database errors handled securely

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and ensure tests pass
4. **Commit your changes**: `git commit -m 'Add some amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting
- Follow security best practices

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [TypeORM](https://typeorm.io/) - Object-relational mapping
- [Passport.js](http://www.passportjs.org/) - Authentication middleware
- [Swagger](https://swagger.io/) - API documentation
- [Ticketmaster](https://developer.ticketmaster.com/) - Event data API
- [Vercel](https://vercel.com/) - Deployment platform
- [Hostinger](https://www.hostinger.com/) - Database hosting

---

**EventsHub API** - Built using NestJS

**Production URL:** https://eventhub-api.alaskaritech.com  
**API Documentation:** https://eventhub-api.alaskaritech.com/swagger
