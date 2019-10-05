let cacheToken = "";

const LOCAL_STORAGE_TOKEN = "LOCAL_STORAGE_TOKEN";

export const getToken = (): string => {
  if (cacheToken) {
    return cacheToken;
  }
  const tokenString = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  if (tokenString) {
    try{
      const json = JSON.parse(tokenString);
      cacheToken = json.token;
      return cacheToken;
    } catch(e) {}
  }
  return "";
}

export const removeToken = () => {
  cacheToken = "";
  localStorage.removeItem(LOCAL_STORAGE_TOKEN);
}

export const setToken = (json: any) => {
  cacheToken = json.token;
  localStorage.setItem(LOCAL_STORAGE_TOKEN, JSON.stringify(json));
}
