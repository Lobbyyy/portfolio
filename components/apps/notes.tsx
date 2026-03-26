"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { getAboutMeNote, getLearningGoalsNote } from "@/lib/data/portfolio-data"

interface NotesProps {
  isDarkMode?: boolean
}

export default function Notes({ isDarkMode = true }: NotesProps) {
  // Generate notes from shared data
  const initialNotes = useMemo(() => [
    {
      id: 1,
      title: "About Me",
      content: getAboutMeNote(),
      date: "Today, 10:30 AM",
    },
    {
      id: 2,
      title: "Learning Goals",
      content: getLearningGoalsNote(),
      date: "Yesterday, 3:15 PM",
    },
  ], [])

  const [notes] = useState(initialNotes)
  const [selectedNote, setSelectedNote] = useState(initialNotes[0])
  const [searchQuery, setSearchQuery] = useState("")

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-amber-50"
  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const sidebarBgColor = isDarkMode ? "bg-gray-800" : "bg-amber-100"
  const borderColor = isDarkMode ? "border-gray-700" : "border-amber-200"
  const hoverBgColor = isDarkMode ? "hover:bg-gray-700" : "hover:bg-amber-200"
  const selectedBgColor = isDarkMode ? "bg-gray-700" : "bg-amber-200"
  const mutedTextColor = isDarkMode ? "text-gray-400" : "text-gray-500"

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className={`h-full flex ${bgColor} ${textColor}`}>
      {/* Sidebar */}
      <div className={`w-64 ${sidebarBgColor} border-r ${borderColor} flex flex-col`}>
        {/* Search */}
        <div className={`p-3 border-b ${borderColor}`}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-3 py-1.5 rounded-md text-sm ${isDarkMode ? "bg-gray-700" : "bg-white"} outline-none`}
          />
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto">
          {filteredNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className={`w-full text-left p-3 border-b ${borderColor} ${selectedNote?.id === note.id ? selectedBgColor : hoverBgColor}`}
            >
              <div className="font-medium truncate">{note.title}</div>
              <div className={`text-xs ${mutedTextColor} mt-1`}>{note.date}</div>
              <div className={`text-xs ${mutedTextColor} mt-1 truncate`}>{note.content.slice(0, 50)}...</div>
            </button>
          ))}
        </div>
      </div>

      {/* Note Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedNote ? (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h1 className="text-2xl font-bold mb-4">{selectedNote.title}</h1>
            <pre className="whitespace-pre-wrap font-sans text-sm">{selectedNote.content}</pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">Select a note to view</div>
        )}
      </div>
    </div>
  )
}
