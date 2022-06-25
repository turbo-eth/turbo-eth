import { Proposal } from "@/pages";
import React from "react";

type ProposalsProps = {
  proposals: Proposal[];
};

const Proposals = ({ proposals }: ProposalsProps) => {
  return (
    <div className="p-4 bg-white mx-10 rounded">
      <h1 className="text-2xl text-black font-semibold">Recent Proposals</h1>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Proposal
              </th>
              <th scope="col" className="px-6 py-3">
                Guild
              </th>
              <th scope="col" className="px-6 py-3">
                Funding
              </th>
              <th scope="col" className="px-6 py-3">
                Voting or Progress Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="flex items-center gap-2 hover:underline cursor-pointer">
                  <img src={"/assets/icons/Arrow.svg"} className="h-4 w-4" />
                  <h2 className="text-base">
                    Launching our social media channel
                  </h2>
                </div>
                <p className="text-gray-500 ml-6">
                  Submitted by @kames on June 10, 2022
                </p>
              </th>
              <td className="px-6 py-4 ">Marketing</td>
              <td className="px-6 py-4">$50</td>
              <td className="px-6 py-4">
                <p className="text-gray-500 text-xs">Ends July 4, 2022</p>
                <div className="flex gap-10 mt-1 items-center">
                  <div className="flex gap-2 items-center">
                    <div className="h-7 w-7 rounded-full border border-green-400 items-center justify-center align-middle text-center">
                      <p className="mt-0.5">👍</p>
                    </div>
                    <div className="text-green-400 font-bold leading-3">
                      <p>50</p>
                      <p>Voted Yes</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="h-7 w-7 rounded-full border border-red-400 items-center justify-center align-middle text-center">
                      <p className="mt-0.5">👎</p>
                    </div>
                    <div className="text-red-400 font-bold leading-3">
                      <p>50</p>
                      <p>Voted No</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="h-7 w-7 rounded-full border border-purple-400 items-center justify-center align-middle text-center">
                      <p className="mt-0.5">🙊</p>
                    </div>
                    <div className="text-purple-400 font-bold leading-3">
                      <p>50</p>
                      <p>Abstained</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <div className="flex items-center gap-2 hover:underline cursor-pointer">
                  <img src={"/assets/icons/Arrow.svg"} className="h-4 w-4" />
                  <h2 className="text-base">
                    Finalize partnership with Optimism
                  </h2>
                </div>
                <p className="text-gray-500 ml-6">
                  Submitted by @annette on June 23, 2022
                </p>
              </th>
              <td className="px-6 py-4 ">Growth</td>
              <td className="px-6 py-4">$1,000</td>
              <td className="px-6 py-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-500 dark:text-white">
                    Started May 20, 2022
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-white">
                    Due Aug 5, 2022
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proposals;
