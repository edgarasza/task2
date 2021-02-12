const key: string = "AIzaSyBWGWkKOghsxptXyqkIv5XSacwtvodumIE";

export const videoSearch = async (keyword: string) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&key=${key}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const nextPage = async (keyword: string, token: string) => {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&pageToken=${token}&q=${keyword}&key=${key}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const postSearch = (searchResult: string) => {
  fetch("http://localhost:8081/api/search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchResult: searchResult,
    }),
  });
};

export const postViewed = (
  publishedAt: string,
  title: string,
  description: string,
  thumbnail: string
) => {
  fetch("http://localhost:8081/api/viewed", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      publishedAt: publishedAt,
      title: title,
      description: description,
      thumbnail: thumbnail,
    }),
  });
};
