import { SearchIcon } from 'lucide-react'

export function SearchForm() {
  return (
    <form className="max-w-150 flex-1 flex justify-center mx-auto">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="search"
          className="w-full border pl-4 py-2 pr-12 rounded-l-full focus:outline-none focus:border-blue-500"
          placeholder="Search"
          id="search"
          required
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer border border-l-0 rounded-r-full px-5 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
        <SearchIcon size={20} aria-hidden="true" /> {/* currentcolor */}
      </button>
    </form>
  )
}
