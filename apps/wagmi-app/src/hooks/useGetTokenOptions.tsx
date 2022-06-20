import TokenA from "@turbo-eth/core-sol/deployments/localhost/TokenA.json";
import TokenB from "@turbo-eth/core-sol/deployments/localhost/TokenB.json";

function useGetTokenOptions() {
  const optionsTokens = [
    { value: TokenA.address, label: "Token A" },
    { value: TokenB.address, label: "Token B" },
  ];

  return optionsTokens;
}

export default useGetTokenOptions;
