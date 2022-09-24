from deta import Deta
from fastapi import status, HTTPException

deta = Deta("a0ek6700_fRxhARKyW6MNuqi8n8jrzd25Eyi3vUTo")
db = deta.Base("projects")


def get_all_projects():
    return db.fetch().items


def create_project(request):
    return db.put(dict(request), key=request.name)


def change_project(request):
    return db.put(dict(request), key=request.name)


def delete_project(name):
    return db.delete(name)
