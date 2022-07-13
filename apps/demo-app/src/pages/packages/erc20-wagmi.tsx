import TokenA from "@turbo-eth/core-sol/deployments/localhost/TokenA.json";
import {
  ERC20Approve,
  ERC20Mint,
  ERC20Transfer,
  ERC20TransferFrom,
  WalletERC20Balance,
  WalletERC20Mint,
} from "@turbo-eth/erc20-wagmi";

import IsMounted from "@/components/IsMounated";
import ModuleComponentPreview from "@/components/ModuleComponentPreview";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const examples = [
  {
    title: "Wallet ERC20 Balance",
    code: <WalletERC20Balance token={TokenA.address} />,
    url: "https://github.com",
  },
  {
    title: "Wallet ERC20 Mint",
    code: (
      <WalletERC20Mint
        token={TokenA.address}
        amount={"100"}
        symbol={TokenA.args[1]}
        to=""
      />
    ),
    url: "https://github.com",
  },
  {
    title: "ERC20 Approve",
    code: <ERC20Approve token={TokenA.address} />,
    url: "https://github.com",
  },
  {
    title: "ERC20 Mint",
    code: <ERC20Mint token={TokenA.address} />,
    url: "https://github.com",
  },
  {
    title: "ERC20 Transfer",
    code: <ERC20Transfer token={TokenA.address} />,
    url: "https://github.com",
  },
  {
    title: "ERC20 TransferFrom",
    code: <ERC20TransferFrom token={TokenA.address} />,
    url: "https://github.com",
  },
];

const About = () => (
  <Main
    meta={
      <Meta
        title={`${AppConfig.title} | ${AppConfig.description}`}
        description={AppConfig.description}
      />
    }
  >
    <section className="py-12">
      <div className="container mx-auto max-w-screen-xl">
        <IsMounted>
          <h3 className="text-3xl font-bold">Token Examples</h3>
          <div className="">
            <span className="font-bold">{TokenA.args[0]}</span>
            <span className="ml-2">({TokenA.args[1]})</span>
          </div>
          <hr className="mb-10 mt-4 opacity-50" />
          <div className="grid grid-cols-12 gap-x-4 gap-y-6">
            {examples.map((exm, idx) => (
              <ModuleComponentPreview key={idx} {...exm} />
            ))}
          </div>
        </IsMounted>
      </div>
    </section>
  </Main>
);

export default About;
