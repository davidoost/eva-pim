"use server";

import ValidateEnvironmentForm from "@/components/forms/validate-environment/form";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <ThemeSwitcher className="absolute top-4 right-4" />
      <ValidateEnvironmentForm />
    </div>
  );
}
