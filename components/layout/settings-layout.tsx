import { Description, Label } from "@heroui/react";
import { ReactNode } from "react";

type SettingsLayoutProps = {
  children: ReactNode;
};

export function SettingsLayout({ children }: SettingsLayoutProps) {
  return <div className="w-full grid grid-cols-3 gap-2">{children}</div>;
}

type SettingProps = {
  label: string;
  children?: ReactNode;
  value?: string | null;
};

export function Setting({ label, children, value }: SettingProps) {
  const content =
    value !== undefined
      ? (value ?? <span className="text-muted">—</span>) || (
          <span className="text-muted">—</span>
        )
      : children;

  return (
    <>
      <Label>{label}</Label>
      <Description className="text-sm col-span-2">{content}</Description>
    </>
  );
}
