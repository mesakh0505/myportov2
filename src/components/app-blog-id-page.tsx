'use client'

import { notFound } from 'next/navigation'
import { getBlogPost } from '~/lib/api'

export const revalidate = 3600 // revalidate every hour

export async function Page({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose dark:prose-invert">
        <p>{post.body}</p>
      </div>
    </article>
  )
}