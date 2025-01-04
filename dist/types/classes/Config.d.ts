import { Types } from "../types";
export default class Config {
    private baseUrl;
    enableCache: boolean;
    constructor(options?: Types.ConfigOptions);
    getBaseUrl(): string;
    setBaseUrl(baseUrl: string): void;
}
