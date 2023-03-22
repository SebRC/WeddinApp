import { useMemo } from "react";

export const useMemoExample = (value: string) => {
    const calculatedValue = useMemo(() => {
        value = value + "memo"
    }, [value])
    return calculatedValue;
}