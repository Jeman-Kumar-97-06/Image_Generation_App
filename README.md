# Image Generator App

This app is a full-stack AI image generation web app that allows users to generate stunning images using text prompts. Users can sign up or log in securely, generate AI images via the ImagePig API, and view their recently generated content. All images are stored in Cloudinary and associated with the user in MongoDB.

---

## 🚀 Features

- ✨ Generate AI images from text prompts using the ImagePig API
- 🔐 JWT-based authentication for secure user login/signup
- 🖼️ Generated images displayed in a modal immediately after creation
- 📂 All images stored in Cloudinary
- 🧠 MongoDB stores user data, prompts, and Cloudinary image URLs
- 🏠 Homepage shows recent prompts and generated images per user

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS (or your chosen CSS framework)
- JWT for authentication
- Modal for image display

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Cloudinary (for image storage)
- ImagePig API (for image generation)

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/imagepig-ai-app.git
cd imagepig-ai-app

## Required .env Variables : 
