import React from "react";

type DAOCardProps = {
  name: string;
  roleTier: string;
  skills: string[];
  activeProposals: number;
  expectedEarnings: number;
  earningsToDate: number;
  requests: Request[];
};

interface Request {
  title: string;
  category: string;
  guild: string;
}

const DAOCard = ({
  name,
  roleTier,
  skills,
  activeProposals,
  expectedEarnings,
  earningsToDate,
  requests,
}: DAOCardProps) => {
  return (
    <div className="p-4 bg-white rounded text-sm w-full bg-base-100 divide-y cursor-pointer">
      <div className="flex items-center gap-2 pb-2">
        <h2 className="card-title text-black text-lg">{name}</h2>
        <div className="h-3 w-3 bg-green-300 rounded-full"></div>
      </div>
      <div className="flex items-center gap-10 mb-3">
        <div>
          <p className="">Tier</p>
          <div className="rounded-full border px-2 py-1 border-black text-black">
            {roleTier}
          </div>
        </div>
        <div>
          <p className="">Contributing Skills</p>
          <div className="flex gap-2">
            {skills.map((skill) => (
              <div className="rounded-full r border px-2 py-1 border-black text-black">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div>
          <p className="">Active Proposals</p>
          <h1 className="font-semibold text-4xl text-black">
            {activeProposals}
          </h1>
        </div>
        <div>
          <p className="">Expected Earnings</p>
          <h1 className="font-semibold text-4xl text-black">
            {expectedEarnings.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </h1>
        </div>
        <div>
          <p className="">Earnings to Date</p>
          <h1 className="font-semibold text-4xl text-black">
            {earningsToDate.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </h1>
        </div>
      </div>
      <div>
        <p>Requests</p>
        {requests.map((request) => (
          <div className="group">
            <h2 className="font-bold text-lg text-black group-hover:underline">
              {request.title}
            </h2>
            <div className="flex items-center text-xs gap-3">
              <div className="px-2 py-1 bg-gray-800 text-white rounded">
                {request.category}
              </div>
              <p>{request.guild}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DAOCard;
