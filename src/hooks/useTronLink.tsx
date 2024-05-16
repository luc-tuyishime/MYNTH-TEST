import { useState, useEffect } from "react";
// import TronLinkProvider from 'tronlink-provider-library';

function useTronlink() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    async function connectTronLink() {
      try {
        const tronWeb = await TronLinkProvider.request({
          method: "tron_requestAccounts",
        });
        if (tronWeb && tronWeb.defaultAddress) {
          setAddress(tronWeb.defaultAddress.base58);
        }
      } catch (error) {
        console.error("Failed to connect to TronLink:", error);
      }
    }

    connectTronLink();
  }, []);

  return { address };
}

export default useTronlink;
