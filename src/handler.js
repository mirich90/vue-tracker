export const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

export const saveTransactionsToLocalStorage = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
