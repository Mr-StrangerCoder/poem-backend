# 📝 Poem Store — MERN Stack Poem Sharing Platform

A full-stack poem sharing platform where users can discover, share, and interact with poems in a modern, engaging UI.

## 🔗 Live Demo

- **Frontend:** https://poem-frontend-two.vercel.app
- **Backend:** https://poem-backend-3vyv.onrender.com

## 📁 GitHub Repositories

- **Frontend:** https://github.com/Mr-StrangerCoder/poem-frontend
- **Backend:** https://github.com/Mr-StrangerCoder/poem-backend

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite) + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas + Mongoose |
| Authentication | JWT (JSON Web Tokens) |
| Deployment | Vercel (Frontend) + Render (Backend) |

## ✨ Features

- 🔐 **User Authentication** — Register, Login with JWT
- 🃏 **Tinder-style Swipe** — Swipe through poems on Home page
- 🎬 **Reels Page** — Scroll through poems in reels format
- 📖 **Poem Detail Page** — Public poem detail with full view
- 🛠️ **Admin Dashboard** — Manage all poems and users
- 📱 **Responsive UI** — Mobile friendly design with Tailwind CSS

## 📂 Project Structure

```
poem-backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── server.js

poem-frontend/
├── src/
│   ├── pages/
│   ├── components/
│   ├── context/
│   └── api/
```

## ⚙️ Local Setup

### Backend
```bash
git clone https://github.com/Mr-StrangerCoder/poem-backend.git
cd poem-backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```

```bash
npm run dev
```

### Frontend
```bash
git clone https://github.com/Mr-StrangerCoder/poem-frontend.git
cd poem-frontend
npm install
npm run dev
```

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| GET | `/api/poems` | Get all poems | ❌ |
| POST | `/api/poems` | Create poem | ✅ |
| GET | `/api/poems/:id` | Get poem by ID | ❌ |
| PUT | `/api/poems/:id` | Update poem | ✅ |
| DELETE | `/api/poems/:id` | Delete poem | ✅ |

## 👨‍💻 Developer

**Aadesh Sonawane**
- 📧 aadeshsonawane307@gmail.com
- 🌐 https://aadeshsonawane.netlify.app
- 💻 https://github.com/Mr-StrangerCoder
