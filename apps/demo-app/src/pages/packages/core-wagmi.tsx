import {
  WalletAddress,
  WalletBalance,
  WalletEnsAddress,
  WalletEnsName,
  WalletNonce,
} from "@turbo-eth/core-wagmi";

import IsMounted from "@/components/IsMounated";
import ModuleComponentPreview from "@/components/ModuleComponentPreview";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const examples = [
  {
    title: "Wallet Address",
    code: <WalletAddress />,
    url: "https://github.com",
  },
  {
    title: "Wallet Balance",
    code: <WalletBalance />,
    url: "https://github.com",
  },
  {
    title: "Wallet Nonce",
    code: <WalletNonce />,
    url: "https://github.com",
  },
  {
    title: "Wallet ENS Address",
    code: <WalletEnsAddress />,
    url: "https://github.com",
  },
  {
    title: "Wallet ENS Name",
    code: <WalletEnsName />,
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
          <h3 className="text-3xl font-bold">Wallet Examples</h3>
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
