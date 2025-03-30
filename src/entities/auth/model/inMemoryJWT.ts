const JwtInMemo = () => {
  let inMemoryJWT: null | string = null;
  let refreshTimeoutId: null | number = null;
  const refreshToken = (expiration: number) => {
    const timeoutTrigger = expiration - 10000;

    refreshTimeoutId = setTimeout(() => {}, timeoutTrigger);
  };
  const getToken = () => inMemoryJWT;
  const getRefreshTimeoutId = () => refreshTimeoutId;
  const abortRefreshToken = () => {
    if (refreshTimeoutId) {
      clearInterval(refreshTimeoutId);
    }
  };
  const setToken = (token: string, tokenExpiration: number) => {
    inMemoryJWT = token;
    refreshToken(tokenExpiration);
  };
  const deleteToken = () => {
    inMemoryJWT = null;
    abortRefreshToken();
    localStorage.setItem("logout", Date.now().toString());
  };

  return { getToken, setToken, deleteToken, getRefreshTimeoutId };
};

export default JwtInMemo();
