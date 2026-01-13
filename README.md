# StayNest 🏡

StayNest is a property rental web application inspired by platforms like Airbnb, designed to help users list, discover, and rent residential properties with ease. The platform focuses on rental homes and apartments for working professionals, providing a clean UI, secure authentication, and smooth property management features.

StayNest is built as a full-stack web application using Node.js, Express, MongoDB, and EJS, following industry-level practices for authentication, authorization, and data handling.

## 🚀 Features

### 🔐 Authentication & Authorization
    - User Sign Up & Login using secure authentication
    - Authentication handled using Passport.js
    - Session-based login with protected routes
    - Role-based access (Owner / User)

### 🏠 Property Listings
    - Owners can create, edit, and delete property listings
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
