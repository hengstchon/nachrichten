import Parser from "rss-parser";
import { feeds } from "../services/feedsConfig";

const CORS_PROXY = "https://cors.zme.ink/";

const parseUrl = async url => {
  let parser = new Parser();
  const res = await parser.parseURL(CORS_PROXY + url);
  return res;
};

const fetchFeed = async feedName => {
  const feed = feeds.find(f => feedName === f.slug);
  const res = await parseUrl(feed.rssUrl);
  return res;
};

const removeDuplicates = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
};

const clean = items => {
  // remove newsItems that have the same guid
  const key = "guid" in items[0] ? "guid" : "isoDate";
  items = removeDuplicates(items, key);
  // sorting by date from newst to oldest
  items = items.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
  return items;
};

export const fetchNewsItems = async feedName => {
  const feed = await fetchFeed(feedName);
  // console.log(feed);
  const items = clean(feed.items);
  return items;
};
