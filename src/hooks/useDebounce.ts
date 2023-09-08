import { useEffect, useState } from "react";
import { localCache } from "../utils/LocalCache";
import { Axios } from "../api/AxiosClient";
import { DataType } from "../constants/@type/data";

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(true);
      let tempDataList = localCache.get(debounceValue);

      if (!tempDataList && debounceValue) {
        tempDataList = await Axios.search(debounceValue);
        localCache.set(debounceValue, tempDataList);
      }

      setIsLoading(false);
      setDataList(tempDataList);
    };

    fetchData();
  }, [debounceValue]);

  return { dataList, isLoading };
};

export default useDebounce;
