import CitizenV1 from "@democracy-labs/governance-sol/deployments/localhost/CitizenV1.json";
import {
  CitizenNFTCard,
  CitizenV1IssueFromFounder,
  CitizensLatestCardList,
} from "@democracy-labs/governor-alpha-wagmi";
import Link from "next/link";

import IsMounted from "@/components/IsMounated";
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
        <h1 className="m-0 mb-0 text-7xl font-bold">Soulcialites</h1>
        <h3 className="text-2xl font-light leading-4">
          Sybil Resistant On-Chain Representative Democracy
        </h3>
      </div>

      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <div className="card">
            <h3 className="text-4xl font-normal">Add Member/Citizen</h3>
            <p className="">Managed by Founding Team</p>
            <hr className="my-3 opacity-5" />
            <CitizenV1IssueFromFounder contract={CitizenV1.address} />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <div className="card">
            <h3 className="text-4xl font-normal">Latest Citizens</h3>
            <hr className="my-3 opacity-5" />
            <IsMounted>
              <CitizensLatestCardList contract={CitizenV1.address} />
              {/* <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-4">
                  <CitizenNFTCard contract={CitizenV1.address} />
                </div>
                <div className="col-span-4">
                  <CitizenNFTCard contract={CitizenV1.address} tokenId="2" />
                </div>
              </div> */}
            </IsMounted>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
