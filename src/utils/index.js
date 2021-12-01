import { useEffect } from "react";

const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    if (isFalsy(result[key])) {
      delete result[key];
    }
  });
  return result;
};
export const useMount = (callBack) => {
  useEffect(() => {
    callBack();
  }, []);
};
