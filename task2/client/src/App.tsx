import React, { useState, useEffect } from "react";
import { videoSearch, nextPage, postSearch } from "./apiCalls";
import { validate } from "./validation/SearchValidation";
import { VideoList } from "./videoList/VideoList";
import { Search } from "./search/Search";
import { useInfiniteScroll } from "./customHooks/useInfiniteScroll";
import { videoObjMock } from "./mocks";
import "./App.css";

export const App = (): JSX.Element => {
  const getNextPage = () => {
    nextPage(submit, token).then((res) => {
      setSearchResult([...searchResult, ...res.items]);
      setToken(res.nextPageToken);
      setIsFetching(false);
    });
  };
  const [searchFor, setSearchFor] = useState<string>("dogs");
  const [submit, setSubmit] = useState<string>("dogs");

  const [error, setError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(getNextPage);
  const [token, setToken] = useState("");
  const [searchResult, setSearchResult] = useState(videoObjMock);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFor(event.target.value);
  };
  const handleSubmit = () => {
    if (!validate("search", searchFor, setError)) return false;
    setSubmit(searchFor);
    postSearch(searchFor);
  };

  const getDate = () => {
    videoSearch(submit).then((res) => {
      setSearchResult(res.items);
      setToken(res.nextPageToken);
    });
  };

  useEffect(() => {
    getDate();
  }, [submit]);

  return (
    <div className={"container"}>
      <Search
        searchFor={searchFor}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
      <VideoList searchResult={searchResult} />
    </div>
  );
};

export default App;
