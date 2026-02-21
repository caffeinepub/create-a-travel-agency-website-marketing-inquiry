import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    destination: string;
    numTravelers: bigint;
    travelDates?: string;
    fullName: string;
    email: string;
    message: string;
    timestamp: Time;
    phone?: string;
    budgetRange?: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry>;
    submitInquiry(fullName: string, email: string, phone: string | null, travelDates: string | null, destination: string, numTravelers: bigint, budgetRange: string | null, message: string): Promise<bigint>;
}
