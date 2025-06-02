import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:bg-header lg:bg-header z-10 sticky top-0">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 relative">
          {/* Mobile Hamburger - top left */}
          <div className="md:hidden flex items-center inset-y-0 left-0 z-20">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow"
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <span className="md:mx-0 md:static absolute right-0 inset-y-0 flex items-center bg-white rounded-full p-2 shadow md:bg-transparent md:p-0">
            <img width={48} className="h-10 w-auto" src="logo.png" alt="Logo" />
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center gap-4 text-sm mx-auto">
            <a className="px-3 py-1" href="">
              Home
            </a>
            <a className="px-3 py-1" href="">
              About
            </a>
            <a className="px-3 py-1" href="">
              Download App
            </a>
            <div className="flex-1" />
            <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-red-400 hover:shadow text-xs sm:text-sm">
              Download App
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span>
              <img
                width={40}
                className="h-8 w-auto"
                src="logo.png"
                alt="Logo"
              />
            </span>
            <button
              className="p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 p-4 text-base">
            <a
              className="py-2 px-2 rounded hover:bg-gray-100"
              href=""
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              className="py-2 px-2 rounded hover:bg-gray-100"
              href=""
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              className="py-2 px-2 rounded hover:bg-gray-100"
              href=""
              onClick={() => setOpen(false)}
            >
              Download App
            </a>
            <button className="mt-4 bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-red-400 hover:shadow text-sm">
              Download App
            </button>
          </nav>
        </div>
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
