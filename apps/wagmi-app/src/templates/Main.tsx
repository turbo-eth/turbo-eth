import type { ReactNode } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppColorMode } from "@/components/App/AppColorMode";
import { AppConfig } from "@/utils/AppConfig";
import AppLogo from "@/components/App/AppLogo";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white">
    {props.meta}
    <div className="min-h-vh mx-auto h-10 w-full">
      <div className="flex items-center justify-between border-b border-gray-300 px-8 py-4 dark:border-neutral-500 dark:bg-gray-700 dark:text-white">
        <div className=" align-center flex items-center justify-between">
          <AppLogo />
        </div>
        <div className="text-right">
          <ConnectButton />
        </div>
      </div>

      <div className="content bg-neutral-100 dark:bg-neutral-500">
        {props.children}
      </div>

      <div className="border-t border-gray-300 bg-white py-8 text-center text-sm dark:border-neutral-500 dark:bg-gray-700 dark:text-white">
        <div className="mb-3 flex items-center justify-center">
          <ul className="flex flex-wrap text-sm">
            <li className="mr-6">
              <a
                target={"_blank"}
                className="border-none text-gray-700 hover:text-gray-900 dark:text-white hover:dark:text-neutral-100"
                href="https://github.com/turbo-eth"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          © Copyright {new Date().getFullYear()} {AppConfig.title}
        </div>
        <AppColorMode className="mt-3" />
      </div>
    </div>
  </div>
);

export { Main };
