import { createContext, useState, useContext } from "react"
import React  from 'react'

export const APIContext = createContext(); 

const APIContextProvider = ({children}) => {

    const fetchData = async (url, fetchType, data) => {
        try {
            var response;
            if(fetchType=="Get" || fetchType=="Delete"){
                response = await fetch(url, {
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

  return (
    <APIContext.Provider value={{fetchData}}>{children}</APIContext.Provider>
  )
}

export default APIContextProvider