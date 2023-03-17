export interface Guest {
    name: string;
    guests?: Guest[];
    foodInfo?: string;
    songWishes: string[];
    attending: boolean;
}