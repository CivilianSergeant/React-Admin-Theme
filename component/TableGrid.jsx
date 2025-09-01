import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useState } from "react"
export default function TableGrid({ datasource }) {

    const [search, setSearch] = useState("")
    const [sortKey, setSortKey] = useState("name")
    const [sortOrder, setSortOrder] = useState("asc")
    const [page, setPage] = useState(1)
    const pageSize = 15
    const filtered = datasource.items
        .filter(
            (item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1
            if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1
            return 0
        })

    const totalPages = Math.ceil(filtered.length / pageSize)
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize)

    const toggleSort = (key) => {
        if (sortKey === key) {
          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
          setSortKey(key)
          setSortOrder("asc")
        }
      }

    return (
        <>
            <div className="overflow-auto w-[1560px] max-h-[500px] border rounded border-gray-200">
                <table className="min-w-[1500px] border-collapse text-lg text-left">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            {Object.keys(paginated[0] || {}).map((col) => (
                                <th
                                    key={col}
                                    className="px-7 py-3 border-b border-gray-200 text-gray-700 cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                                    onClick={() => toggleSort(col)}
                                >
                                    {col.charAt(0).toUpperCase() + col.slice(1)}{" "}
                                    {sortKey === col && (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        { paginated.map((user, i) => (
                            <tr
                                key={user.id}
                                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-blue-50 hover:cursor-pointer transition`}
                            >
                                {Object.values(user).map((val, idx) => (
                                    <td
                                        key={idx}
                                        className="px-4 py-3 border-b border-gray-200 whitespace-nowrap"
                                    >
                                        {val}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
            {/* Pagination */}
            <div className="flex items-center justify-end pt-5">
                <button
                    className="px-4 py-2 mr-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    <ChevronLeft />
                </button>
                <span className="text-gray-600 text-sm">
                    Page <strong>{page}</strong> of {totalPages}
                </span>
                <button
                    className="px-4 py-2 ml-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    <ChevronRight />
                </button>
            </div>
        </>
    )
}