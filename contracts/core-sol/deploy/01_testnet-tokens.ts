import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hardhat;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("TurboToken", {
    contract: "MintableERC20",
    from: deployer,
    args: ["Turbo ETH", "TRBO"],
    skipIfAlreadyDeployed: true,
    log: true,
  });
}
