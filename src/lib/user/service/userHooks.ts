import type { IUser } from "@/lib";
import { useCallback, useEffect, useState } from "react";
import { userService } from ".";

export function useCurrentUser() {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    const loadUser = useCallback(async (cancelled?: boolean) => {
        userService.getCurrent().then(data => {
            if (!cancelled) {
                setUser(data);
                setLoading(false);
            }
        });
    }, [])

    useEffect(() => {
        let cancelled = false;

        loadUser(cancelled);

        return () => {
            cancelled = true;
        };
    }, []);

    return { user, loading, loadUser };
}