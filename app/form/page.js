

import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";

import { ChevronDownIcon } from "lucide-react";
export default async function Home({ children }) {




  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Header pageTitle="Form View" />
        {/* Page Content */}
        {/* <main className="p-6">{children}</main> */}
        <main className="p-4">
          {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-800">User List</h2>
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          {/* Table */}
          <div>
            <label htmlFor="price" className="block text-sm/6 font-medium ">
              Price
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md  border bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-500">
                <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">$</div>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="0.00"
                  className="block min-w-0 grow  py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                />
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-r-md py-1.5 pr-7 pl-3 text-base text-gray-400  placeholder:text-gray-500 focus:outline-0 focus:-outline-offset-0 focus:bg-gray-100   sm:text-sm/6"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div >
  );
}
