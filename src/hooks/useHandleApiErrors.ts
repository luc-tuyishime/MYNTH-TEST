import { showProcessModal } from "./useProcessModal";

function useHandleApiError() {
  const handleApiError = (error: any) => {
    const errorInfo = error?.response?.data || {
      info: "An unknown error occurred",
    };
    const errorMessage = errorInfo.message || errorInfo.info;

    showProcessModal("failed", "Error", errorMessage);

    console.error("API Error:", error);
  };

  return { handleApiError };
}

export default useHandleApiError;
