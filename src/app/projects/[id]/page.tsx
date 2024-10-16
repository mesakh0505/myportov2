import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { getProject } from '../../lib/api'

export const revalidate = 3600 // revalidate every hour

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="prose dark:prose-invert mb-6">
        <p>{project.body}</p>
      </div>
      <Button asChild>
        <a href={`https://github.com/janedoe/project-${project.id}`} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </Button>
    </div>
  )
}