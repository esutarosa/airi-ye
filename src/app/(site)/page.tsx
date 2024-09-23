import type { FC } from "react";
import Layout from "@/components/layouts/layout";
import { Home } from "@/components/home";

const HomePage: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
