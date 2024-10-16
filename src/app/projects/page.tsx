import { Suspense } from 'react'
import ProjectCard from '../../components/ProjectCard'
import ProjectFilter from '../components/ProjectFilter'
import { getProjects } from '../lib/api'

export const revalidate = 3600 // revalidate every hour

export default async function Projects() {
  const projects = await getProjects()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ProjectFilter />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} id={project.id} title={project.title} body={project.body} />
        ))}
      </div>
    </div>
  )
}