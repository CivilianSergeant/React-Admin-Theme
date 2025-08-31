
import ContextMenu from "@/component/ContextMenu";
import {  Archive, Trash2, MailCheck, Reply, Forward } from "lucide-react";
export default function TableList(){
    return (
    <div className="bg-white shadow rounded-lg divide-y">
        {/* Row 1 - Unread */}
        <div className="group flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer font-semibold  border-gray-200">
          <input type="checkbox" className="mr-3 w-4 h-4" />
          <div className="flex-1 overflow-hidden">
            <span className="mr-3 text-sm">Google</span>
            <span className="truncate">Welcome to Gmail</span>
            <span className="text-gray-500 ml-2 truncate">
              – Your account has been created successfully.
            </span>
          </div>
          <div className="ml-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition">
            <Reply size={16} className="text-gray-500 hover:text-black cursor-pointer" />
            <Forward size={16} className="text-gray-500 hover:text-black cursor-pointer" />
            <MailCheck size={16} className="text-gray-500 hover:text-black cursor-pointer" />
            <Archive size={16} className="text-gray-500 hover:text-black cursor-pointer" />
            <Trash2 size={16} className="text-red-500 hover:text-red-700 cursor-pointer" />
          </div>
          <div className="ml-4 text-sm text-gray-500">10:30 AM</div>
        </div>

        {/* Row 2 - Read */}
        

        <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer font-semibold border-gray-200 relative">
          <div className="flex items-center flex-1 overflow-hidden">
            <input type="checkbox" className="mr-3 w-4 h-4" />
            <div className="flex-1 overflow-hidden">
              <span className="mr-3 text-sm">Google</span>
              <span className="truncate">Welcome to Gmail</span>
              <span className="text-gray-500 ml-2 truncate">
                – Your account has been created successfully.
              </span>
            </div>
            <div className="ml-4 text-sm text-gray-500">10:30 AM</div>
          </div>

          {/* Context menu (always visible for this row) */}
          <ContextMenu/>
        </div>

        {/* Row 3 - Unread */}
        <div className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer font-semibold">
          <input type="checkbox" className="mr-3 w-4 h-4" />
          <div className="flex-1 overflow-hidden">
            <span className="mr-3 text-sm">LinkedIn</span>
            <span className="truncate">New Connection Request</span>
            <span className="text-gray-500 ml-2 truncate">
              – John Doe wants to connect with you.
            </span>
          </div>
          <div className="ml-4 text-sm text-gray-500">Yesterday</div>
        </div>
      </div>
    )
}