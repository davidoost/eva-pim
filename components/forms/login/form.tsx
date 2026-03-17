"use client";

import {
  Input,
  Fieldset,
  Description,
  TextField,
  Label,
  FieldError,
  InputGroup,
  Button,
  ErrorMessage,
  buttonVariants,
  Spinner,
  toast,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { login } from "./action";
import { useRouter } from "next/navigation";

export default function LoginForm({ namespace }: { namespace: string }) {
  const formAction = login.bind(null, namespace);
  const router = useRouter();

  const [state, action, isLoading] = useActionState(formAction, {
    status: "default",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      toast.success("You are now logged in");
      router.push(`/${namespace}/dashboard`);
    }

    if (state.status === "error") {
      toast.danger("Something went wrong");
    }
  }, [state]);

  return (
    <form action={action} className="flex flex-col max-w-3xl gap-4">
      <Fieldset>
        <Fieldset.Legend>Log in</Fieldset.Legend>
        <Description>
          You can log in with your EVA credentials for <b>{namespace}</b>
        </Description>
        <TextField name="username" defaultValue={state.fieldValues?.username}>
          <Label>Email</Label>
          <Input placeholder="example@mail.com" />
          <FieldError />
        </TextField>
        <TextField
          defaultValue={state.fieldValues?.password}
          name="password"
          type={showPassword ? "text" : "password"}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input placeholder="••••••••" />
            <InputGroup.Suffix className="pr-0.5">
              <Button
                isIconOnly
                size="sm"
                variant="ghost"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon
                  icon={showPassword ? "hugeicons:view-off" : "hugeicons:view"}
                  className="size-4"
                />
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
      </Fieldset>
      {state.status === "error" && state.formErrors && (
        <ErrorMessage>{state.formErrors[0]}</ErrorMessage>
      )}
      <div className="flex gap-4">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          <Icon icon={"hugeicons:arrow-left-02"} />
          Back
        </Link>
        <Button type="submit">
          {isLoading && <Spinner size="sm" color="current" />}
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </div>
    </form>
  );
}
