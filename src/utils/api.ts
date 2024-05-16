import config from "../libs/Config";

export function getApiUrl(endpoint: string) {
  return `${config.get("backend.uri")}/${endpoint}`;
}
