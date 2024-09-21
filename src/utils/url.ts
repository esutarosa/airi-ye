export const shortenUrl = (url?: string) =>
  url
    ? url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, "")
    : undefined;

export const makeUrlAbsolute = (url?: string) =>
  url !== undefined
    ? (!url.startsWith("http") ? `https://${url}` : url).replace(/\/$/, "")
    : undefined;
