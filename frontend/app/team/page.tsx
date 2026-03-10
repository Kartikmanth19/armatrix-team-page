"use client"

import { useEffect, useState } from "react"
import { getTeam, deleteMember } from "../../services/api"
import TeamCard from "../../components/TeamCard"
import AddMemberModal from "../../components/AddMemberModal"
import Navbar from "../../components/Navbar"

type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  photo: string
  linkedin: string
}

export default function TeamPage() {

  const [team, setTeam] = useState<TeamMember[]>([])

  const fetchTeam = async () => {
    try {
      const res = await getTeam()
      setTeam(res.data)
    } catch (error) {
      console.error("Error fetching team:", error)
    }
  }

  const removeMember = async (id: number) => {
    try {
      await deleteMember(id)
      fetchTeam()
    } catch (error) {
      console.error("Error deleting member:", error)
    }
  }

  useEffect(() => {
    fetchTeam()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">

      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold text-white">
            Meet Our Team
          </h1>

          <AddMemberModal refresh={fetchTeam} />

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onDelete={removeMember}
            />
          ))}

        </div>

      </div>

    </div>
  )
}
