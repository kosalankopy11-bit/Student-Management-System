from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.profile import ProfileOut, ProfileUpdate
from app.services import profile_service
from app.dependencies import get_current_user
from app.models.user import User

router = APIRouter(prefix="/profile", tags=["Profile"])


@router.get("/", response_model=ProfileOut)
def get_my_profile(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return profile_service.get_profile_by_user(db, current_user.id)


@router.put("/", response_model=ProfileOut)
def update_my_profile(
    data: ProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    return profile_service.update_profile(db, current_user.id, data)
