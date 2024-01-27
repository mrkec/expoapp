import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TokenCont = createContext();

const TokenProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    user: null,
  });
  const getToken = async () => {
    const data = await AsyncStorage.getItem("auth");
    // console.log(data);
    const parseData = JSON.parse(data);
    if (parseData) {
      setAuth({
        ...auth,
        token: parseData.token,
        user: parseData.user,
      });
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <TokenCont.Provider value={{ auth, setAuth }}>
      {children}
    </TokenCont.Provider>
  );
};

const useTokenContext = () => {
  return useContext(TokenCont);
};
export { TokenCont, TokenProvider, useTokenContext };
