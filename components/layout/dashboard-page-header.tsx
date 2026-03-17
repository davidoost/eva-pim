import { ReactNode } from "react";

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export default function DashboardPageHeader({
  description,
  title,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}
