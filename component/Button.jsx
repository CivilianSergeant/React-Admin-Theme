export default function Button({name,color,children}){
     
     

    let className =`h-10 flex items-center px-4 py-1 text-sm rounded hover:cursor-pointer`
    switch(color){
        case 'default':
            className+= ` bg-gray-200 border-b border-gray-300 hover:bg-gray-300 font-bold text-gray-900 shadow`
            break;
        case 'red':
            className+= ` bg-red-700 hover:bg-red-600 font-bold text-white shadow`
            break;
        case 'blue':
            className+= ` bg-blue-700 hover:bg-blue-600 font-bold text-white shadow`
            break;
    }
    return (
        <button className={className}>
            {children}
            <span>{name}</span>
        </button>
    )
}