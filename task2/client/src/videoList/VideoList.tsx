import React, { useState } from "react";
import { postViewed } from "../apiCalls";
import { VideoProps } from "../interfaces/videoInterface";
import { CardComp } from "./card/CardComp";
import "./videoList.css";

export const VideoList = (props: VideoProps): JSX.Element => {
  const [video, setVideo] = useState<string>("ma67yOdMQfs");
  const onClickVideo = (
    id: string,
    publishedAt: string,
    title: string,
    description: string,
    thumbnail: string
  ) => {
    setVideo(id);
    postViewed(publishedAt, title, description, thumbnail);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div>
        {props.searchResult !== undefined &&
          props.searchResult.map((video) => (
            <CardComp
              thumbnail={video.snippet.thumbnails.default.url}
              publishedAt={video.snippet.publishedAt}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              key={video.id.videoId}
              onClick={() =>
                onClickVideo(
                  video.id.videoId,
                  video.snippet.publishedAt,
                  video.snippet.title,
                  video.snippet.description,
                  video.snippet.thumbnails.default.url
                )
              }
            />
          ))}
      </div>
      <iframe
        id="ytplayer"
        title={video}
        className={"video"}
        allow="autoplay"
        src={`https://www.youtube.com/embed/${video}?autoplay=1`}
      ></iframe>
    </>
  );
};
