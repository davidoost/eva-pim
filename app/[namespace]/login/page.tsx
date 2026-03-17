import LoginForm from "@/components/forms/login/form";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { core } from "@/lib/core";
import { notFound } from "next/navigation";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ namespace: string }>;
}) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <ThemeSwitcher className="absolute top-4 right-4" />
      <LoginForm namespace={namespace} />
    </div>
  );
}
