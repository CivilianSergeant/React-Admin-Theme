import {  Archive, Trash2, MailCheck, Reply, Forward } from "lucide-react";
export default function ContextMenu(){
    return (
        <div className="absolute z-50 right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded shadow-2xl text-sm">
            <ul>
              <li className="flex border-b border-gray-200 items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <Reply size={16} className="mr-2 text-gray-500" /> Reply
              </li>
              <li className="flex border-b border-gray-200 items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <Forward size={16} className="mr-2 text-gray-500" /> Forward
              </li>
              <li className="flex border-b border-gray-200 items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <MailCheck size={16} className="mr-2 text-gray-500" /> Mark as Read
              </li>
              <li className="flex border-b border-gray-200 items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <Archive size={16} className="mr-2 text-gray-500" /> Archive
              </li>
              <li className="flex border-b border-gray-200 items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                <Trash2 size={16} className="mr-2 text-red-500" /> Delete
              </li>
            </ul>
          </div>
    )
}