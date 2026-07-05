from pydantic import BaseModel
from datetime import datetime


class ProfileBase(BaseModel):
    full_name: str | None = None
    bio: str | None = None
    phone: str | None = None
    avatar_url: str | None = None


class ProfileUpdate(ProfileBase):
    pass


class ProfileOut(ProfileBase):
    id: int
    user_id: int
    updated_at: datetime

    class Config:
        from_attributes = True
