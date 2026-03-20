import { Scope, User } from "./core/types";

export function ensureHasProtocol(s: unknown): string | unknown {
  if (typeof s !== "string") return s;
  // If it already has a scheme like "http:", "https:", "ftp:" etc.
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(s)) return s;
  return `https://${s}`;
}

export function toEvaApiUrl(input: string): string {
  const url = new URL(input);

  // Remove env prefixes like "develop--"
  const hostWithoutEnv = url.hostname.replace(/^[a-z]+--/, "");

  return `https://api.${hostWithoutEnv}`;
}

/**
 * Checks if a functionality has the required scope
 */
export function hasScope(
  user: User,
  key: string,
  requiredScope: Scope,
): boolean {
  const currentScope = user.ScopedFunctionalities[key] ?? Scope.None;

  // "All" always passes
  if (currentScope === Scope.All) return true;

  // Bitwise check: does current include required?
  return (currentScope & requiredScope) === requiredScope;
}
