export const getIsLogin = ({ auth }) => auth.isLogin;
export const getFirstLoading = ({ auth }) => auth.firstLoading;
export const getFirstName = ({ auth }) => auth.user.name;
export const getBalance = ({ auth }) => auth.user.balance;
export const getAuthError = ({ auth }) => auth.error?.data?.message;
