export default function Navbar(){
    return(
        <nav className="bg-white p-2 flex justify-between">
      <a href="" className="font-bold text-gray-700 text-2xl"> OpenTable </a>
      <div>
        <div className="flex">
          <button
            className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
          >
            Sign in
          </button>
          <button className="border p-1 px-4 rounded">Sign up</button>
        </div>
      </div>
    </nav>
    )
}