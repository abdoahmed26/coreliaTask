import { Route, Routes } from "react-router-dom"
import SideBar from "./pages/SideBar/SideBar"
import Header from "./pages/Header/Header"
import ProjectsMain from "./pages/projects/ProjectsMain"
import APICallMain from "./pages/apiCall/APICallMain"
import { useState } from "react"
import ClientsMain from "./pages/Clients/ClientsMain"
import VrtsMain from "./pages/Vrts/VrtsMain"
import QuestionsMain from "./pages/Questions/QuestionsMain"
import CVSSMain from "./pages/CVSS/CVSSMain"
import PeopleMain from "./pages/Peoples/PeopleMain"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex gap-2 bg-gray-200 h-full min-h-screen">
      <SideBar open={open} setOpen={setOpen} />
      <div className="w-full md:ml-60">
        <Header setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<ProjectsMain />} />
          <Route path="/client" element={<ClientsMain />} />
          <Route path="/people" element={<PeopleMain />} />
          <Route path="/vrt" element={<VrtsMain />} />
          <Route path="/question" element={<QuestionsMain />} />
          <Route path="/cvss" element={<CVSSMain />} />
          <Route path="/api" element={<APICallMain />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
