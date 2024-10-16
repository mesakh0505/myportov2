import Link from 'next/link'
import { getBlogPosts } from '../lib/api'
import Pagination from '../components/Pagination'

export const revalidate = 3600 // revalidate every hour

export default async function Blog({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1', 10)
  const { posts, total } = await getBlogPosts(page)

  const totalPages = Math.ceil(total / 5)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border-b pb-4">
            <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:text-blue-500 dark:hover:text-blue-400">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}