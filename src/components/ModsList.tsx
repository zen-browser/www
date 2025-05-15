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
          className={`px-3 py-2 ${page === 1 ? 'pointer-events-none text-gray-400' : 'text-dark hover:text-gray-600'}`}
          onClick={() => navigatePage(page - 1)}
          type="button"
        >
          &lt;
        </button>
        <form className="flex items-center gap-2" onSubmit={handlePageSubmit}>
          {mods.pagination.pagination.split('{input}').map((value, index) => {
            if (index === 0) {
              return (
                <input
                  aria-label="Page number"
                  className="w-16 rounded border border-dark bg-transparent px-2 py-1 text-center text-sm"
                  onInput={handlePageInputChange}
                  type="text"
                  value={pageInput}
                />
              )
            }
            return (
              <span className="text-sm" key={value}>
                {value.replace('{totalPages}', totalPages.toString()).replace('{totalItems}', totalItems.toString())}
              </span>
            )
          })}
        </form>
        <button
          className={`px-3 py-2 ${page === totalPages ? 'pointer-events-none text-gray-400' : 'text-dark hover:text-gray-600'}`}
          onClick={() => navigatePage(page + 1)}
          type="button"
        >
          &gt;
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <input
            className="w-full rounded-full border-2 border-dark bg-transparent px-6 py-2 text-lg outline-none"
            id="search"
            onInput={handleSearch}
            placeholder={mods.search}
            type="text"
            value={search}
          />
        </div>

        <div className="grid w-full grid-cols-2 place-items-center gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-start gap-2">
            <button
              className="flex items-center gap-2 px-4 py-2 font-semibold text-md"
              onClick={toggleCreatedSort}
              type="button"
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
              className="flex items-center gap-2 px-4 py-2 font-semibold text-md"
              onClick={toggleUpdatedSort}
              type="button"
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
            <label className="font-semibold text-md" htmlFor="limit">
              {mods.sort.perPage}
            </label>
            <select
              className="rounded border border-dark bg-transparent px-2 py-1 text-sm [&>option]:text-black"
              id="limit"
              onInput={handleLimitChange}
              value={limit}
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="96">96</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 place-items-start gap-12 py-6 md:grid-cols-2 xl:grid-cols-3">
        {paginatedMods.length > 0 ? (
          paginatedMods.map((mod) => (
            <a
              className="flex w-full flex-col gap-4 border-transparent transition-colors duration-100 hover:opacity-90"
              href={`/mods/${mod.id}`}
              key={mod.id}
            >
              <div className="relative mb-0 block aspect-[1.85/1] h-48 overflow-hidden rounded-md border-2 border-dark object-cover shadow-md">
                <img
                  alt={mod.name}
                  className="h-full w-full object-cover transition-transform duration-100 hover:scale-105"
                  loading="lazy"
                  src={mod.image}
                />
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {mod.name} <span className="ml-1 font-normal text-sm">by @{mod.author}</span>
                </h2>
                <p className="font-thin text-sm">{mod.description}</p>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-4 grid place-items-center gap-4 place-self-center px-8 text-center">
            <h2 className="font-bold text-lg">{mods.noResults}</h2>
            <p className="font-thin text-sm">{mods.noResultsDescription}</p>
          </div>
        )}
      </div>

      {renderPagination()}
    </div>
  )
}
