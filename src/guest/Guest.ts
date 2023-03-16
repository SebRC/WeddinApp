export interface Guest {
    name: string;
    guests?: Guest[]
    foodInfo?: string;
    attending: boolean;
}