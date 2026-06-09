"use client";

import { TextField, Input, ErrorMessage, Button, Spinner } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useActionState } from "react";
import validateEnvironment from "./action";

export default function ValidateEnvironmentForm() {
  const [state, action, isLoading] = useActionState(validateEnvironment, {
    status: "default",
  });

  return (
    <form action={action} className="flex flex-col gap-3">
      <TextField
        isRequired
        name="query"
        defaultValue={state?.fieldValues?.query}
        aria-label="input"
      >
        <Input
          placeholder="euw.yourbrand.test.eva-online.cloud"
          aria-label="endpoint"
          variant="secondary"
        />
        {state?.fieldErrors?.query && (
          <ErrorMessage>{state.fieldErrors?.query?.errors[0]}</ErrorMessage>
        )}
      </TextField>
      <Button type="submit" className="w-full">
        Continue
        {isLoading ? (
          <Spinner size="sm" color="current" />
        ) : (
          <Icon icon={"hugeicons:arrow-right-02"} />
        )}
      </Button>
    </form>
  );
}
