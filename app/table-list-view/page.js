'use client'
import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";
import Toolbar from "@/component/Toolbar";
import TableList from "@/component/TableList";
import { useSelector } from "react-redux";
export default function Home({ children }) {

  const mockData = useSelector((state)=>state.tableData)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Header pageTitle="Table List View"/>
        {/* Page Content */}
        {/* <main className="p-6">{children}</main> */}
        <main className="p-4">
          {/* <h2 className="text-xl font-bold mb-4">Page Title</h2> */}
          {/* Toolbar */}
          <Toolbar/>
          {/* Inbox List */}
          <TableList datasource={mockData}/>
        </main>
      </div>
    </div>
  );
}
