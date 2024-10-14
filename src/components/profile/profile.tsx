"use client";

import type { FC } from "react";
import { Container } from "@/components/layouts";
import { useProfile } from "@/providers/profile-provider";

const Profile: FC = () => {
  const { session } = useProfile();

  return (
    <Container>
      <h1>Profile</h1>
      <div>User Email: {session?.user?.email || "Guest"}</div>
    </Container>
  );
};

export default Profile;
