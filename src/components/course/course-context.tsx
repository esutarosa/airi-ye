"use client";

import {
  type PropsWithChildren,
  type FC,
  createContext,
  useContext,
  useState,
} from "react";

type CourseContextType = {
  course: "3" | "4";
  setCourse: (course: "3" | "4") => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};

const CourseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [course, setCourse] = useState<"3" | "4">("3");

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
