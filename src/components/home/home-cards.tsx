"use client";

import type { FC } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

const FACE_DATA = [
  {
    title: "First",
  },
  {
    title: "Second",
  },
];

const HomeCards: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {FACE_DATA.map((item, idx) => (
        <Link href="/" key={idx}>
          <Card shadow="sm" className="h-64">
            <CardHeader className="justify-between">
              <h3 className="text-small font-semibold leading-none">Деталі</h3>
              <h4 className="text-small leading-none tracking-tight">
                Актуально зараз
              </h4>
            </CardHeader>
            <CardBody>
              <h2 className="text-3xl font-bold leading-none">{item.title}</h2>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default HomeCards;
