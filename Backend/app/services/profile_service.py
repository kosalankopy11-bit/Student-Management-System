from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.models.profile import Profile
from app.schemas.profile import ProfileUpdate


def get_profile_by_user(db: Session, user_id: int) -> Profile:
    profile = db.query(Profile).filter(Profile.user_id == user_id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile


def update_profile(db: Session, user_id: int, data: ProfileUpdate) -> Profile:
    profile = get_profile_by_user(db, user_id)
    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(profile, key, value)
    db.commit()
    db.refresh(profile)
    return profile
