import * as React from "react";
import { useContractRead } from "wagmi";
import classNames from "classnames";
import Molecule from "@molecule-labs/molecule-sol/deployments/localhost/Molecule.json";

interface NFTRenderProps {
  className?: string;
  tokenId: string | number | undefined;
}

export const NFTRender = ({ className, tokenId = "0" }: NFTRenderProps) => {
  const containerClassName = classNames(className, "NFTRender");

  const { data, isError } = useContractRead(
    {
      addressOrName: Molecule.address,
      contractInterface: Molecule.abi,
    },
    "tokenURI",
    {
      args: [tokenId],
    }
  );

  const [imgSrc, setImgSrc] = React.useState();
  React.useEffect(() => {
    if (data) {
      (async () => {
        const json = Buffer.from(data.substring(29), "base64").toString();
        const result = JSON.parse(json);
        setImgSrc(result.image);
      })();
    }
  }, [data]);

  if (isError) {
    return <div>Error requesting NFT data</div>;
  }

  return (
    <div className={containerClassName}>
      <img src={imgSrc} />
    </div>
  );
};

export default NFTRender;
