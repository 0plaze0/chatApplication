import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputes:ClassValue[]){
    return twMerge(clsx(inputes));
}