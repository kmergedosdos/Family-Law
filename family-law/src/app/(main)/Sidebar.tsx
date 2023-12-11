"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES: { path: string; name: string }[] = [
  { path: "/team", name: "Team" },
  { path: "/cases", name: "Cases" },
  { path: "/messaging", name: "Messaging" },
  { path: "/billing", name: "Billing" },
  { path: "/calendar", name: "Calendar" },
  { path: "/tasks", name: "Tasks" },
  { path: "/documents", name: "Documents" },
];

const MainSidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex flex-col">
        {ROUTES.map((route) => (
          <Link
            key={route.path}
            href={pathname.startsWith(route.path) ? pathname : route.path}
          >
            <div
              className={`py-[0.5em] pl-[1em] pr-[2em] hover:bg-white ${
                pathname.startsWith(route.path) && "bg-white"
              }`}
            >
              {route.name}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainSidebar;
