# 🖼️ Image Generation App

A full-stack image generation app using the **ImagePig API** to create AI-generated images based on user prompts. The app saves generated images to **Cloudinary** and stores metadata (prompt + image URL) in **MongoDB**. Authenticated users can view their recent prompts and download generated images.

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login system for users.
- 🧠 **Image Generation via ImagePig API** – Enter a text prompt and receive a unique AI-generated image.
- ☁️ **Cloudinary Integration** – Stores and serves images with fast CDN support.
- 💾 **MongoDB Storage** – Saves prompt history and image URLs per user.
- 🕒 **Recent Activity Panel** – Displays your latest prompts and lets you download recent images.

---

## 📷 Demo

Coming soon... (Add screenshots or a live link if available)

---

## 📦 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Auth**: JSON Web Tokens (JWT)  
- **Image Hosting**: Cloudinary  
- **AI Image API**: ImagePig  

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/image-generation-app.git
cd image-generation-app
