import type { FC } from "react";
import { Layout } from "@/components/layouts";
import { auth } from "@/auth";
import { Profile } from "@/components/profile";
import { ProfileProvider } from "@/providers";

const ProfilePage: FC = async () => {
  const session = await auth();

  return (
    <Layout>
      <ProfileProvider session={session}>
        <Profile />
      </ProfileProvider>
    </Layout>
  );
};

export default ProfilePage;
