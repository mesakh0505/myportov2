"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectFilter() {
  const [filter, setFilter] = useState('')
  const router = useRouter()

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value
    setFilter(newFilter)
    router.push(`/projects?filter=${newFilter}`)
  }

  return (
    <div className="mb-6">
      <select 
        value={filter} 
        onChange={handleFilterChange}
        className="border rounded p-2"
      >
        <option value="">All Projects</option>
        <option value="web">Web Development</option>
        <option value="mobile">Mobile Development</option>
        <option value="desktop">Desktop Applications</option>
      </select>
    </div>
  )
}