import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './index.css'

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <ProfileCard />
              <HeroSection />
            </div>
          }/>
          <Route path="/about"    element={<About />} />
          <Route path="/resume"   element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}