export interface Guest {
    id?: string;
    name: string;
    guests?: Guest[];
    guestIds?: string[];
    foodInfo?: string;
    songWishes: string[];
    attending: boolean;
    role?: string;
}