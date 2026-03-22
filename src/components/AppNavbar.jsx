import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CartButton from "./CartButton";
import ContactButton from "./ContactButton";
import AppLogo from "./AppLogo";

function AppNavbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-stone-200 bg-white px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:flex-row sm:items-center sm:justify-between">
      <AppLogo compact />
      <div className="flex items-center justify-end gap-3">
        <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-slate-700">
          {user?.username || "Guest"}
        </span>
        <ContactButton />
        <CartButton />
      </div>
    </div>
  );
}

export default AppNavbar;
