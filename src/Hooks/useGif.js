import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";
const randomApi =
  "https://api.giphy.com/v1/gifs/random?api_key=&tag=&rating=g";
const tagApi = `https://api.giphy.com/v1/gifs/random?api_key=&rating=g`;

function useGif() {
  const [gifdata, setgifData] = useState();
  const [loader, setLoader] = useState(false);

  async function fetchData(search) {
    try {
      setLoader(true);
      const response = await fetch(
        search ? `${tagApi}&tag=${search}` : randomApi
      );
      const jsonData = await response.json();
      const { data } = jsonData;
      const imgUrl = data.images.original.url;
      setgifData(imgUrl);
      setLoader(false);
    } catch (error) {
      console.error("Failed to Fetch Data");
      toast.warning("Network Error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gifdata, loader, fetchData, Hourglass };
}

export default useGif;
