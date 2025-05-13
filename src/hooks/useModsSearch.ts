import { useEffect, useState } from 'preact/hooks'
import type { ZenTheme } from '../mods'

type SortOrder = 'default' | 'asc' | 'desc'

interface ModsSearchState {
  search: string
  createdSort: SortOrder
  updatedSort: SortOrder
  page: number
  limit: number
}

const DEFAULT_LIMIT = 12

export function useModsSearch(mods: ZenTheme[]) {
  const [searchParams, setSearchParams] = useState<URLSearchParams>()
  const [state, setState] = useState<ModsSearchState>({
    search: '',
    createdSort: 'desc',
    updatedSort: 'default',
    page: 1,
    limit: DEFAULT_LIMIT,
  })

  // Initialize search params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setSearchParams(params)
    setState({
      search: params.get('q') || '',
      createdSort: (params.get('created') as SortOrder) || 'desc',
      updatedSort: (params.get('updated') as SortOrder) || 'default',
      page: Number.parseInt(params.get('page') || '1', 10),
      limit: Number.parseInt(params.get('limit') || String(DEFAULT_LIMIT), 10),
    })
  }, [])

  // Update URL when state changes
  useEffect(() => {
    if (!searchParams) return

    if (state.search) {
      searchParams.set('q', state.search)
    } else {
      searchParams.delete('q')
    }

    if (state.createdSort !== 'default') {
      searchParams.set('created', state.createdSort)
    } else {
      searchParams.delete('created')
    }

    if (state.updatedSort !== 'default') {
      searchParams.set('updated', state.updatedSort)
    } else {
      searchParams.delete('updated')
    }

    if (state.page > 1) {
      searchParams.set('page', state.page.toString())
    } else {
      searchParams.delete('page')
    }

    if (state.limit !== DEFAULT_LIMIT) {
      searchParams.set('limit', state.limit.toString())
    } else {
      searchParams.delete('limit')
    }

    const newUrl = `${window.location.pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`

    if (state.page > 1) {
      window.history.pushState({}, '', newUrl)
    } else {
      window.history.replaceState({}, '', newUrl)
    }
  }, [state, searchParams])

  const filteredMods = (() => {
    let filtered = [...mods]

    // Filter by search
    const searchTerm = state.search.toLowerCase()
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
    if (state.createdSort !== 'default') {
      filtered.sort((a, b) => {
        const diff =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        return state.createdSort === 'asc' ? diff : -diff
      })
    }

    // Sort by updatedAt if chosen
    if (state.updatedSort !== 'default') {
      filtered.sort((a, b) => {
        const diff =
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        return state.updatedSort === 'asc' ? diff : -diff
      })
    }

    return filtered
  })()

  // Calculate pagination
  const totalPages = Math.ceil(filteredMods.length / state.limit)
  const startIndex = (state.page - 1) * state.limit
  const endIndex = startIndex + state.limit
  const paginatedMods = filteredMods.slice(startIndex, endIndex)

  const setSearch = (search: string) => {
    setState((prev) => ({ ...prev, search, page: 1 })) // Reset page when search changes
  }

  const toggleCreatedSort = () => {
    setState((prev) => ({
      ...prev,
      createdSort:
        prev.createdSort === 'default'
          ? 'asc'
          : prev.createdSort === 'asc'
            ? 'desc'
            : 'default',
      page: 1, // Reset page when sort changes
    }))
  }

  const toggleUpdatedSort = () => {
    setState((prev) => ({
      ...prev,
      updatedSort:
        prev.updatedSort === 'default'
          ? 'asc'
          : prev.updatedSort === 'asc'
            ? 'desc'
            : 'default',
      page: 1, // Reset page when sort changes
    }))
  }

  const setPage = (page: number) => {
    setState((prev) => ({
      ...prev,
      page: Math.max(1, Math.min(page, totalPages)),
    }))
  }

  const setLimit = (limit: number) => {
    setState((prev) => ({ ...prev, limit, page: 1 })) // Reset page when limit changes
  }

  return {
    search: state.search,
    createdSort: state.createdSort,
    updatedSort: state.updatedSort,
    page: state.page,
    limit: state.limit,
    totalPages,
    totalItems: filteredMods.length,
    setSearch,
    toggleCreatedSort,
    toggleUpdatedSort,
    setPage,
    setLimit,
    mods: paginatedMods,
    searchParams,
  }
}
