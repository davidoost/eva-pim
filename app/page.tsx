"use server";

import ValidateEnvironmentForm from "@/components/forms/validate-environment/form";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { RecentNamespacesList } from "@/components/recent-namespaces-list";
import { Card, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";

export default async function Home() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center p-4">
      <ThemeSwitcher className="absolute top-4 right-4" />

      <div className="w-full max-w-sm flex flex-col gap-6">
        {/* Branding */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="bg-accent flex size-12 items-center justify-center rounded-2xl shadow-md">
            <Icon
              icon="gravity-ui:cloud-nut-hex"
              className="text-white text-2xl"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">EVA PIM</h1>
            <p className="text-sm text-muted mt-1">
              Enter your environment URL to continue
            </p>
          </div>
        </div>

        {/* Form card */}
        <Card>
          <Card.Content className="gap-4">
            <ValidateEnvironmentForm />
            <RecentNamespacesList
              separator={
                <div className="flex items-center gap-3">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted">or jump back in</span>
                  <Separator className="flex-1" />
                </div>
              }
            />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
