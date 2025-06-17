Absolutely, Bolade! Here's a fresh `README.md` tailored for your **Vite + Express + Docker + NGINX** project, now using `default.conf` to serve everything on port 80.

---

```markdown
# Group 6 Tech Crush Capstone Project

This project is a **full-stack web application** built with:

- **Frontend:** Vite + React
- **Backend:** Express.js (Node.js)
- **Containerization:** Docker & Docker Compose
- **Web Server / Reverse Proxy:** NGINX
- **Deployment Target:** Runs on port `80` via NGINX

---

## 🔍 Project Overview

This app allows users to search for group members by name. If the name is found in the backend data, it returns:

> ✅ "Member is in Group 6"

Otherwise, it returns:

> ❌ "Member is not in Group 6"

---

## 📁 Project Structure
```

Capstone-Project/
├── Backend/ # Express.js app with route handler
│ ├── app.js
│ ├── Dockerfile
│ └── routes/
│ └── groupmembers.js
│
├── Frontend/ # Vite + React frontend
│ ├── Dockerfile
│ ├── vite.config.js
│ └── dist/ # Generated after build
│
├── default.conf # NGINX config for reverse proxy
├── docker-compose.yml # Orchestrates frontend, backend, nginx
└── README.md # You're here

````

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
````

### 2. Build Frontend (Vite)

```bash
cd Frontend
npm install
npm run build
```

This creates a production-ready `dist/` folder.

### 3. Start All Services with Docker Compose

From the root directory:

```bash
docker-compose up --build
```

---

## 🌐 Access the App

| Component   | URL                                 |
| ----------- | ----------------------------------- |
| Frontend    | `http://localhost/`                 |
| Backend API | `http://localhost/api/groupmembers` |

---

## 🐳 Docker Compose Services

- `frontend`: Builds and bundles the Vite app
- `backend`: Runs Express server on port 5000
- `nginx`: Serves frontend and proxies `/api` requests to backend

---

## 📝 Example API Response

`GET http://localhost/api/groupmembers`

```json
{
  "groupMembers": ["Bolade", "Tolu", "Muna", "Chika"]
}
```

---

## 📦 Technologies Used

- React + Vite
- Express.js
- Docker & Docker Compose
- NGINX (as reverse proxy)
- Node.js

---

## ✍️ Author

**Bolade Adeyemi**
Capstone Project - Group 6 (Tech Crush)
Class of 2025

---

## ✅ TODO (Optional Enhancements)

- Add form validation
- Deploy on Azure/AWS with HTTPS
- Add member pictures and bios
- Integrate MongoDB for persistent data

```

---

Let me know if:
- You want the README split into dev vs prod instructions
- You're adding CI/CD (I’ll update that too)
- You want markdown badges or GitHub Actions workflow included

Happy to help polish it up for public sharing or portfolio use!
```
