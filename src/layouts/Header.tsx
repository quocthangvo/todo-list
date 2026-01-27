import { BsSearch } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle, MdManageAccounts } from "react-icons/md";
import type { HeaderProps } from "../utils/props/Header";

const Header = ({ dropdown, setDropdown }: HeaderProps) => {
  return (
    <div className="border-b border-gray-300 flex justify-between items-center p-4">
      <div className="text-2xl font-bold">TodoList</div>
      <div className="flex items-center gap-2">
        <div className="relative w-64">
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-400 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <MdAccountCircle
          className="cursor-pointer text-4xl"
          onClick={() => setDropdown(!dropdown)}
        />
        {dropdown && (
          <div className="absolute right-4 top-16 w-44 bg-white rounded-lg border border-gray-200 z-50">
            <button className="w-full px-4 py-2 text-left  hover:bg-gray-200 hover:rounded-xl flex items-center gap-2">
              <MdManageAccounts className="text-xl" /> Acount
            </button>
            <button className="w-full px-4 py-2 text-left  hover:bg-gray-200 hover:rounded-xl flex items-center gap-2">
              <IoMdSettings className="text-xl" /> Setting
            </button>
            <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200 hover:rounded-xl flex items-center gap-2">
              <CiLogout className="text-xl" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
