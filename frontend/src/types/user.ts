import type { CountryCode } from "./CountryCode";

export interface User {
    id: string;
    name: string;
    email: string;
    isEmailVerified: boolean;
    country: CountryCode;
}