from pydantic import BaseModel

class TeamMember(BaseModel):
    id: int
    name: str
    role: str
    bio: str
    photo: str
    linkedin: str