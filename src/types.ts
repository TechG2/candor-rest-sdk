import User from "./classes/User";

/**
 * Types namespace.
 *
 * @namespace
 */
export namespace Types {
  /**
   * Main API class options.
   *
   * @type {{ apiKey: string; config?: ConfigOptions }}
   */
  export type CandorAPIOptions = { apiKey: string; config?: ConfigOptions };

  /**
   * Config class options.
   *
   * @type {{ baseUrl?: string; enableCache?: boolean }}
   */
  export type ConfigOptions = { baseUrl?: string; enableCache?: boolean };

  /**
   * Frelancer profile type.
   *
   * @type {{ portfolio: string; timezone: string; rating: string; services?: string[]; }}
   */
  export type FreelacerProfile = {
    portfolio: string;
    timezone: string;
    rating: string;
    services?: string[];
  };

  /**
   * CandorUser interface.
   *
   * @interface
   */
  export interface UserInterface {
    freelancerId: string | undefined;
    flags: string[];
    bio: string | undefined;
    avatar: string | undefined;
    type: UserType;
    freelancerProfile: FreelacerProfile | undefined;
    contactEmail: string | undefined;
    username: string;
  }

  /**
   * CandorReview interface.
   *
   * @interface
   */
  export interface ReviewInterface {
    rating: number;
    review: string;
    reviewer: User;
    reviewed: User;
  }

  /**
   * User type enum. This value depends on how you created your account.
   *
   * @enum
   */
  export enum UserType {
    Native,
    Discord,
  }

  /**
   * Request namespace. All these types/interfaces all used during https requests.
   *
   * @namespace
   */
  export namespace Request {
    /**
     * Used in freelancers/@me endpoint.
     */
    export type Me = {
      uid: string;
      email_opt_out: boolean;
      flags: string[];
      bio: string;
      candor_hub_user: boolean;
      avatar: string;
      id: string;
      type: UserType;
      freelancer_profile: FreelacerProfile;
      contact_email: string;
      username: string;
    };

    /**
     * Used in reviews/freelancer/:userId endpoint.
     */
    export type Review = {
      rating: number;
      reviewed: Me;
      reviewer: Me;
      review: string;
    };
  }
}

/**
 * Events enum.
 *
 * @enum
 */
export enum Events {
  Ready = "ready",
}
