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
            Soulcialites
        </h1>
        <h3 className="text-2xl font-light leading-4">
          Sybil Resistant On-Chain Representative Democracy
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
    </Main>
  );
};

export default Index;
