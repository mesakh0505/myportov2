import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/button"
import { Button } from "./ui/button"

interface ProjectCardProps {
  id: number
  title: string
  body: string
}

export default function ProjectCard({ id, title, body }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{body.slice(0, 100)}...</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={`/projects/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}