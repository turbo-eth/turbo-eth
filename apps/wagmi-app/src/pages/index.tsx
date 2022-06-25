import Link from "next/link";

import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { GovernorAlphaPropose } from '@democracy-labs/governor-alpha-wagmi' 
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
        <div className="container mx-auto max-w-screen-md">
            <div className='card'>
              <h3 className='font-normal text-4xl'>Create A Proposal</h3>
              <hr className="my-3" />
              <GovernorAlphaPropose />
            </div>
          </div>
      </section>
    </Main>
  );
};

export default Index;
