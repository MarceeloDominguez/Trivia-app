import { useEffect, useState } from "react";

export const useTrivia = (idCategory, idDifficulty) => {
  const [resultsApi, setResultsApi] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const respFetch = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${idCategory}&difficulty=${idDifficulty}&type=multiple`
        );

        const resp = await respFetch.json();
        setResultsApi(resp.results);
      } catch (error) {}
      setLoading(false);
    })();
  }, [idCategory, idDifficulty]);

  return { resultsApi, loading, setLoading };
};
