import Logo from "../../assets/images/Logo.png";
import { House, Telescope, Repeat2, UserRound, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkBase =
    "w-full flex flex-col items-center justify-center gap-1 py-3 rounded-2xl transition";

  const activeGlow = "bg-orange-400/40 shadow-[0_0_25px_rgba(255,106,43,0.55)]";
  const hoverSoft = "hover:bg-black/5";

  return (
    <aside className="w-24 bg-[#F5EAD7] flex flex-col items-center py-6 h-screen">
      {/* Logo */}
      <img src={Logo} alt="Bookies Logo" className="w-12 h-12 mb-14 mt-4" />

      {/* Links */}
      <nav className="flex flex-col gap-4 w-full px-3">
        <NavLink
          to="/"
          className={({ isActive }) => `${linkBase} ${isActive ? activeGlow : hoverSoft}`}
        >
          <House size={26} className="text-black" />
          <span className="text-[11px] font-semibold text-black">Home</span>
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) => `${linkBase} ${isActive ? activeGlow : hoverSoft}`}
        >
          <Telescope size={26} className="text-black" />
          <span className="text-[11px] font-semibold text-black">Explore</span>
        </NavLink>

        <NavLink
          to="/exchange"
          className={({ isActive }) => `${linkBase} ${isActive ? activeGlow : hoverSoft}`}
        >
          <Repeat2 size={26} className="text-black" />
          <span className="text-[11px] font-semibold text-black">Exchange</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => `${linkBase} ${isActive ? activeGlow : hoverSoft}`}
        >
          <UserRound size={26} className="text-black" />
          <span className="text-[11px] font-semibold text-black">Profile</span>
        </NavLink>
      </nav>

      {/* ✅ Bottom Logout */}
      <div className="mt-auto mb-12 w-full px-3">
        <NavLink
          to="/logout"
          className={({ isActive }) => `${linkBase} ${isActive ? activeGlow : hoverSoft}`}
        >
          <LogOut size={24} className="text-black" />
          <span className="text-[11px] font-semibold text-black">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
