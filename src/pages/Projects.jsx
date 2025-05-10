import React from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

const dummyProjects = [
  {
    title: 'Project Alpha',
    description:
      'A sleek dashboard that visualizes real-time metrics with custom charts and dark/light theming. Built with React, D3.js & TailwindCSS.',
    img: '/assets/project1.avif',
    link: '#'
  },
  {
    title: 'Project Beta',
    description:
      'An AI chat assistant integrated into Slack & Notion. Features context memory, auto-summaries and workflow automations.',
    img: '/assets/project2.avif',
    link: '#'
  }
]

export default function Projects() {
  return (
    <section className="projects-page">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {dummyProjects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            img={p.img}
            link={p.link}
          />
        ))}
      </div>
    </section>
  )
}