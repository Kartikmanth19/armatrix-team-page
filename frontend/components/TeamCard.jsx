"use client"

import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

export default function TeamCard({ member, onDelete }) {

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-xl"
    >

      <img src={member.photo} className="w-24 h-24 rounded-full mx-auto border-4 border-white"/>

      <h2 className="text-xl font-bold text-white mt-4">
        {member.name}
      </h2>

      <p className="text-gray-300">
        {member.role}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        {member.bio}
      </p>

      <div className="flex justify-center gap-4 mt-4">

        <a
          href={member.linkedin}
          target="_blank"
          className="text-blue-400 text-xl"
        >
          <FaLinkedin/>
        </a>

        <button
          onClick={() => onDelete(member.id)}
          className="text-red-400 text-sm"
        >
          Delete
        </button>

      </div>

    </motion.div>

  )
}