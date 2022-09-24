from pydantic import BaseModel


class ProjectBase(BaseModel):
    name: str
    desc: str
    link: str
    github: str
    icon: str


class Project(ProjectBase):
    class Config:
        orm_mode = True
