"use client";

import type { FC } from "react";
import { Container } from "@/components/layouts";
import { useProfile } from "@/providers/profile-provider";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Trash, Images } from "lucide-react";
import { signoutUserAction } from "@/actions/auth/signout-user-action";

const Profile: FC = () => {
  const { session } = useProfile();

  const clickHandler = async () => {
    await signoutUserAction();
    window.location.href = "/auth";
  };

  return (
    <Container centered>
      <Card className="">
        <CardHeader className="justify-between gap-5">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/images/user-default.jpg"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {session?.user?.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {session?.user?.email}
              </h5>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              isDisabled
              size="sm"
              color="default"
              radius="full"
              variant="ghost"
            >
              <Images className="size-4" />
              <span className="hidden md:inline">Завантажити</span>
            </Button>
            <Button
              isDisabled
              size="sm"
              radius="full"
              variant="bordered"
              color="danger"
            >
              <Trash className="size-4" />
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400"></CardBody>
        <CardFooter className="gap-3">
          <Button color="danger" size="sm" onClick={clickHandler}>
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Profile;
