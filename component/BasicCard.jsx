import { Trash2, Edit } from "lucide-react";
export default function BasicCard({item}) {
    return (
        <div
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <div className="flex gap-2">
                    <Edit className="w-5 h-5 text-blue-500 hover:text-blue-600 cursor-pointer" />
                    <Trash2 className="w-5 h-5 text-red-500 hover:text-red-600 cursor-pointer" />
                </div>
            </div>
            <p className="text-gray-600">{item.email}</p>

        </div>
    )
}