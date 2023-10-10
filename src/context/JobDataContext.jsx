import { createContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { getRequest } from "../services/request";
import { backend_url } from "../http-backend";

export const JobDataContext = createContext();

export const JobDataContextProvider = ({ children }) => {
  const [savedata, setSaveData] = useState([]);
  const cookie = new Cookies();
  const userId = cookie.get("userId");

  function fetchData() {
    getRequest({
      url: `${backend_url}/post/getAllSavedJobs?userId=${userId}`,
    })
      .then((res) => {
        setSaveData(res?.data?.data);
        // console.log("hello res", res.data);
      })
      .catch((e) => {
        setSaveData([]);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <JobDataContext.Provider
      value={{
        savedata,
        setSaveData,
      }}
    >
      {children}
    </JobDataContext.Provider>
  );
};
