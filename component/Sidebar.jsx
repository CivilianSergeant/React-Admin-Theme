"use client";
import { ChevronRight, LayoutDashboard, ShieldUser, FileChartColumnIncreasing, Settings } from "lucide-react";
import Link from "next/link";
import { Children } from "react";
import Icon from "./Icon";



export default function Sidebar() {

  const menus = [
    { id: 1, route: '/', name: 'Dashboard', icon: 'dashboard', children: [] },
    {
      id: 2, route: '#', name: 'Administration', icon: '', children: [
        { id: 3, route: '#', name: 'Admin Users', children: [] },
        { id: 4, route: '#', name: 'Regular Users', children: [] }
      ]
    },
    {
      id: 5, route: '#', name: 'Settings', icon: 'settings', children: [
        { id: 6, route: '#', name: 'General', children: [] },
        { id: 7, route: '#', name: 'Security', children: [] }
      ]
    },
    { id: 8, route: '#', name: 'Report', icon: 'report', children: [] },
    {
      id: 9, route: '#', name: 'UI', icon: 'settings', children: [
        { id: 10, route: '/table-list-view', name: 'Table List View', children: [] },
        { id: 11, route: '/table-grid-view', name: 'Table Grid View', children: [] },
        { id: 12, route: '/card-grid-view', name: 'Card Grid View', children: [] }
      ]
    }
  ]

  function nestedMenu(menu) {
    const menuId = `${menu.name}-menu`
    return (
      <li key={menu.id}>
        <input type="checkbox" id={menuId} className="peer hidden" />
        <label htmlFor={menuId} className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
          <div className="flex"><ShieldUser className="mr-2" /><span>{menu.name}</span></div>
          <span className="inline-block transform transition-transform duration-200 peer-checked:rotate-90">
            <ChevronRight />
          </span>
        </label>
        <ul className="ml-4 mt-1 space-y-1 hidden peer-checked:block">
          {
            renderMenu(menu.children)
          }
        </ul>
      </li>
    )
  }
  function singleMenuItem(menu) {
    return (
      <li key={menu.id}>
        <Link href={menu.route} className="flex items-center px-3 py-2 rounded hover:bg-gray-100">
          <Icon name={menu.icon} mr='mr-2' /> <span>{menu.name}</span>
        </Link>
      </li>)
  }

  function renderMenu(menus) {
    return menus.map(menu => {
      if (menu.children.length > 0) {
        return nestedMenu(menu)
      }
      return singleMenuItem(menu)
    })
  }
  return (
    <aside className="bg-white h-screen shadow flex flex-col w-64">
      {/* <!-- Top logo --> */}
      <div className="flex items-center justify-center h-16  shadow  ">
        Logo
      </div>

      {/* <!-- Collapsible lower menu --> */}
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-2">
          {renderMenu(menus)}
        </ul>
      </div>

    </aside>

  );
}