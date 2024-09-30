import { Users, AlignLeft, Book } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export const navItems: NavItem[] = [
  {
    label: "Студенти",
    href: "/students",
    icon: <Users className="w-4 h-4" />,
  },
  {
    label: "Розклад занять",
    href: "/schedule",
    icon: <AlignLeft className="w-4 h-4" />,
  },
  {
    label: "Домашка",
    href: "/homework",
    icon: <Book className="w-4 h-4" />,
  },
];
