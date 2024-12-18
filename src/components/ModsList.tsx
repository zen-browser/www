import React, { useState, useMemo } from 'react'
import type { ZenTheme } from '../mods'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faSort, faSortUp, faSortDown)

// Create icon objects
const defaultSortIcon = icon({ prefix: 'fas', iconName: 'sort' })
const ascSortIcon = icon({ prefix: 'fas', iconName: 'sort-up' })
const descSortIcon = icon({ prefix: 'fas', iconName: 'sort-down' })

interface ModsListProps {
  mods: ZenTheme[]
}

export default function ModsList({ mods }: ModsListProps) {
  const [search, setSearch] = useState('')
  const [createdSort, setCreatedSort] = useState<'default' | 'asc' | 'desc'>(
    'default',
  )
  const [updatedSort, setUpdatedSort] = useState<'default' | 'asc' | 'desc'>(
    'default',
  )

  const toggleCreatedSort = () => {
    setCreatedSort((prev) => {
      if (prev === 'default') return 'asc'
      if (prev === 'asc') return 'desc'
      return 'default'
    })
  }

  const toggleUpdatedSort = () => {
    setUpdatedSort((prev) => {
      if (prev === 'default') return 'asc'
      if (prev === 'asc') return 'desc'
      return 'default'
    })
  }

  function getSortIcon(state: 'default' | 'asc' | 'desc') {
    if (state === 'asc') return ascSortIcon
    if (state === 'desc') return descSortIcon
    return defaultSortIcon
  }

  const filteredAndSortedMods = useMemo(() => {
    let filtered = [...mods]

    // Filter by search
    const searchTerm = search.toLowerCase()
    if (searchTerm) {
      filtered = filtered.filter(
        (mod) =>
          mod.name.toLowerCase().includes(searchTerm) ||
          mod.description.toLowerCase().includes(searchTerm) ||
          mod.author.toLowerCase().includes(searchTerm) ||
          (mod.tags?.some((tag) => tag.toLowerCase().includes(searchTerm)) ??
            false),
      )
    }

    // Sort by createdAt if chosen
    if (createdSort !== 'default') {
      filtered.sort((a, b) => {
        const diff =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        return createdSort === 'asc' ? diff : -diff
      })
    }

    // Sort by updatedAt if chosen
    if (updatedSort !== 'default') {
      filtered.sort((a, b) => {
        const diff =
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        return updatedSort === 'asc' ? diff : -diff
      })
    }

    return filtered
  }, [mods, search, createdSort, updatedSort])

  return (
    <div>
      <div className="mx-auto mb-8 flex flex-col items-start gap-4 px-8 lg:w-1/2">
        <div className="flex w-full flex-col items-center gap-6">
          <input
            type="text"
            id="search"
            className="w-full rounded-full border-2 border-dark bg-transparent px-6 py-2 text-lg"
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-start gap-2">
            <button
              type="button"
              onClick={toggleCreatedSort}
              className="text-md flex items-center gap-2 px-4 py-2 font-semibold"
            >
              Last created
              <span
                dangerouslySetInnerHTML={{
                  __html: getSortIcon(createdSort).html[0],
                }}
              />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={toggleUpdatedSort}
              className="text-md flex items-center gap-2 px-4 py-2 font-semibold"
            >
              Last updated
              <span
                dangerouslySetInnerHTML={{
                  __html: getSortIcon(updatedSort).html[0],
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-12 p-10 md:grid-cols-2 lg:grid-cols-3 lg:p-24 lg:px-24">
        {filteredAndSortedMods.map((mod) => (
          <a
            key={mod.id}
            href={`/mods/${mod.id}`}
            className="mb-6 flex flex-col gap-4 border-transparent transition-colors duration-100 hover:opacity-90"
          >
            <div className="relative mb-0 block aspect-[1.85/1] h-48 overflow-hidden rounded-md border-2 border-dark object-cover shadow-md lg:h-auto">
              <img
                src={mod.image}
                alt={mod.name}
                className="h-full w-full object-cover transition-transform duration-100 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {mod.name}{' '}
                <span className="ml-1 text-sm font-normal">
                  by @{mod.author}
                </span>
              </h2>
              <p className="text-sm font-thin">{mod.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
