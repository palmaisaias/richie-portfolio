import React from 'react'
import { motion } from 'framer-motion'
import './styles/ProjectCard.css'

export default function ProjectCard({ title, description, img, link }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.03, boxShadow: '0 15px 25px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="project-img-wrapper">
        <img src={img} alt={title} className="project-img" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <a href={link} target="_blank" rel="noopener" className="project-btn">
          View Project
        </a>
      </div>
    </motion.div>
  )
}