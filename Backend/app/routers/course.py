from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.course_schema import CourseCreate, CourseResponse
from app.services import course_service

router = APIRouter(prefix="/courses", tags=["Courses"])


@router.post("/", response_model=CourseResponse)
def create(course: CourseCreate, db: Session = Depends(get_db)):
    return course_service.create_course(db, course)


@router.get("/")
def get_all(db: Session = Depends(get_db)):
    return course_service.get_courses(db)


@router.get("/{course_id}")
def get_one(course_id: int, db: Session = Depends(get_db)):
    return course_service.get_course(db, course_id)


@router.put("/{course_id}")
def update(course_id: int, course: CourseCreate, db: Session = Depends(get_db)):
    return course_service.update_course(db, course_id, course)


@router.delete("/{course_id}")
def delete(course_id: int, db: Session = Depends(get_db)):
    return course_service.delete_course(db, course_id)