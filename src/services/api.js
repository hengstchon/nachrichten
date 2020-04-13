import Parser from "rss-parser";

const CORS_PROXY = "https://cors.zme.ink/";

const parseUrl = async url => {
  let parser = new Parser();
  const res = await parser.parseURL(CORS_PROXY + url);
  return res;
};

export const getFeeds = async () => {
  const url = "https://www.tagesschau.de/xml/rss2";
  const res = await parseUrl(url);
  return res;
};
