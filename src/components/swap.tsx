import React, { useEffect } from "react";
import useSwap from "../hooks/useSwap";

const Swap: React.FC = () => {
  const { handleSwap, isSwapLoading, swapProcessStatus } = useSwap();

  useEffect(() => {
    // Optional: Fetch initial data here if needed
  }, []);

  return <div>{/* Your existing swap component logic */}</div>;
};

export default Swap;
