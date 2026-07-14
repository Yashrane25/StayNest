# StayNest - Full-Stack Property Rental Platform

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-18-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Passport.js](https://img.shields.io/badge/Passport.js-Auth-34E27A?style=flat-square&logo=passport)](https://www.passportjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)

**A full-stack rental housing platform for discovering and managing long term residential accommodations.**

Secure authentication · Owner-managed listings · Reviews and ratings · Clean, responsive UI

**🔗 Live Demo:** [StayNest](https://staynest-ka3d.onrender.com/listings)

</div>

---

StayNest is a full-stack rental housing platform that enables working professionals and students to discover, explore and rent apartments and accommodations through a secure and intuitive web application.

This project was built to demonstrate solid full-stack engineering practices including session-based authentication with Passport.js, role-based authorization, Mongoose data modeling with clean referencing between users, listings and reviews and secure ownership-scoped CRUD operations.

---

## Features

### User

- Register and log in with secure, session-based authentication
- Browse and search property listings
- View listing details, images and owner contact info
- Add reviews and star ratings to listings
- Delete their own reviews
- Reset forgotten password via email

### Property Owner

- Register and manage multiple property listings
- Create, edit, and delete listings with:
  - Title and description
  - Monthly rent price
  - Security deposit
  - Multiple property images
  - Contact details
- Support for different property types (apartment, house, PG, etc.)
- Edit/delete access restricted to owned listings only

### Authentication & Authorization

- Passport.js local strategy for login/signup
- Protected routes via custom middleware
- Role-based access control (Owner / User)
- Forgot password flow with email-based reset

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| EJS | Server-side rendered templates |
| HTML5 / CSS3 | Markup and styling |
| Bootstrap | Responsive UI components |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST-style server and routing |
| Passport.js | Authentication (local strategy) |
| express-session | Session-based login state |
| bcrypt | Password hashing |
| Mongoose | MongoDB ODM and schema modeling |
| method-override | Support for PUT/DELETE in forms |
| connect-flash | Flash messages for user feedback |

### Database & Services
| Service | Purpose |
|---|---|
| MongoDB Atlas | Primary cloud database |
| Cloudinary | Image storage for listing photos |
| Nodemailer | Email-based password reset |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v16 or higher - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **Docker Desktop** (optional, if running via Docker)

You will also need a free account on:
- [MongoDB Atlas](https://www.mongodb.com/atlas) - or a local MongoDB instance
- [Cloudinary](https://cloudinary.com/) - for listing image uploads

---

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
# Server
PORT=8080
NODE_ENV=development

# MongoDB Atlas
# Get this from Atlas → Connect → Drivers → Node.js
ATLASDB_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/staynest?retryWrites=true&w=majority

# Session
SECRET=your_long_random_session_secret_here

# Cloudinary — get from cloudinary.com dashboard
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Email (for password reset)
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

---

## Running Locally

### Step 1 - Clone the repository

```bash
git clone https://github.com/Yashrane25/StayNest.git
cd StayNest
```

### Step 2 - Install dependencies

```bash
npm install
```

### Step 3 - Set up MongoDB Atlas

Create a free MongoDB Atlas cluster, configure a database user and network access, then copy your connection string into `ATLASDB_URL` in `.env`.

### Step 4 - Set up Cloudinary

Create a free Cloudinary account and copy your cloud name, API key, and API secret into `.env`.

### Step 5 - Start the server

```bash
node app.js
```

For auto-restart during development:

```bash
npx nodemon app.js
```

### Step 6 - Open in browser

```
http://localhost:8080/listings
```

---

## Security Practices

- Passwords stored using bcrypt hashing (never in plain text)
- Protected routes secured with custom auth middleware
- Users can only modify or delete their own listings/reviews
- Session-based authentication via Passport.js
- Role-based authorization for owner-only actions

---

## Project Structure

```
StayNest/
├── controllers/     # Route logic and business logic
├── models/          # Mongoose schemas (User, Listing, Review)
├── routes/          # Express route definitions
├── views/           # EJS templates
├── public/          # Static assets (CSS, JS, images)
├── middleware.js    # Custom middleware (auth checks, validation)
├── app.js           # Application entry point
└── .env             # Environment variables (not committed)
```

---

## Contact

**Yash Rane**
- GitHub: [yashrane25](https://github.com/Yashrane25)
- LinkedIn: [yashrane25](https://www.linkedin.com/in/yashrane25/)

---

<div align="center">

⭐ Star this repository if you found it helpful

</div>
