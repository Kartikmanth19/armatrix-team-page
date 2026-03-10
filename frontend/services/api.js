import axios from "axios"

const API = axios.create({
    baseURL: "https://armatrix-backend-h4iv.onrender.com/"
})

export const getTeam = () => API.get("/team")

export const addMember = (data) => API.post("/team", data)

export const deleteMember = (id) => API.delete(`/team/${id}`)
