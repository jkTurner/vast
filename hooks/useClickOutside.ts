import { useEffect } from "react";

type Callback = () => void;

export function useClickOutside(ref: React.RefObject<HTMLElement | null>, callback: Callback) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback])
}