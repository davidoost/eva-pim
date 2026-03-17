export type FormState<T extends Record<string, unknown>> = {
  status: FormStateStatus;
  fieldValues?: Partial<T>;
  fieldErrors?: FieldErrors<T>;
  formErrors?: string[];
};

export type FieldErrors<T extends Record<string, unknown>> = Partial<
  Record<keyof T, { errors: string[] }>
>;

export type FormStateStatus = "default" | "error" | "success";
