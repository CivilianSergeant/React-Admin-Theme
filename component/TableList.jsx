import TableListItem from "./TableListItem";


export default function TableList({datasource}) {

  

  return (
    <div className="bg-white shadow rounded-lg divide-y">
      {/* Row 1 - Unread */}
      {
        datasource.map(data=>{
          return (<TableListItem key={data.id} item={data} contextVisible={false}/>)
        })
      }
      

      {/* Row 2 - Read */}


      

      {/* Row 3 - Unread
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
      </div> */}
    </div>
  )
}