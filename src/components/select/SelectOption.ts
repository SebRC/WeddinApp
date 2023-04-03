import { ReactNode } from "react";

export interface SelectOption {
    option: string;
    value: string;
    icon?: ReactNode;
}