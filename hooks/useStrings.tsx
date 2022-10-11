export const useStrings = () => {
  function capitalizeFirst(str: string) {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  }

  return { capitalizeFirst };
};
