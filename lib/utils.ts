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
