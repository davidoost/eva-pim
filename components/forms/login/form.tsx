"use client";

import {
  Input,
  TextField,
  Label,
  FieldError,
  InputGroup,
  Button,
  ErrorMessage,
  Spinner,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useActionState, useState } from "react";
import { login } from "./action";

export default function LoginForm({ namespace }: { namespace: string }) {
  const formAction = login.bind(null, namespace);
  const [state, action, isLoading] = useActionState(formAction, {
    status: "default",
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={action} className="flex flex-col gap-3">
      <TextField
        name="username"
        defaultValue={state.fieldValues?.username}
        variant="secondary"
      >
        <Label>Email</Label>
        <Input placeholder="example@mail.com" variant="secondary" />
        <FieldError />
      </TextField>

      <TextField
        name="password"
        type={showPassword ? "text" : "password"}
        defaultValue={state.fieldValues?.password}
        variant="secondary"
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
        <FieldError />
      </TextField>

      {state.status === "error" && state.formErrors && (
        <ErrorMessage>{state.formErrors[0]}</ErrorMessage>
      )}

      <Button type="submit" className="w-full mt-1">
        {isLoading ? <Spinner size="sm" color="current" /> : null}
        {isLoading ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
