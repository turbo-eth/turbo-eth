import type { ReactNode } from "react";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function Admin({ children, meta }: IMainProps) {
  return (
    <div className="grid h-full max-h-screen min-h-screen grid-cols-12 overflow-hidden">
      {meta}
      <AdminSidebar />
      <div className="z-10 col-span-10 max-h-screen">
        <div className="overflow-autos flex h-full max-h-screen flex-col">
          <div className="area-top z-10 flex-none">
            <AdminNavbar />
          </div>
          <main className="area-main flex-6 basis-4/5s mx-auto w-full grow overflow-auto bg-gray-100 p-10 dark:bg-gray-800 dark:text-white">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
