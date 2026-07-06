from pydantic import BaseModel

class StudentCreate(BaseModel):
    name: str
    email: str
    age: int

class StudentUpdate(BaseModel):
    name: str | None = None
    email: str | None = None
    age: int | None = None

class StudentOut(BaseModel):
    id: int
    name: str
    email: str
    age: int

    class Config:
        from_attributes = True