import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }

  return resData;
}

//Datanın ilk değeri boş bırakılırsa useHttp hookunun kullanıldığı komponent içerisindeki jsx data okuyamadığı için hata verecektir. Çünkü jsx kodu buradaki state güncellemelerinden daha önce renderlanır.Bu nedenle dataya ilk değer verilmeli. Datanın başlangıç değeri boş bir dizi olsa dahi hata alınmayacak.
function useHttp(url, config, initialData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialData);

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);

      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config] //sendRequest içerisinde state güncellemesi olsa dahi bu komponent defalarca renderlanmaz çünkü renderlanması için useHttp ile gelen url ve config değerlerinin değişmesi yani bu hook'un farklı değerlerle kullanılması lazım.
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]); //useHttp farklı url ve config değerleriyle çağrıldıktan sonra sendRequest fonksiyonu yeniden oluşturulur(renderlanır) ve  bu nedenle de useEffect içindeki senRequest fonskiyonu çağrılır(gelen istek get request'i ise).
  //config, bu hookun kullanıldığı yerde tekrar tekrar yeniden oluşturulabilir. Çünkü içinde bulunduğu komponent tekrar tekrar renderlanabilir. Bu nedenle configi bulunduğu kompenentin komponent fonksiyonu dışında tanımlanması gerekir.

  return {
    data,
    error,
    isLoading,
    sendRequest,
    clearData,
  };
}

export default useHttp;
