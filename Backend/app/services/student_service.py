from sqlalchemy.orm import Session
from app.models.student import Student
from app.schemas.student import StudentCreate, StudentUpdate


# CREATE
def create_student(db: Session, student: StudentCreate):
    db_student = Student(**student.model_dump())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student


# GET ALL
def get_students(db: Session):
    return db.query(Student).all()


# GET BY ID
def get_student(db: Session, student_id: int):
    return db.query(Student).filter(Student.id == student_id).first()


# UPDATE
def update_student(db: Session, student_id: int, updated_data: StudentUpdate):
    student = db.query(Student).filter(Student.id == student_id).first()

    if not student:
        return None

    for key, value in updated_data.model_dump(exclude_unset=True).items():
        setattr(student, key, value)

    db.commit()
    db.refresh(student)
    return student


# DELETE
def delete_student(db: Session, student_id: int):
    student = db.query(Student).filter(Student.id == student_id).first()

    if not student:
        return None

    db.delete(student)
    db.commit()
    return student