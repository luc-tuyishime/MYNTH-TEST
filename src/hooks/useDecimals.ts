function useDecimals() {
  const toCardanoTokens = (amount: string, decimals = 6) => {
    return (parseFloat(amount) * 10 ** decimals).toString();
  };

  return { toCardanoTokens };
}

export default useDecimals;
