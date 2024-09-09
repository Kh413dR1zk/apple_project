import {appleImg, bagImg, searchImg} from "../utils";
import {navLists} from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" className="w-5 h-6" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm text-gray hover:text-white cursor-pointer transition-all">
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-6 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="" className="w-5 h-6" />
          <img src={bagImg} alt="" className="w-5 h-6" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar