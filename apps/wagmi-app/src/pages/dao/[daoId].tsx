import Guilds from "@/components/DAO/Guilds";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { useRouter } from "next/router";
import React from "react";
import { useCitizenV1ContractRead } from "@democracy-labs/governor-alpha-wagmi";
import CitizenV1 from "@democracy-labs/governance-sol/deployments/localhost/CitizenV1.json";
import Proposals from "@/components/DAO/Proposals";

const DAOPage = () => {
  const router = useRouter();
  const { daoId } = router.query;

  const { data, loading, error } = useCitizenV1ContractRead(
    CitizenV1.address,
    "issue",
    ["0x3417aD1d79D9508912E8d7f3B9167085500b12CE", "test"]
  );

  console.log(data, "data");
  console.log("Error:", error);

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="w-full bg-black p-10 pb-32">
        <h1 className="text-white text-2xl font-semibold mb-3">
          {daoId} DAO Overview
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-gray-800 p-4 flex items-baseline gap-3">
            <div>
              <h1 className="text-4xl text-white font-bold">4</h1>
              <p className="text-white text-sm">Active Proposals</p>
            </div>
            <div>
              <progress
                className="progress progress-primary w-32"
                value="70"
                max="100"
              ></progress>
              <p className="text-sm text-white">202 / 285 Complete</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 flex">
            <div>
              <h1 className="text-4xl text-white font-bold">$24,200</h1>
              <p className="text-sm text-white">Total funds in Treasury</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 flex">
            <div>
              <h1 className="text-4xl text-white font-bold">2347</h1>
              <p className="text-sm text-white">DAO Members</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded p-4 mt-3">
          <h1 className="font-bold text-black">KPIs</h1>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-semibold">50,000</h1>
              <p className="text-sm">Transactions Processed</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$53.2mn</h1>
              <p className="text-sm">Dollars Granted</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <Guilds />
        <Proposals proposals={[]} />
      </div>
    </Main>
  );
};

export default DAOPage;
