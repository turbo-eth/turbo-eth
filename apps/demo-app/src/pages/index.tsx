import Link from "next/link";

import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="dark: mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white">
        <h1 className="m-0 mb-0 text-7xl font-bold">
          <span className="font-bold">Build</span> Web3{" "}
          <span className="font-bold">Better</span>
        </h1>
        <h3 className="text-2xl font-light leading-4">
          Ethereum dApp Developer Build System
        </h3>
      </div>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="card col-span-4">
              <span className="text-2xl">🏗️</span>
              <h3 className="text-xl font-semibold">TurboRepo + pNPM</h3>
              <p className="">
                High-performance build system and a fast, disk space efficient
                package manager.
              </p>
            </div>
            <div className="card col-span-4">
              <span className="text-2xl">🌈</span>
              <h3 className="text-xl font-semibold">Rainbow + WAGMI</h3>
              <p className="">
                Streamlined wallet integration and ready-to-go WAGMI component
                catalog.
              </p>
            </div>
            <div className="card col-span-4">
              <span className="text-2xl">🛠️</span>
              <h3 className="text-xl font-semibold">Hardhat + Foundry</h3>
              <p className="">
                Opinionated smart contract boilerplate with testing, linting,
                forking, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold">WAGMI Library</h1>
            <h3 className="text-2xl font-light">
              Modular Frontend Web3 components
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="card col-span-4">
              <h3 className="text-xl font-semibold">Core Components</h3>
              <p className="">
                Address - Balance - BlockNumber - IsWalletConnected -
                WalletBalance - WalletEnsName - WalletEnsAddress - WalletNonce
              </p>
              <Link className="font-bold" href="/packages/core-wagmi">
                View Demo
              </Link>
            </div>
            <div className="card col-span-4">
              <h3 className="text-xl font-semibold">ERC20 Components</h3>
              <p className="">
                useERC20ContractRead, ERC20Approve, ERC20Balance, ERC20Mint,
                ERC20Transfer, ERC20TransferFrom, WalletERC20Balance
              </p>
              <Link className="font-bold" href="/packages/erc20-wagmi">
                View Demo
              </Link>
            </div>
            <div className="card col-span-4">
              <h3 className="text-xl font-semibold">ERC721 Components</h3>
              <p className="">coming soon</p>
              <Link className="font-bold" href="/packages/erc721-wagmi">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 bg-gradient-to-r from-gray-700 via-gray-900 to-black py-24 text-white">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid grid-cols-12 gap-x-8 ">
            <div className="order-2 col-span-6">
              <div
                className=""
                style={{
                  width: "130%",
                  // marginLeft: "-60%",
                }}
              >
                <img src="/ide.png" alt="ide" className="w-full rounded-md" />
              </div>
            </div>
            <div className="col-span-6 flex items-center justify-center">
              <div className="px-8">
                <h3 className="text-5xl font-bold">Code. Test. Ship.</h3>
                <p className="">
                  Build production ready Web3 applications now:
                </p>
                <ul className="mt-4 list-inside list-disc pl-4 pt-0">
                  <li className="text-normal">Hardhat + Foundry</li>
                  <li className="text-normal">Jest and Mocha Testing</li>
                  <li className="text-normal">RainbowKit + Tailwind + Next</li>
                  <li className="text-normal">
                    Zero-Config TypeScript Modules
                  </li>
                  <li className="text-normal">ESLint/Prettier</li>
                  <li className="text-normal">Task Pipelines</li>
                  <li className="text-normal">Parallel Execution</li>
                </ul>
                <p className="">
                  Ready to ship 🚀{" "}
                  <a className="font-semibold text-blue-200" href="">
                    Let's Get Started{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
