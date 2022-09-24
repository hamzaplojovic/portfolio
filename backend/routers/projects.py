from fastapi import APIRouter, status
from schemas import project_schema
from repo import project

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


@router.get("/", status_code=status.HTTP_200_OK)
async def get_all():
    return project.get_all_projects()


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create(request: project_schema.Project):
    return project.create_project(request)


@router.put("/{name}", status_code=status.HTTP_202_ACCEPTED)
async def change(request: project_schema.Project):
    return project.change_project(request)


@router.delete("/{name}", status_code=status.HTTP_204_NO_CONTENT)
async def delete(name):
    return project.delete_project(name)
