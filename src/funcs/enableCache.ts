import config from "../config";

/**
 * This function is one of the ways you can enable and disable the cache.
 *
 * @param {boolean} enable
 * @returns {void}
 */
export default (enable: boolean): void => {
  config.enableCache = enable;
};
