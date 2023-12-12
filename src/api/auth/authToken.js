export const AuthToken = () => {
  return sessionStorage.getItem("_token");
};

export default AuthToken;
