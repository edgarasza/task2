export interface VideoProps {
  searchResult: {
    id: {
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
    };
  }[];
}

export interface VideoDetails {
  publishedAt: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  onClick: any;
}
