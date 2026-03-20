import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

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
  cookies?: ReadonlyRequestCookies;
  type?: "message" | "async-message" | "async-result";
}
