import axios from "axios"

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

export const getTeam = () => API.get("/team")

export const addMember = (data) => API.post("/team", data)

export const deleteMember = (id) => API.delete(`/team/${id}`)