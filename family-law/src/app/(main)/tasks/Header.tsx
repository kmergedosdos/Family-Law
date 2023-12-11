"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const ROUTES: { path: string; name: string }[] = [
  { path: "/tasks/all", name: "All" },
  { path: "/tasks/email", name: "Email" },
  { path: "/tasks/drafts", name: "Drafts" },
  { path: "/tasks/meetings", name: "Calls/Meetings" },
  { path: "/tasks/court-appearance", name: "Court Appearance" },
  { path: "/tasks/other", name: "Other" },
];

const TasksHeader = () => {
  const pathname = usePathname();

  if (pathname === "/tasks") {
    redirect(ROUTES[0].path);
  }

  return (
    <div>
      <nav className="flex gap-[1px] border-b border-slate-200 bg-slate-200">
        {ROUTES.map((route) => (
          <Link key={route.path} href={route.path}>
            <div
              className={`py-[0.5em] pl-[1em] pr-[2em] hover:bg-white ${
                pathname === route.path && "bg-white"
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

export default TasksHeader;
