import { ConnectButton } from "@rainbow-me/rainbowkit";

import { LinkExternal } from "@/components/LinkExternal";

const AdminNavbar = () => {
  return (
    <nav className="z-50 grid w-full grid-cols-12 px-5 py-4 shadow-sm shadow-gray-400 dark:bg-gray-700 dark:shadow-gray-900">
      <div className="col-span-6 flex flex-1 items-center">
        <ul className="text-2xs flex list-none flex-col md:min-w-full md:flex-col">
          <li>
            <LinkExternal
              classNames="text-xs"
              href="https://github.com/turbo-eth/turbo-eth"
            >
              Documentation
            </LinkExternal>
          </li>
        </ul>
      </div>
      <div className="col-span-6 flex w-full items-center justify-end px-2">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default AdminNavbar;
