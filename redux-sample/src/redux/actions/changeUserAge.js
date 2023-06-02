export const changeUserAge = (age) => {
  return {
    type: "CHANGEAGE",
    payload: age,
  };
};
