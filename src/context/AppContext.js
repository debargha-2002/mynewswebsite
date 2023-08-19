import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  //  const[currDate,setCurrDate] = useState(""); //see

  let date = new Date();
  date.setDate(date.getDate() - 4);
  let temp = date.toISOString();
  console.log("Date");
  console.log(temp);
  //setCurrDate(temp)
  // console.log(currDate)
    let apiKey = `db6f3c884345cafdfcfef2fe1a77bfff`
  //let apiKey = `5617795fcd374d4688ee32463969d859`;
  //let apiKey = `df20dc3f19274a638cdffd7282e310b7`
  //let apiKey = `8161f97c07e94daab56d13c3cd7bf679`
  //let apiKey = `f96924955aba46ac9940f4a98466c7db`;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("india");
  //const url = `https://newsapi.org/v2/top-headlines?country=in&language=en&sortBy=publishedAt&pageSize=12&page=${page}&apikey=`
  //const url = `https://newsapi.org/v2/everything?q=${query}&from=${temp}&sortBy=publishedAt&pageSize=23&page=${page}&apikey=`;
  const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=`
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const [totalPage, setTotalPage] = useState(1);
  const [lightMode, setLightMode] = useState(true);

  async function fetchData() {
    setLoading(true);
    // if(category)
    // url += `&category=${category}`
    try {
      const response = await fetch(url + apiKey);
      const data = await response.json();
     // console.log(data.totalResults);
     // setTotalPage(Math.ceil(data.totalResults / 20));
      console.log(totalPage);
      console.log("api response");
      setPosts(data.articles);
      console.log(data.articles);
      //setPage(1)
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setTotalPage(1);
    }
    setLoading(false);
  }

  const value = {
    loading,
    setLoading,
    fetchData,
    posts,
    setPosts,
    totalPage,
    setTotalPage,
    page,
    setPage,
    query,
    setQuery,
    lightMode,
    setLightMode,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
