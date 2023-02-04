export const getLoading = ({ transactions }) => transactions.loading;
export const getStatistic = ({ transactions }) => transactions.statistic.transactions;
export const getDateArr = ({ transactions }) => transactions.statistic.dateArr;
export const getTransactions = ({ transactions }) => transactions.transactions;
export const getTransactionsError = ({ transactions }) =>
  transactions.error?.data?.message;
  export const getLoadingAddTransaction = ({ transactions }) =>
    transactions.loadingAddTrans;
