import { getApiUrl } from "./api";
import config from "../libs/Config";

export const handleSwapFromTronLinkWallet = async (data: SwapInput) => {
  //  Tron swap logic

  const usdtContractAddress = getEnvConfig<string>(
    "tron.usdt.contract_address"
  );
};
