"use client";

import {
  createContext,
  useContext,
  type PropsWithChildren,
  type FC,
} from "react";
import type { Session } from "next-auth";

export type ProfileContextType = {
  session: Session | null;
};

export type ProfileProviderProps = PropsWithChildren<{
  session: Session | null;
}>;

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context)
    throw new Error("useProfile must be used within a ProfileProvider");
  return context;
};

const ProfileProvider: FC<ProfileProviderProps> = ({ session, children }) => {
  return (
    <ProfileContext.Provider value={{ session }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
