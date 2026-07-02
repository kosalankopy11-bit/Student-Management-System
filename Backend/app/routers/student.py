from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.student import StudentCreate, StudentUpdate, StudentOut
from app.services import student_service

router = APIRouter(prefix="/students", tags=["Students"])


# CREATE STUDENT
@router.post("/", response_model=StudentOut)
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    return student_service.create_student(db, student)


# GET ALL
@router.get("/", response_model=list[StudentOut])
def get_students(db: Session = Depends(get_db)):
    return student_service.get_students(db)


# GET BY ID
@router.get("/{student_id}", response_model=StudentOut)
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = student_service.get_student(db, student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


# UPDATE
@router.put("/{student_id}", response_model=StudentOut)
def update_student(student_id: int, data: StudentUpdate, db: Session = Depends(get_db)):
    updated = student_service.update_student(db, student_id, data)
    if not updated:
        raise HTTPException(status_code=404, detail="Student not found")
    return updated


# DELETE
@router.delete("/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    deleted = student_service.delete_student(db, student_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Student not found")
    return {"message": "Student deleted successfully"}