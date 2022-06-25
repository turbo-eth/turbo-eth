import React from "react";

const Guilds = () => {
  return (
    <div className="bg-white p-4 space-y-3 -mt-24 mx-10 rounded">
      <h1 className="text-2xl text-black font-semibold">Your Guilds</h1>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Active Proposals
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Requests
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Marketing
              </th>
              <td className="px-6 py-4 ">12</td>
              <td className="px-6 py-4">65%</td>
              <td className="px-6 py-4">1</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Development
              </th>
              <td className="px-6 py-4">18</td>
              <td className="px-6 py-4">85%</td>
              <td className="px-6 py-4">3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-2xl text-black font-semibold">Other Guilds</h1>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Active Proposals
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Requests
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Executive Team
              </th>
              <td className="px-6 py-4 ">12</td>
              <td className="px-6 py-4">65%</td>
              <td className="px-6 py-4">1</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Treasury
              </th>
              <td className="px-6 py-4">18</td>
              <td className="px-6 py-4">85%</td>
              <td className="px-6 py-4">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guilds;
