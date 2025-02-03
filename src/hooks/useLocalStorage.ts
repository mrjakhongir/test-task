import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn") || "false");
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const loginUser = (key: string, value: boolean) => {
    localStorage.setItem(key, JSON.stringify(value));
    setIsLoggedIn(value);
  };

  const logoutUser = (key: string) => {
    localStorage.removeItem(key);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, loginUser, logoutUser };
};

export default useLocalStorage;
