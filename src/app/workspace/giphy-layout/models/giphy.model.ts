export interface IGiphyResponse {
  data: IGiphyData;
  meta: IGiphyMeta;
  pagination: IGiphyPagination;
}

export interface IGiphyMeta {
  msg: string;
  response_id: string;
  status: number;
}

export interface IGiphyPagination {
  limit: number;
  offset: number;
  count?: number;
  total_count?: number;
}

export interface IGiphyData {
  id: string,
  images: {
    fixed_width: {
      webp: string;
    };
  };
  username: string;
}
