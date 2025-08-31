import ContextMenu from "@/component/ContextMenu";
import { Archive, Trash2, MailCheck, Reply, Forward } from "lucide-react";
export default function TableListItem({item,contextVisible}){
    return (
        <div className="group flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer font-semibold  border-gray-200 relative">
        <div className="flex items-center flex-1 overflow-hidden">
          <input type="checkbox" className="mr-3 w-4 h-4" />
          <div className="flex-1 overflow-hidden">
            <span className="mr-3 text-sm">{item.name}</span>
            <span className="truncate">{item.email}</span>
            <span className="text-gray-500 ml-2 truncate">
              – Your account has been created successfully {item.notes}.
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
        { (!contextVisible && item.id==9)?<ContextMenu />:<></> }
      </div>
    )
}