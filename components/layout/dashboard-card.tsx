import { Card, Separator } from "@heroui/react";
import { ReactNode } from "react";

export interface DashboardCardProps {
  title: string;
  description?: string;
  headerContent?: ReactNode;
  children: ReactNode[] | ReactNode;
}

export default function DashboardCard({
  title,
  description,
  children,
  headerContent,
}: DashboardCardProps) {
  return (
    <Card>
      <div className="flex flex-row justify-start items-center">
        <Card.Header className="flex-1">
          <Card.Title className="text-base font-semibold">{title}</Card.Title>
          {description && <Card.Description>{description}</Card.Description>}
        </Card.Header>
        {headerContent}
      </div>
      <Separator />
      <Card.Content>{children}</Card.Content>
    </Card>
  );
}
