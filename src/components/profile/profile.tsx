"use client";

import type { FC } from "react";
import { Container } from "@/components/layouts";
import { useProfile } from "@/providers/profile-provider";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Trash, Images } from "lucide-react";

const Profile: FC = () => {
  const { session } = useProfile();

  return (
    <Container>
      <div className="flex flex-col space-y-2 border-b border-content1 pb-6">
        <h1 className="text-xl font-bold tracking-tight">Обліковий запис</h1>
        <p className="text-default-400">
          Справжня інформація та активності вашої власності.
        </p>
      </div>
      <div className="flex items-center space-y-2 py-6 justify-between border-b border-content1">
        <div className="flex items-center gap-4">
          <Image
            src="/images/user-default.jpg"
            alt="Nyan!"
            className="w-20 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">Фото профілю</h3>
            <p className="text-sm text-default-400">
              Однак ти нічого не зробиш з цим (поки що).
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button isDisabled variant="ghost">
            <Images className="size-4" />
            Завантажити зображення
          </Button>
          <Button isDisabled variant="bordered" color="danger">
            <Trash className="size-4" />
            Видалити
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 py-6">
        <h2 className="text-xl font-bold tracking-tight">
          Особиста інформація
        </h2>
        <p className="text-default-400">
          У цьому розділі наведена основна інформація про твiй профіль.
        </p>
        <div className="flex gap-4 pt-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">Імя</h3>
            <p className="text-default-400">{session?.user?.name}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">Пошта</h3>
            <p className="text-default-400">{session?.user?.email}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
