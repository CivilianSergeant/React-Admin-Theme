"use client"
import React, { useState } from "react"
import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";
import CardGridView from "@/component/CardGridView";
import { useSelector } from "react-redux";
export default function Home({ children }) {


  const data = useSelector(state=>state.tableData)
  


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Header pageTitle="Card Grid View" />
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
          <CardGridView datasource={data}/>


        </main> </div>
    </div >
  );
}
