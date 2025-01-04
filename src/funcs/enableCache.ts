import config from "../config";

export default (enable: boolean) => {
  config.enableCache = enable;
};
