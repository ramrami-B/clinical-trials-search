import { useEffect, useState } from "react";
import { localCache } from "../utils/LocalCache";
import { Axios } from "../api/AxiosClient";
import { DataType } from "../constants/@type/data";

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const [data, setData] = useState<DataType[]>([]);

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
