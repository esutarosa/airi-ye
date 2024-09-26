"use client";

import { useEffect, type FC } from "react";
import { Container } from "@/components/layouts";
import { useCourse } from "./course-context";

const Course: FC = () => {
  const { course } = useCourse();

  useEffect(() => {}, [course]);

  return (
    <Container>
      <div>Content</div>
    </Container>
  );
};

export default Course;
