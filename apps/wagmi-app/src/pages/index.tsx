import DAOCard from "@/components/MyDashboard/DAOCard";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
// import { GovernorAlphaPropose } from '@democracy-labs/governor-alpha-wagmi'

const Index = () => {
  const { data } = useAccount();

  if (!data) {
    return (
      <div className="w-screen flex flex-col h-screen bg-black items-center justify-center text-white text-center gap-3">
        <h1 className="text-6xl font-bold">Decide the future of your DAO</h1>
        <p className="text-2xl mb-10">
          Sybil Resistant On-Chain Representative Democracy
        </p>
        <ConnectButton />
      </div>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="w-full h-full bg-black p-10">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-2xl font-semibold">Your DAOs</h1>
          <div className="flex items-center gap-3">
            <div className="border px-2 py-1 rounded border-purple-300 text-purple-300">
              Filter
            </div>
            <div className="border px-2 py-1 rounded border-purple-300 text-purple-300">
              Sort
            </div>
          </div>
        </div>
        <div className="gap-3 text-sm">
          <DAOCard
            name="Soulcialites"
            roleTier="Active Citizen"
            skills={["Product Design", "Solidity"]}
            activeProposals={3}
            expectedEarnings={1250}
            earningsToDate={2440}
            requests={[
              {
                title: "Code review for new product",
                category: "blocker",
                guild: "Product Guild",
              },
            ]}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;
