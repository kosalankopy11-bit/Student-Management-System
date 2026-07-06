from pydantic import BaseModel, EmailStr, ConfigDict


class StudentCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class StudentUpdate(BaseModel):
    full_name: str | None = None
    email: EmailStr | None = None
    password: str | None = None


class StudentOut(BaseModel):
    id: int
    full_name: str
    email: EmailStr

    model_config = ConfigDict(from_attributes=True)
