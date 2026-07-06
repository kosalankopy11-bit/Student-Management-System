from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine


from app.routers.auth import router as auth_router
from app.routers.student import router as student_router
from app.routers.course import router as course_router
from app.routers.profile_page import router as profile_router
# from app.routers.dashboard_router import router as dashboard_router

# Create FastAPI App
app = FastAPI(
    title="Student Management System API",
    description="Backend API for Student Management System",
    version="1.0.0"
)

# Create Database Tables
Base.metadata.create_all(bind=engine)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # React (Vite)
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home Route
@app.get("/")
def root():
    return {
        "message": "Welcome to Student Management System API 🚀",
        "status": "Running"
    }

# Health Check Route
@app.get("/health")
def health_check():
    return {
        "status": "Healthy",
        "database": "Connected"
    }

# Database Test Route
@app.get("/db-test")
def database_test():
    try:
        with engine.connect():
            return {
                "message": "Database Connected Successfully ✅"
            }
    except Exception as e:
        return {
            "message": "Database Connection Failed ❌",
            "error": str(e)
        }


app.include_router(auth, prefix="/api")
app.include_router(student_router, prefix="/api")
app.include_router(course_router, prefix="/api")
app.include_router(profile_router, prefix="/api")
app.include_router(dashboard_router, prefix="/api")