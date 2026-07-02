from pydantic import BaseModel, EmailStr, ConfigDict


class StudentCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class StudentLogin(BaseModel):
    email: EmailStr
    password: str


class StudentResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr

    model_config = ConfigDict(from_attributes=True)
