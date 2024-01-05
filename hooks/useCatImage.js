import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/cat/says/";

export  function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState();
  
    useEffect(() => {
      if (!fact) return
        const firstWord = fact.split(" ")[0];
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            console.log(response);
            //setImageUrl({ url });
            // I need to change the url manually bc the api is not giving me the url
            setImageUrl(`${CAT_PREFIX_IMAGE_URL}${firstWord}`);
          });
      
    }, [fact]);
    return { imageUrl };
  }