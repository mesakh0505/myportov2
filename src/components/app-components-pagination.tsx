'use client'

import Link from 'next/link'
import { Button } from "~/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function PaginationComponent({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Button asChild variant="outline">
          <Link href={`/blog?page=${currentPage - 1}`}>Previous</Link>
        </Button>
      )}
      {currentPage < totalPages && (
        <Button asChild variant="outline">
          <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>
        </Button>
      )}
    </div>
  )
}