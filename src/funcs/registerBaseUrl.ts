import config from "../config";

/**
 * This function is one of the ways you can set the base url.
 *
 * @param {string} baseUrl
 * @returns {void}
 */
export default (baseUrl: string): void => {
  config.setBaseUrl(baseUrl);
};
