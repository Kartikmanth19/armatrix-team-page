# Armatrix Team Page

This project was built as part of the **Armatrix Software Development Intern Assignment**.

The goal of this project was to design and implement a **Team Page** for Armatrix that includes a backend REST API to manage team members and a frontend interface to display and manage them. The page is designed with a modern responsive UI so it could realistically fit into a company website.

---

## 🚀 Live Demo

Frontend  
https://armatrix-team-page-seven.vercel.app/

Backend API  
https://armatrix-backend-h4iv.onrender.com/

API Documentation  
https://armatrix-backend-h4iv.onrender.com/docs

---

## 🧑‍💻 Tech Stack

### Frontend
- Next.js (React Framework)
- Tailwind CSS
- Framer Motion (animations)
- Axios (API requests)

### Backend
- FastAPI
- Python
- Uvicorn

### Deployment
- Frontend deployed on **Vercel**
- Backend deployed on **Render**

---

## ✨ Features

### Backend
- FastAPI REST API
- CRUD operations for team members
- Automatic API documentation using Swagger
- In-memory data storage for simplicity

### API Endpoints

| Method | Endpoint | Description |
|------|------|------|
GET | `/team` | Fetch all team members |
POST | `/team` | Add a new team member |
PUT | `/team/{id}` | Update a team member |
DELETE | `/team/{id}` | Delete a team member |

### Frontend
- `/team` page displaying all team members
- Responsive design (mobile and desktop)
- Animated team member cards
- Glassmorphism styled UI
- Add team member modal
- Delete team member functionality
- LinkedIn profile links for each member
- Modern startup-style layout

---

## ⚙️ Running the Project Locally
### Backend Setup

Clone the repository

```bash
git clone https://github.com/Kartikmanth19/armatrix-team-page.git
```
```bash
cd armatrix-team-page
```
```bash
cd backend
```
```bash
python -m venv venv
```
```bash
venv\Scripts\activate
```
```bash
pip install -r requirements.txt
```
```bash
uvicorn app.main:app --reload
```

Backend will run at:


http://127.0.0.1:8000


API documentation:


http://127.0.0.1:8000/docs


### Frontend Setup

```bash
cd frontend
```
```bash
npm install
```
```bash
npm run dev
```

Frontend will run at:

http://localhost:3000


Team page:

http://localhost:3000/team


---

## 🎨 Design Decisions

- Used **Next.js App Router** for modern React architecture
- Tailwind CSS used for fast and consistent UI development
- Implemented **animations and glassmorphism design** for a modern startup feel
- FastAPI chosen for its simplicity, speed, and automatic API documentation

---

## 📬 Assignment Submission

This project was developed for the **Armatrix Software Development Intern Hiring Assignment**.

**Developer:** Kartik Rajesh Manthanwar  
GitHub: https://github.com/Kartikmanth19
