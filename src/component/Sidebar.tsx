"use client";
import Link from "next/link";
import { SideMenuList, userRoles } from "../utils";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../app/_context/AuthContextProvider";

export default function SideBar() {
  const pathName = usePathname();
  const auth = useContext(AuthContext);
  console.log("auth context ", { auth });
  if (!auth?.user?.isLoggedIn) return null;
  const userRole = auth.user.role;

  return (
    <div className="text-white bg-teal-600 flex-col flex justify-left gap-1 w-1/5">
      {SideMenuList?.map(({ name, path, key, restrictedRole }) => {
        if (restrictedRole.includes(userRole)) return null;
        return (
          <Link
            key={key}
            href={path}
            className={`px-[10px] py-[5px] cursor-pointer ${path === pathName ? "text-blue-200" : "text-white"}`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
