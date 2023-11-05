import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller: AbortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError((err as AxiosError).message);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
