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
  <img src="https://img.shields.io/badge/NestJS-10.0+-red" alt="NestJS Version">
  <img src="https://img.shields.io/badge/MySQL-8.0+-orange" alt="MySQL Version">
</p>

## 📋 Description

EventsHub API is a robust, production-ready backend service for managing events, user authentication, and user preferences. Built with NestJS, it provides a scalable and maintainable solution for event discovery and management applications.

The API follows RESTful principles and includes comprehensive error handling, validation, and security features. It's designed to handle high-traffic scenarios with efficient database queries and caching strategies.

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication**: Secure token-based authentication with refresh tokens
- **Email Verification**: Complete email verification system for user registration
- **Password Security**: Bcrypt hashing for secure password storage
- **Route Protection**: Guard-based route protection for sensitive endpoints

### 🎫 Event Management
- **Event Discovery**: Browse and search events by location, date, and other criteria
- **Advanced Filtering**: Filter events by country, category, and custom parameters
- **Event Details**: Comprehensive event information with images and descriptions
- **Pagination**: Efficient pagination for large event datasets

### 👤 User Experience
- **User Profiles**: Complete user profile management with CRUD operations
- **Favorites System**: Users can save and manage their favorite events
- **Personalization**: User-specific data and preferences
- **Account Management**: Update profile, change password, and account settings

### 🛠️ Technical Features
- **API Documentation**: Comprehensive Swagger/OpenAPI documentation
- **Database Integration**: MySQL database with TypeORM for robust data management
- **Error Handling**: Global exception filters with detailed error responses
- **Validation**: Request validation with class-validator decorators
- **Caching**: Redis integration for improved performance
- **Email Service**: Nodemailer integration for transactional emails
- **Deployment Ready**: Configured for Vercel and other cloud platforms

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Runtime**: [Node.js](https://nodejs.org/) - JavaScript runtime environment

### Database & ORM
- **Database**: [MySQL](https://www.mysql.com/) - Relational database management system
- **ORM**: [TypeORM](https://typeorm.io/) - Object-relational mapping for TypeScript
- **Migrations**: TypeORM migrations for database schema management

### Authentication & Security
- **Authentication**: [Passport.js](http://www.passportjs.org/) with JWT strategy
- **Password Hashing**: [bcrypt](https://www.npmjs.com/package/bcrypt) for secure password storage
- **JWT**: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for token management

### Additional Services
- **Email**: [Nodemailer](https://nodemailer.com/) for transactional emails
- **Caching**: [Redis](https://redis.io/) for session storage and caching
- **Documentation**: [Swagger/OpenAPI](https://swagger.io/) for API documentation
- **Validation**: [class-validator](https://github.com/typestack/class-validator) for request validation

### Development & Deployment
- **Testing**: [Jest](https://jestjs.io/) for unit and e2e testing
- **Linting**: [ESLint](https://eslint.org/) for code quality
- **Deployment**: [Vercel](https://vercel.com/) for serverless deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MySQL** (v8.0 or higher) - [Download here](https://www.mysql.com/downloads/)
- **Redis** (v6.0 or higher) - [Download here](https://redis.io/download)
- **npm** or **yarn** package manager

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
# Database Configuration
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=eventshub_db
DB_LOGGING=true

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Email Configuration (SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
MAIL_FROM=noreply@eventshub.com

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password

# Server Configuration
PORT=3000
NODE_ENV=development
```

### 4. Database Setup
```bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE eventshub_db;
```

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

- **Local Development**: `http://localhost:3000/api`
- **Production**: `https://your-domain.com/api`

The Swagger documentation includes:
- Interactive API explorer
- Request/response examples
- Authentication requirements
- Error code definitions
- Data model schemas

## 🔗 API Endpoints

### 🔐 Authentication (`/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/signup` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login with credentials | ❌ |
| `POST` | `/auth/refresh` | Refresh access token | ❌ |
| `POST` | `/auth/logout` | Logout user | ✅ |
| `GET` | `/auth/verify-email` | Verify email address | ❌ |
| `GET` | `/auth/profile` | Get user profile | ✅ |

### 🎫 Events (`/event`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/event/events` | Get events with filters (date, country, pagination) | ❌ |
| `GET` | `/event/:id` | Get event by ID | ❌ |

### 👤 Users (`/user`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/user` | Create user | ❌ |
| `GET` | `/user/:id` | Get user by ID | ✅ |
| `PATCH` | `/user/:id` | Update user | ✅ |
| `DELETE` | `/user/:id` | Delete user | ✅ |

### ❤️ Favorites (`/favorite`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/favorite/:eventId` | Add event to favorites | ✅ |
| `DELETE` | `/favorite/:eventId` | Remove event from favorites | ✅ |
| `GET` | `/favorite/:eventId` | Check if event is favorite | ✅ |
| `GET` | `/favorite` | Get all user favorites | ✅ |

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
├── config/                   # Configuration files
│   └── swagger.config.ts     # Swagger/OpenAPI configuration
├── db/                       # Database configuration
│   └── config/               # Database connection settings
├── module/                   # Feature modules (Domain-driven design)
│   ├── auth/                 # Authentication & authorization
│   │   ├── dto/              # Data Transfer Objects
│   │   ├── guards/           # Route guards
│   │   ├── strategies/       # Passport strategies
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── event/                # Event management
│   │   ├── dto/              # Event DTOs
│   │   ├── event.controller.ts
│   │   ├── event.service.ts
│   │   └── event.module.ts
│   ├── favorite/             # Favorites system
│   │   ├── dto/              # Favorite DTOs
│   │   ├── entities/         # Database entities
│   │   ├── favorite.controller.ts
│   │   ├── favorite.service.ts
│   │   └── favorite.module.ts
│   ├── mail/                 # Email service
│   │   ├── mail.service.ts
│   │   └── mail.module.ts
│   ├── redis/                # Redis caching
│   │   ├── redis.service.ts
│   │   └── redis.module.ts
│   └── user/                 # User management
│       ├── dto/              # User DTOs
│       ├── entities/         # User entities
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
```env
# Database
DB_HOST=your-production-db-host
DB_USERNAME=your-production-username
DB_PASSWORD=your-production-password
DB_NAME=your-production-database

# JWT
JWT_SECRET=your-production-jwt-secret
JWT_REFRESH_SECRET=your-production-refresh-secret

# Email
MAIL_HOST=your-smtp-host
MAIL_USER=your-email
MAIL_PASS=your-email-password

# Redis
REDIS_HOST=your-redis-host
REDIS_PASSWORD=your-redis-password
```

## 🛠️ Development

### Code Style

This project uses ESLint and Prettier for code formatting and linting:

```bash
# Format code with Prettier
npm run format

# Lint code with ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Database Migrations

The project uses TypeORM with auto-synchronization enabled for development. For production, consider using proper migrations:

```bash
# Generate migration
npm run migration:generate -- -n MigrationName

# Run migrations
npm run migration:run

# Revert migration
npm run migration:revert
```

### Development Scripts

```bash
# Start in development mode with hot reload
npm run start:dev

# Start in debug mode
npm run start:debug

# Build the application
npm run build

# Start production build
npm run start:prod
```

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

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [TypeORM](https://typeorm.io/) - Object-relational mapping
- [Passport.js](http://www.passportjs.org/) - Authentication middleware
- [Swagger](https://swagger.io/) - API documentation
- [Jest](https://jestjs.io/) - Testing framework

---

**EventsHub API** - Built with ❤️ using NestJS
