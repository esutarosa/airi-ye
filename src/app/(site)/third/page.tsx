import type { FC } from "react";
import Layout from "@/components/layouts/layout";
import { Course, CourseProvider } from "@/components/course";

const HomePage: FC = () => {
  return (
    <Layout>
      <CourseProvider>
        <Course />
      </CourseProvider>
    </Layout>
  );
};

export default HomePage;
