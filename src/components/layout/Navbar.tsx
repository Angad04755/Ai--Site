function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="font-bold text-lg">Logo</div>

        {/* Menu */}
        <ul className="flex items-center gap-6">
          <li className="hover:bg-gray-700 rounded-lg px-3 py-2 transition duration-200 cursor-pointer">
            GenAI Launchpad
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;