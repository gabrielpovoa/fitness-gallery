# 🏋️‍♂️ Fitness Gallery

**Fitness Gallery** is a Node.js and Express-based application designed to manage and showcase fitness galleries. It allows users to create, view, and manage galleries, providing a platform to share fitness-related content.

---

## 📚 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Configuration](#database-configuration)
- [Security Considerations](#security-considerations)

---

## ✨ Features

- Create and manage fitness galleries.
- RESTful API architecture.
- Secure environment variable management using `dotenv`.
- Middleware integration for enhanced security and functionality.
- Static file serving for frontend assets.

---

## 🛠️ Technologies Used

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)

- **ORM & Database:**
  - [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
  - [MySQL](https://www.mysql.com/) - Relational database management system.

- **Middleware & Utilities:**
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [helmet](https://www.npmjs.com/package/helmet)
  - [cors](https://www.npmjs.com/package/cors)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MySQL](https://www.mysql.com/) database setup.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gabrielpovoa/fitness-gallery.git
   cd fitness-gallery
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file and add:

   ```env
   PORT=3000
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
   ```

4. Initialize Prisma:

   ```bash
   npx prisma init
   ```

5. Define your data model in `prisma/schema.prisma`:

   ```prisma
   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
   }

   generator client {
     provider = "prisma-client-js"
   }

   model Gallery {
     id    Int    @id @default(autoincrement())
     title String
   }
   ```

6. Run migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

7. Start the application:

   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints

### Gallery Routes

- **POST /galleries** - Create new gallery

- **GET /galleries** - List all galleries
- **GET /gallery/:id** - Retrieve a specific gallery

- **POST /upload/** - Upload a photo into a gallery

---

## 🗄️ Database Configuration

Prisma schema in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Gallery {
  id    Int    @id @default(autoincrement())
  title String
}
```

---

## 🔐 Security Considerations

- Environment variables for sensitive data
- `helmet` to set secure headers
- `cors` for cross-origin resource control
- Validation and error handling best practices

---
