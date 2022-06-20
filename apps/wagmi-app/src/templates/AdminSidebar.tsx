import { Activity, GitHub } from "react-feather";

import { ColorMode } from "@/components/App/ColorMode";
import { AppLogo } from "@/components/App/Logo";
import { MenuItemSidebar } from "@/components/Layout/Menu/MenuItemSidebar";
import { LinkExternal } from "@/components/LinkExternal";

const AdminSidebar = () => {
  return (
    <div className="z-50 col-span-2 flex h-screen flex-col bg-white shadow-sm shadow-gray-300 dark:shadow-gray-900">
      <div className="align-self-bottom z-10 flex h-full flex-col justify-between p-4 dark:bg-gray-900 dark:text-white">
        <div className="area-top">
          <div className="flex items-center justify-between">
            <AppLogo className="text-neutral-800 dark:text-white" />
            <ColorMode />
          </div>
          <hr className="my-2 opacity-20" />
          <nav>
            <ul className="-ml-3 flex list-none flex-col pl-0 text-xs md:min-w-full md:flex-col">
              <MenuItemSidebar
                label="Dashboard"
                href="/dashboard"
                image={<Activity width={16} />}
              />
            </ul>
          </nav>
        </div>
        <div className="area-bottom">
          <nav>
            <ul className="text-2xs flex list-none flex-col md:min-w-full md:flex-col">
              <LinkExternal
                classNames="text-xs"
                href="https://github.com/turbo-eth/turbo-eth"
              >
                <div className="flex items-center justify-between">
                  <span className="">Github</span>
                  <GitHub width={16} />
                </div>
              </LinkExternal>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
