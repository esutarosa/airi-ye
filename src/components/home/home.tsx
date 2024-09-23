import type { FC } from "react";
import { Container } from "@/components/layouts";
import { HomeCards } from "@/components/home";

const Home: FC = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold">Оберіть профіль</h1>
      <HomeCards />
    </Container>
  );
};

export default Home;
