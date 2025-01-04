import User from "./classes/User";
export declare namespace Types {
    type CandorAPIOptions = {
        apiKey: string;
        config?: ConfigOptions;
    };
    type ConfigOptions = {
        baseUrl?: string;
        enableCache?: boolean;
    };
    type FreelacerProfile = {
        portfolio: string;
        timezone: string;
        rating: string;
        services?: string[];
    };
    interface UserInterface {
        freelancerId: string | undefined;
        flags: string[];
        bio: string | undefined;
        avatar: string | undefined;
        type: UserType;
        freelancerProfile: FreelacerProfile | undefined;
        contactEmail: string | undefined;
        username: string;
    }
    interface ReviewInterface {
        rating: number;
        review: string;
        reviewer: User;
        reviewed: User;
    }
    enum UserType {
        Native = 0,
        Discord = 1
    }
    namespace Request {
        type Me = {
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
        type Review = {
            rating: number;
            reviewed: Me;
            reviewer: Me;
            review: string;
        };
    }
}
export declare enum Events {
    Ready = "ready"
}
