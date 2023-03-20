export interface Guest {
    name: string;
    guests?: Guest[];
    guestIds?: string[];
    foodInfo?: string;
    songWishes: string[];
    attending: boolean;
}