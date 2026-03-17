"use client";

import {
  Fieldset,
  Description,
  TextField,
  Input,
  ErrorMessage,
  Button,
  Spinner,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useActionState } from "react";
import validateEnvironment from "./action";

export default function ValidateEnvironmentForm() {
  const [state, action, isLoading] = useActionState(validateEnvironment, {
    status: "default",
  });

  return (
    <form action={action} className="flex flex-col max-w-sm gap-4">
      <Fieldset>
        <Fieldset.Legend>
          Deploy EVA applications with one click of a button
        </Fieldset.Legend>
        <Description>
          Paste your Admin Suite URL below to get started.
        </Description>
        <TextField
          isRequired
          name="query"
          defaultValue={state?.fieldValues?.query}
        >
          <Input placeholder="euw-newblack-test" />
          {state?.fieldErrors?.query && (
            <ErrorMessage>{state.fieldErrors?.query?.errors[0]}</ErrorMessage>
          )}
        </TextField>
      </Fieldset>
      <div className="flex gap-4">
        <Button type="submit">
          Next
          {isLoading ? (
            <Spinner size="sm" color="current" />
          ) : (
            <Icon icon={"hugeicons:arrow-right-02"} />
          )}
        </Button>
      </div>
    </form>
  );
}
