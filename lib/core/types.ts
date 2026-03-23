export type SetCookiesProps = {
  namespace: string;
  at: string;
  rt: string;
  rtExpString: string;
};

export type ProductProperty = {
  ID: string;
  DisplayName?: string;
};

export type TaxCode = {
  ID: string;
  Name: string;
};

export interface CallEvaServiceProps {
  service: string;
  body?: Record<string, unknown>;
  extraHeaders?: Record<string, string>;
  type?: "message" | "async-message" | "async-result";
}

export enum Scope {
  None = 0,
  Create = 1,
  Edit = 2,
  Delete = 4,
  View = 8,
  Manage = 31, // 1 | 2 | 4 | 8 (+0)
  Settings = 32,
  Scripting = 64,
  All = 127,
}

export type Functionalities = Record<string, number>;

export type User = {
  ScopedFunctionalities: Functionalities;
};
