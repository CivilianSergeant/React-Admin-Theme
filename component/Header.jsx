export default function Header({pageTitle}){
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">{pageTitle}</h1>
          <button className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
        </header>
    )
}