# 🧠 ChiefPete Web Application (MERN + Vite + Tailwind + TypeScript)

A full-stack web application built using the **MERN stack** — featuring a **Vite + React + Tailwind (TypeScript)** frontend and an **Express + MongoDB (TypeScript)** backend.

---

## ⚙️ Tech Stack
**Frontend**
- React + Vite + TypeScript
- Tailwind CSS
- Axios / React Router DOM

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- TypeScript
- Nodemon + ts-node for dev

---
<br>

# 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd Web-Application
```

### 2️⃣ Setup the Frontend
```bash
cd frontend
npm install
```

### Initialize Tailwind (if not yet initialized)
```bash
npx tailwindcss init -p
```

### Run the frontend
npm run dev

3️⃣ Setup the Backend
```bash
cd ../backend
npm install
```

### Create a .env file inside backend/ with the following content:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Run the backend
```bash
npm run dev
```

<br>

---

## 🧠 Scripts

Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
```
Backend
```bash
npm run dev       # Run using nodemon + ts-node
npm run build     # (optional) Compile TypeScript to JS
```
