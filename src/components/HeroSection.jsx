import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './styles/HeroSection.css'

export default function HeroSection() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="hero-title">Hello</h1>
      <p className="hero-subtitle">Here’s who I am &amp; what I do</p>
      <div className="hero-buttons">
        <Link to="/resume"   className="btn btn-primary">Resume</Link>
        <Link to="/projects" className="btn btn-outline">Projects</Link>
      </div>
      <p className="hero-copy">
        I'm Richard Avalos, a retail management professional with a Master’s in Business Administration and a passion for operational excellence and customer experience. Explore my 
        background and let’s connect to create impactful solutions together.
      </p>
    </motion.section>
  )
}