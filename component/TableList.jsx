import TableListItem from "./TableListItem";


export default function TableList({datasource}) {

  

  return (
    <div className="bg-white shadow rounded-lg divide-y">
      {/* Row 1 - Unread */}
      {
        datasource.items.map(data=>{
          return (<TableListItem key={data.id} item={data} contextVisible={false}/>)
        })
      }
    </div>
  )
}