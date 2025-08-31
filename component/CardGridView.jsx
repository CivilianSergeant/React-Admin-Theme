
import BasicCard from "./BasicCard";
export default function CardGridView({datasource}){
    return (
        <div className="p-6  min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              {datasource.map((item) => (
                <BasicCard key={item.id} item={item}/>
              ))}
            </div>
          </div>
    )
}