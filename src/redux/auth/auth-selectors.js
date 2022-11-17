export const getIsLogin = ({ auth }) => auth.isLogin;
export const getFirstLoading = ({ auth }) => auth.firstLoading;
export const getFirstName = ({ auth }) => auth.user.username;
export const getBalance = ({ auth }) => auth.user.balance;
