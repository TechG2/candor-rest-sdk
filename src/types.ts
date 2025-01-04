import User from "./classes/User";

export namespace Types {
  export type CandorAPIOptions = { apiKey: string; config?: ConfigOptions };
  export type ConfigOptions = { baseUrl?: string; enableCache?: boolean };
  export type FreelacerProfile = {
    portfolio: string;
    timezone: string;
    rating: string;
    services?: string[];
  };

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
  export interface ReviewInterface {
    rating: number;
    review: string;
    reviewer: User;
    reviewed: User;
  }

  export enum UserType {
    Native,
    Discord,
  }

  export namespace Request {
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

    export type Review = {
      rating: number;
      reviewed: Me;
      reviewer: Me;
      review: string;
    };
  }
}

export enum Events {
  Ready = "ready",
}
