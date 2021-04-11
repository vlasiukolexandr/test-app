type StatElement = {
  "downloads": number,
  "id": string,
  "image": string,
  "name": string,
  "pos": number,
  "rank_history": {
    [key: string]: number
  },
  "rating": number,
  "released": string,
  "revenue": number,
  "url": string
}

export type {
  StatElement
}
