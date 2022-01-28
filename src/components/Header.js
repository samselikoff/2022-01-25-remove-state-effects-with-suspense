import { MenuIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <nav className="bg-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <p className="text-slate-300 font-semibold">Acme</p>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="p-2 rounded-md inline-flex items-center justify-center text-slate-200 hover:text-white hover:bg-slate-600 active:bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
            >
              <MenuIcon className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
