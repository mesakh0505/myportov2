'use client'

import { Skeleton } from "~/components/ui/skeleton"

export function LoadingComponent() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="border-b pb-4">
            <Skeleton className="h-6 w-3/4" />
          </li>
        ))}
      </ul>
    </div>
  )
}