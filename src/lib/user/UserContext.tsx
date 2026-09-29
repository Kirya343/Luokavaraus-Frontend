import { createContext, useContext } from "react";
import type { IUser } from "./userTypes";
import { userService } from "./service";

interface UserContextType {
    user: IUser | null;
    loading: boolean;
    loadUser: () => void;
} 

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("useUser must be used inside UserProvider");
    }
    return ctx;
}

export const UserProvider = ({ children }: { children?: React.ReactNode }) => {

    const { user, loading, loadUser } = userService.useCurrentUser();

    return (
        <UserContext.Provider value={{ user, loading, loadUser }}>
            {children}
        </UserContext.Provider>
    );
};