export default function Header() {
  return (
    <header className="bg-header z-10 sticky top-0">
      <nav className="container mx-auto">
        <div className="flex flex-1 gap-4 text-sm items-center">
          <span>
            <img width={60} src="logo.png" alt="" />
          </span>
          <a className="px-3" href="">Home</a>
          <a className="px-3" href="">About</a>
          <a className="px-3" href="">Download App</a>
          <button className="bg-red-500 cursor-pointer text-white px-6 ml-auto rounded-full p-3 hover:bg-red-400 hover:shadow">Download App</button>
        </div>
        
      </nav>
    </header>
  );
}
