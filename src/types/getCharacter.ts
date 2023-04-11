export interface GetComics {
  data: {
    count: number;
    limit: number;
    total: number;
    results: Character[];
  };
}

export interface Character {
  comics: Comics;
  description: string;
  events: Events;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: Series;
  stories: Stories;
  thumbnail: Thumbnail;
  urls: Url[];
  total: number;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Array<{
    name: string;
    resourceURI: string;
  }>;
  returned: number;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: Array<{
    name: string;
    resourceURI: string;
  }>;
  returned: number;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Array<{
    name: string;
    resourceURI: string;
  }>;
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Array<{
    name: string;
    resourceURI: string;
    type: string;
  }>;
  returned: number;
}

export interface Thumbnail {
  extension: string;
  path: string;
}

export interface Url {
  type: string;
  url: string;
}
