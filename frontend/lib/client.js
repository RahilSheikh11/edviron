import { buildUrl } from "./helperFunctions";

export const fetchData = async (url, fetchType, data) => {
    const updatedUrl=buildUrl(url)
    console.log(updatedUrl)
    try {
        var response;
        if(fetchType=="Get" || fetchType=="Delete"){
            response = await fetch(updatedUrl, {
                method: fetchType,
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              });
        }
        else{
            response = await fetch(url, {
                method: fetchType,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data || ""),
                credentials: "include",
              });
        }
        
      const json = await response.json();
      return json;
    } catch (err) {
      console.log("Error in fetching data", err);
      return null;
    }
  };

  