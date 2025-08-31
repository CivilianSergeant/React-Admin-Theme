
import Button from "@/component/Button";
import { Mail,ChevronRight,ChevronLeft,Trash2, } from "lucide-react";
export default function Toolbar(){
    return (
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-4 h-4" />
          <Button name="Select All" color="default"/>
          <Button name="Mark as read" textColor="text-white" color="blue">
            <Mail size={16} className="mr-2"/>
          </Button>
          <Button name="Delete" color="default">
            <Trash2 size={16} className="mr-2"/>
          </Button>
        </div>
        <div className="flex items-center text-sm text-gray-500 space-x-3">
          <span>1–50 of 3,452</span>
          <button className="w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center">
            <ChevronLeft size={16} />
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    )
}