import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T,>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller: AbortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError((err as AxiosError).message);
      });

    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
