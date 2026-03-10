from fastapi import APIRouter
from app.database import team_db

router = APIRouter(prefix="/team", tags=["Team"])


@router.get("/")
def get_team():
    return team_db


@router.post("/")
def add_member(member: dict):
    member["id"] = len(team_db) + 1
    team_db.append(member)
    return member


@router.put("/{member_id}")
def update_member(member_id: int, updated: dict):

    for member in team_db:
        if member["id"] == member_id:
            member.update(updated)
            return member

    return {"error": "Member not found"}


@router.delete("/{member_id}")
def delete_member(member_id: int):

    for member in team_db:
        if member["id"] == member_id:
            team_db.remove(member)
            return {"message": "Member deleted"}

    return {"error": "Member not found"}