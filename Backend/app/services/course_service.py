from sqlalchemy.orm import Session
from app.models.course_model import Course
from app.schemas.course_schema import CourseCreate

def create_course(db: Session, course: CourseCreate):
    new_course = Course(**course.dict())
    db.add(new_course)
    db.commit()
    db.refresh(new_course)
    return new_course


def get_courses(db: Session):
    return db.query(Course).all()


def get_course(db: Session, course_id: int):
    return db.query(Course).filter(Course.id == course_id).first()


def update_course(db: Session, course_id: int, course_data: CourseCreate):
    course = db.query(Course).filter(Course.id == course_id).first()
    if course:
        course.title = course_data.title
        course.description = course_data.description
        course.price = course_data.price
        db.commit()
        db.refresh(course)
    return course


def delete_course(db: Session, course_id: int):
    course = db.query(Course).filter(Course.id == course_id).first()
    if course:
        db.delete(course)
        db.commit()
    return course
