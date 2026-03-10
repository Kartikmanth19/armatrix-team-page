from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import team

app = FastAPI(title="Armatrix Teams API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(team.router)

@app.get("/")
def root():
    return {"message": "Armatrix Teams API is running Properly"}