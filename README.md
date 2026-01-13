# StayNest 🏡

StayNest is a property rental web application inspired by platforms like Airbnb, designed to help users list, discover and rent residential properties with ease. The platform focuses on rental homes and apartments for working professionals, providing a clean UI, secure authentication and smooth property management features.

StayNest is built as a full-stack web application using Node.js, Express, MongoDB, and EJS, following industry-level practices for authentication, authorization and data handling.

**Live Demo:** [Click here to view StayNest](https://staynest-ka3d.onrender.com/listings)

## 🚀 Features

### 🔐 Authentication & Authorization
    - User Sign Up & Login using secure authentication
    - Authentication handled using Passport.js
    - Session-based login with protected routes
    - Role-based access (Owner / User)

### 🏠 Property Listings
    - Owners can create, edit and delete property listings
    - Listings include:
        - Property title & description
        - Monthly rent price
        - Security deposit
        - Property images (multiple)
        - Owner contact details
    - Support for different property types:
    
    ⭐ Reviews & Ratings
    - Authenticated users can:
       - Add reviews to listings
       - Rate properties
    - Multiple reviews supported per property
    - Only review owners can delete their reviews

    🧑 Owner Management
    - Property owners can manage their listings
    - Secure access to edit/delete only owned properties

    📦 Database & Data Handling
    - MongoDB Atlas used as the cloud database
    - Mongoose schemas for:
       - Users
       - Listings
       - Reviews
    - Clean data relationships using references

    🎨 User Interface
    - Server-side rendering using EJS templates
    - Responsive layout for better usability
    - Simple, clean and professional UI

### 🛠️ Tech Stack

#### Frontend
    - EJS (Embedded JavaScript Templates)
    - HTML5
    - CSS3
    - Bootstrap (for responsive design)
#### Backend
    - Node.js
    - Express.js
#### Database
    - MongoDB Atlas
    - MongoDB 
#### Authentication & Security
    - Passport.js
    - Express-session
    - Password hashing

### ⚙️ Installation & Setup
    - Prerequisites
       - Node.js (v16+ recommended)
       - MongoDB Atlas account or local MongoDB
       - Git

### Steps to Run Locally
    1. Clone the repository
    git clone https://github.com/Yashrane25/StayNest.git
    cd StayNest

    2. Install dependencies
    npm install

    3. Run the application
    node app.js

    4. Open in browser
    http://localhost:8080/Listings

### 🔒 Security Practices
    - Passwords stored using hashing
    - Protected routes using middleware
    - Users can only modify their own data
    - Session based authentication

### 👨‍💻 Author
Yash Rane 
Computer Science & Engineering Student
Aspiring Software Developer


This project is for educational and learning purposes.
   
