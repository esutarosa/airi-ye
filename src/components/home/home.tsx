import type { FC } from "react";
import { Container } from "@/components/layouts";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

const Home: FC = () => {
  return (
    <Container containerClassName="space-y-8">
      <h1 className="text-4xl font-bold">Профіля</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Link href="/third">
          <Card shadow="sm" className="h-64">
            <CardHeader className="justify-between">
              <h3 className="text-sm font-semibold leading-none">Деталі</h3>
              <h4 className="text-sm text-warning leading-none tracking-tight">
                Актуально зараз
              </h4>
            </CardHeader>
            <CardBody>
              <h2 className="text-3xl font-bold leading-none">Третій рік</h2>
            </CardBody>
          </Card>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
