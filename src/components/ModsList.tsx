import { icon, library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'preact/hooks'
import { useModsSearch } from '~/hooks/useModsSearch'
import type { ZenTheme } from '~/mods'
import { type Locale, getUI } from '~/utils/i18n'

// Add icons to the library
library.add(faSort, faSortUp, faSortDown)

// Create icon objects
const defaultSortIcon = icon({ prefix: 'fas', iconName: 'sort' })
const ascSortIcon = icon({ prefix: 'fas', iconName: 'sort-up' })
const descSortIcon = icon({ prefix: 'fas', iconName: 'sort-down' })

interface ModsListProps {
  allMods: ZenTheme[]
  locale: Locale
}

export default function ModsList({ allMods, locale }: ModsListProps) {
  const {
    search,
    createdSort,
    updatedSort,
    page,
    limit,
    totalPages,
    totalItems,
    setSearch,
    toggleCreatedSort,
    toggleUpdatedSort,
    setPage,
    setLimit,
    mods: paginatedMods,
    // searchParams,
  } = useModsSearch(allMods)

  const [pageInput, setPageInput] = useState(page.toString())

  // Keep page input in sync with actual page
  useEffect(() => {
    setPageInput(page.toString())
  }, [page])

  function getSortIcon(state: 'default' | 'asc' | 'desc') {
    if (state === 'asc') return ascSortIcon
    if (state === 'desc') return descSortIcon
    return defaultSortIcon
  }

  function handleSearch(e: Event) {
    const target = e.target as HTMLInputElement
    setSearch(target.value)
  }

  function handleLimitChange(e: Event) {
    const target = e.target as HTMLSelectElement
    setLimit(Number.parseInt(target.value, 10))
  }

  function handlePageSubmit(e: Event) {
    e.preventDefault()
    const newPage = Number.parseInt(pageInput, 10)
    if (!Number.isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
      window.scrollTo(0, 0)
    } else {
      setPageInput(page.toString())
    }
  }

  function handlePageInputChange(e: Event) {
    const target = e.target as HTMLInputElement
    setPageInput(target.value)
  }

  function navigatePage(pageNum: number) {
    setPage(pageNum)
    window.scrollTo(0, 0)
  }

  const {
    routes: { mods },
  } = getUI(locale)

  function renderPagination() {
    if (totalPages <= 1) return null
    return (
      <div className="mx-auto mb-12 flex items-center justify-center gap-4 px-8">
        <button
          type="button"
          onClick={() => navigatePage(page - 1)}
          className={`px-3 py-2 ${
            page === 1 ? 'pointer-events-none text-gray-400' : 'text-dark hover:text-gray-600'
          }`}
        >
          &lt;
        </button>
        <form onSubmit={handlePageSubmit} className="flex items-center gap-2">
          {mods.pagination.pagination.split('{input}').map((value, index) => {
            if (index === 0) {
              return (
                <input
                  type="text"
                  value={pageInput}
                  onInput={handlePageInputChange}
                  className="w-16 rounded border border-dark bg-transparent px-2 py-1 text-center text-sm"
                  aria-label="Page number"
                />
              )
            }
            return (
              <span key={value} className="text-sm">
                {value
                  .replace('{totalPages}', totalPages.toString())
                  .replace('{totalItems}', totalItems.toString())}
              </span>
            )
          })}
        </form>
        <button
          type="button"
          onClick={() => navigatePage(page + 1)}
          className={`px-3 py-2 ${
            page === totalPages
              ? 'pointer-events-none text-gray-400'
              : 'text-dark hover:text-gray-600'
          }`}
        >
          &gt;
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="mx-auto flex flex-col items-start gap-4 px-8 lg:w-1/2">
        <div className="flex w-full flex-col items-center gap-6">
          <input
            type="text"
            id="search"
            className="w-full rounded-full border-2 border-dark bg-transparent px-6 py-2 text-lg outline-none"
            placeholder={mods.search}
            value={search}
            onInput={handleSearch}
          />
        </div>

        <div className="grid w-full grid-cols-2 place-items-center gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-start gap-2">
            <button
              type="button"
              onClick={toggleCreatedSort}
              className="text-md flex items-center gap-2 px-4 py-2 font-semibold"
            >
              {mods.sort.lastCreated}
              <span
                // biome-ignore lint/security/noDangerouslySetInnerHtml: Icons are safe
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
              {mods.sort.lastUpdated}
              <span
                // biome-ignore lint/security/noDangerouslySetInnerHtml: Icons are safe
                dangerouslySetInnerHTML={{
                  __html: getSortIcon(updatedSort).html[0],
                }}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2">
            <label htmlFor="limit" className="text-md font-semibold">
              {mods.sort.perPage}
            </label>
            <select
              id="limit"
              value={limit}
              onInput={handleLimitChange}
              className="rounded border border-dark bg-transparent px-2 py-1 text-sm [&>option]:text-black"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="96">96</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 place-items-start gap-12 p-10 md:grid-cols-2 lg:grid-cols-3 lg:p-24 lg:px-24 2xl:grid-cols-4">
        {paginatedMods.length > 0 ? (
          paginatedMods.map((mod) => (
            <a
              key={mod.id}
              href={`/mods/${mod.id}`}
              className="flex flex-col gap-4 border-transparent transition-colors duration-100 hover:opacity-90"
            >
              <div className="relative mb-0 block aspect-[1.85/1] h-48 overflow-hidden rounded-md border-2 border-dark object-cover shadow-md">
                <img
                  src={mod.image}
                  alt={mod.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-100 hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold">
                  {mod.name} <span className="ml-1 text-sm font-normal">by @{mod.author}</span>
                </h2>
                <p className="text-sm font-thin">{mod.description}</p>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-4 grid place-items-center gap-4 place-self-center px-8 text-center">
            <h2 className="text-lg font-bold">{mods.noResults}</h2>
            <p className="text-sm font-thin">{mods.noResultsDescription}</p>
          </div>
        )}
      </div>

      {renderPagination()}
    </div>
  )
}
