import * as React from "react";
import { useContractRead } from "wagmi";
import classNames from "classnames";
import Molecule from "@molecule-labs/molecule-sol/deployments/localhost/Molecule.json";

interface NFTCardProps {
  className?: string;
  tokenId: string | number;
}

export const NFTCard = ({ className, tokenId = "0" }: NFTCardProps) => {
  const containerClassName = classNames(className, "NFTCard");

  const { data, isError, isLoading, error } = useContractRead(
    {
      addressOrName: Molecule.address,
      contractInterface: Molecule.abi,
    },
    "tokenURI",
    {
      args: [tokenId],
    }
  );

  const [tokenData, setTokenData] = React.useState();
  React.useEffect(() => {
    if (data) {
      (async () => {
        const json = Buffer.from(data.substring(29), "base64").toString();
        const result = JSON.parse(json);
        setTokenData(result);
      })();
    }
  }, [data]);

  if (isError) {
    return <div>Error requesting NFT data</div>;
  }

  return (
    <div className={containerClassName}>
      <div className="cars w-full">
        <img src={tokenData?.image || ""} />{" "}
        <h3 className="font-normal text-lg">{tokenData?.name}</h3>
        <h3 className="font-normal text-lg">{tokenData?.description}</h3>
      </div>
    </div>
  );
};

export default NFTCard;
