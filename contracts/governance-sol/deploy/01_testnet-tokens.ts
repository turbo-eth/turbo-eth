import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hardhat;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("TokenA", {
    contract: "MintableERC20",
    from: deployer,
    args: ["Token A", "ATOK"],
    skipIfAlreadyDeployed: true,
    log: true,
  });

  await deploy("TokenB", {
    contract: "MintableERC20",
    from: deployer,
    args: ["Token B", "BTOK"],
    skipIfAlreadyDeployed: true,
    log: true,
  });
}
