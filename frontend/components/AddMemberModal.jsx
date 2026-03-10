"use client"

import { useState } from "react"
import { addMember } from "../services/api"
import { FaTimes } from "react-icons/fa"

export default function AddMemberModal({ refresh }) {

  const [open, setOpen] = useState(false)

  const [form, setForm] = useState({
    name: "",
    role: "",
    bio: "",
    photo: "",
    linkedin: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addMember(form)
    setOpen(false)
    refresh()
  }

  return (
    <>
  
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        + Add Member
      </button>

  
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-white p-8 rounded-2xl w-[400px] shadow-xl relative">

 
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Add Team Member
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Name"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e)=>setForm({...form,name:e.target.value})}
              />

              <input
                placeholder="Role"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e)=>setForm({...form,role:e.target.value})}
              />

              <input
                placeholder="Photo URL"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e)=>setForm({...form,photo:e.target.value})}
              />

              <input
                placeholder="LinkedIn URL"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e)=>setForm({...form,linkedin:e.target.value})}
              />

              <textarea
                placeholder="Bio"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e)=>setForm({...form,bio:e.target.value})}
              />

              <button
                className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-900 transition"
              >
                Add Member
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  )
}