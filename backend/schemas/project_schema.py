from pydantic import BaseModel


class ProjectBase(BaseModel):
    name: str
    icon: str
    github: str


class Project(ProjectBase):
    class Config:
        orm_mode = True
