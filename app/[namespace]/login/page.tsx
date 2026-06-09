import LoginForm from "@/components/forms/login/form";
import { initiateOpenIDLogin } from "@/components/forms/login/initiate-openid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { core } from "@/lib/core";
import { Button, Card, Separator } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ namespace: string }>;
}) {
  const { namespace } = await params;

  const env = await core.getEnvironmentByNamespace(namespace);
  if (!env) notFound();

  const res = await env.eva.GetAvailableOpenIDConfigurations({});
  const providers = res.Providers ?? [];

  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center p-4">
      <ThemeSwitcher className="absolute top-4 right-4" />

      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="bg-accent flex size-12 items-center justify-center rounded-2xl shadow-md">
            <Icon
              icon="gravity-ui:cloud-nut-hex"
              className="text-white text-2xl"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">EVA PIM</h1>
            <p className="text-sm text-muted mt-1">Sign in to {namespace}</p>
          </div>
        </div>

        <Card>
          <Card.Content className="gap-4">
            <LoginForm namespace={namespace} />

            {providers.length > 0 && (
              <>
                <div className="flex items-center gap-3">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted">or continue with</span>
                  <Separator className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                  {providers.map((p) => {
                    const action = initiateOpenIDLogin.bind(
                      null,
                      namespace,
                      p.ID,
                      p.BaseUrl,
                      p.ClientID,
                    );
                    return (
                      <form key={p.ID} action={action}>
                        <Button
                          type="submit"
                          variant="outline"
                          className="w-full"
                        >
                          {p.Name}
                        </Button>
                      </form>
                    );
                  })}
                </div>
              </>
            )}
          </Card.Content>
        </Card>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-muted inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icon icon="gravity-ui:arrow-left" className="size-3.5" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
