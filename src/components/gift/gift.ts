export interface Gift {
    id?: string;
    image: string;
    name: string;
    url: string;
    price?: string;
    reserved: boolean;
    reservedBy?: string;
  }