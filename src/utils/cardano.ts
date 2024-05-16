import { getApiUrl } from "./api";
import config from "../libs/Config";

export const handleSwapFromCardanoWallet = async (data: SwapInput) => {
  // Cardano swap logic
  const backendBaseUrl = config.get("backend.uri");
  let swapBuildUrl: string;
};
