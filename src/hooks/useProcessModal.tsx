import { useState } from "react";

export type ProcessStatus =
  | "generating"
  | "building"
  | "signing"
  | "submitting"
  | "failed"
  | "success";

function useProcessModal() {
  const [swapProcessStatus, setSwapProcessStatus] =
    useState<ProcessStatus>("generating");

  const showProcessModal = (
    status: ProcessStatus,
    title?: string,
    message?: string
  ) => {
    setSwapProcessStatus(status);
    // ... (Logic to update the modal content with title and message)
  };

  const showSuccessModal = (transactionUrl: string, addressUrl: string) => {
    // ... (Logic to show the success modal)
  };

  return { swapProcessStatus, showProcessModal, showSuccessModal };
}

export default useProcessModal;
