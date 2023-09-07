import { useEffect, useState } from "react";
import { localCache } from "../utils/localCaching";
import { Axios } from "../api/axios";
import { TermsType } from "../constants/@type/termsType";

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const [data, setData] = useState<TermsType[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  useEffect(() => {
    const fetchData = async () => {
      let tempData = localCache.get(debounceValue);

      if (!tempData && debounceValue) {
        tempData = await Axios.search(debounceValue);
        localCache.set(debounceValue, tempData);
      }

      setData(tempData);
    };

    fetchData();
  }, [debounceValue]);

  return data;
};

export default useDebounce;
