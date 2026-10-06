import type { IUser } from "@/lib";
import { useCallback, useEffect, useMemo, useState } from "react";
import { userService } from ".";

export function useCurrentUser() {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    
    const isAuthenticated = useMemo<boolean>(() => {
        if (!user) return false;
        return user?.email?.length > 0;
    }, [user]);

    const loadUser = useCallback(async (cancelled?: boolean) => {
        userService.getCurrent().then(res => {
            console.log("loadUser", res.data)
            if (!cancelled) {
                setUser(res.data);
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

    return { user, loading, isAuthenticated, loadUser };
}