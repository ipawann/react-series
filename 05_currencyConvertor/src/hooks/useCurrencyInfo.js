import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!currency) return;

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data);
        setData(data[currency]);  // ✅ Critical fix
      })
      .catch((err) => {
        console.error("Failed to fetch currency data", err);
        setData({});
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
